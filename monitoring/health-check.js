#!/usr/bin/env node
/**
 * Platform Health Monitor
 * Continuously monitors all 33 platforms for availability and health
 * Reports metrics to Guardian Watchdog
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PLATFORMS = Array.from({ length: 33 }, (_, i) => `platform${i + 1}`);

// Configuration
const config = {
  baseUrl: process.env.PLATFORM_BASE_URL || 'http://localhost:3000',
  checkInterval: process.env.CHECK_INTERVAL || 30000, // 30 seconds
  timeout: process.env.HEALTH_CHECK_TIMEOUT || 5000,
  logFile: process.env.LOG_FILE || path.join(__dirname, '../logs/health.log'),
  metricsFile: process.env.METRICS_FILE || path.join(__dirname, '../logs/metrics.json'),
  alertThreshold: process.env.ALERT_THRESHOLD || 3, // Fail 3 times before alert
};

// Ensure logs directory exists
const logsDir = path.dirname(config.logFile);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Platform health state tracker
const platformState = {};
PLATFORMS.forEach(platform => {
  platformState[platform] = {
    healthy: true,
    consecutiveFailures: 0,
    lastCheck: null,
    lastError: null,
    responseTime: 0,
  };
});

/**
 * Log health check result
 */
function log(message, level = 'info') {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
  
  process.stdout.write(logEntry);
  fs.appendFileSync(config.logFile, logEntry, { encoding: 'utf8' });
}

/**
 * Save metrics to file
 */
function saveMetrics() {
  const metrics = {
    timestamp: new Date().toISOString(),
    platforms: platformState,
    summary: {
      total: PLATFORMS.length,
      healthy: Object.values(platformState).filter(p => p.healthy).length,
      unhealthy: Object.values(platformState).filter(p => !p.healthy).length,
      avgResponseTime: (Object.values(platformState).reduce((sum, p) => sum + p.responseTime, 0) / PLATFORMS.length).toFixed(2),
    },
  };

  fs.writeFileSync(config.metricsFile, JSON.stringify(metrics, null, 2), { encoding: 'utf8' });
  return metrics;
}

/**
 * Check health of a single platform
 */
async function checkPlatformHealth(platformNum) {
  const platformName = `platform${platformNum}`;
  const port = 3000 + (platformNum - 1); // Offset ports for local testing
  const url = `${config.baseUrl}:${port}/health/db`;
  
  const startTime = Date.now();
  
  try {
    const response = await fetch(url, {
      timeout: config.timeout,
      method: 'GET',
    });
    
    const responseTime = Date.now() - startTime;
    const state = platformState[platformName];
    
    if (response.ok) {
      const data = await response.json();
      
      // Platform is healthy
      if (state.consecutiveFailures > 0) {
        log(`✓ ${platformName} recovered (response: ${responseTime}ms)`, 'info');
      }
      
      state.healthy = true;
      state.consecutiveFailures = 0;
      state.responseTime = responseTime;
      state.lastCheck = new Date().toISOString();
      state.lastError = null;
      
      return { platformName, status: 'healthy', responseTime };
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    const state = platformState[platformName];
    state.consecutiveFailures++;
    state.responseTime = Date.now() - startTime;
    state.lastCheck = new Date().toISOString();
    state.lastError = error.message;
    
    // Trigger alert after threshold
    if (state.consecutiveFailures === config.alertThreshold) {
      state.healthy = false;
      log(`⚠ ALERT: ${platformName} is unhealthy (${error.message})`, 'warn');
    } else if (state.consecutiveFailures > config.alertThreshold) {
      log(`⚠ ${platformName} still down (attempt ${state.consecutiveFailures})`, 'warn');
    }
    
    return { platformName, status: 'unhealthy', error: error.message };
  }
}

/**
 * Check all platforms
 */
async function checkAllPlatforms() {
  log('Starting health check cycle...');
  
  const checks = PLATFORMS.map((_, idx) => checkPlatformHealth(idx + 1));
  const results = await Promise.all(checks);
  
  const metrics = saveMetrics();
  
  // Summary
  log(`Health check complete: ${metrics.summary.healthy}/${metrics.summary.total} healthy, avg response: ${metrics.summary.avgResponseTime}ms`);
  
  return results;
}

/**
 * Generate health report
 */
function generateReport() {
  const now = new Date().toISOString();
  const metrics = JSON.parse(fs.readFileSync(config.metricsFile, 'utf8'));
  
  const report = {
    timestamp: now,
    report_type: 'health_summary',
    platforms: {
      total: metrics.summary.total,
      healthy: metrics.summary.healthy,
      unhealthy: metrics.summary.unhealthy,
      health_percentage: ((metrics.summary.healthy / metrics.summary.total) * 100).toFixed(1),
    },
    performance: {
      avg_response_time_ms: metrics.summary.avgResponseTime,
    },
    unhealthy_platforms: Object.entries(platformState)
      .filter(([_, state]) => !state.healthy)
      .map(([name, state]) => ({
        name,
        failures: state.consecutiveFailures,
        last_error: state.lastError,
      })),
  };
  
  return report;
}

/**
 * Start continuous monitoring
 */
function startMonitoring() {
  log('Guardian Watchdog Health Monitor started');
  log(`Monitoring ${PLATFORMS.length} platforms at ${config.baseUrl}`);
  log(`Check interval: ${config.checkInterval}ms`);
  log('');
  
  // Initial check
  checkAllPlatforms();
  
  // Recurring checks
  setInterval(() => {
    checkAllPlatforms();
  }, config.checkInterval);
  
  // Log summary every 5 minutes
  setInterval(() => {
    const report = generateReport();
    log(`[SUMMARY] ${report.platforms.healthy}/${report.platforms.total} healthy (${report.platforms.health_percentage}%)`);
  }, 300000); // 5 minutes
}

/**
 * Handle graceful shutdown
 */
process.on('SIGINT', () => {
  log('Shutting down health monitor...', 'info');
  const report = generateReport();
  log(`Final report: ${report.platforms.healthy}/${report.platforms.total} healthy`, 'info');
  process.exit(0);
});

// Start monitoring
startMonitoring();
