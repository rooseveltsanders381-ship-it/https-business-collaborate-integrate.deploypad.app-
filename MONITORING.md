# Monitoring & Logging Setup

## Guardian Watchdog Health Monitoring

Continuous health checks for all 33 platforms with automatic alerting and metrics collection.

### Features

- ✅ **Continuous Monitoring** - Checks each platform every 30 seconds
- ✅ **Automatic Alerts** - Triggers after 3 consecutive failures
- ✅ **Metrics Collection** - Tracks response times and platform status
- ✅ **Health Reports** - Generates summary reports every 5 minutes
- ✅ **Graceful Shutdown** - Logs final report on exit

### Quick Start

```bash
# Install dependencies
npm install node-fetch

# Start health monitor
node monitoring/health-check.js
```

### Environment Variables

```bash
# Platform base URL (default: http://localhost:3000)
export PLATFORM_BASE_URL=https://platforms.example.com

# Check interval in milliseconds (default: 30000)
export CHECK_INTERVAL=30000

# Health check timeout (default: 5000)
export HEALTH_CHECK_TIMEOUT=5000

# Log file path (default: logs/health.log)
export LOG_FILE=/var/log/platforms/health.log

# Metrics file path (default: logs/metrics.json)
export METRICS_FILE=/var/log/platforms/metrics.json

# Failures before alert (default: 3)
export ALERT_THRESHOLD=3
```

### Output Examples

#### Real-time Logs

```
[2026-01-15T20:35:42.123Z] [INFO] Guardian Watchdog Health Monitor started
[2026-01-15T20:35:42.124Z] [INFO] Monitoring 33 platforms at http://localhost:3000
[2026-01-15T20:35:42.125Z] [INFO] Check interval: 30000ms

[2026-01-15T20:35:45.456Z] [INFO] Health check complete: 33/33 healthy, avg response: 45.2ms

[2026-01-15T20:36:15.789Z] [WARN] ⚠ ALERT: platform5 is unhealthy (HTTP 503)
[2026-01-15T20:36:45.012Z] [WARN] ⚠ platform5 still down (attempt 2)
[2026-01-15T20:37:15.345Z] [WARN] ⚠ platform5 still down (attempt 3)
[2026-01-15T20:37:45.678Z] [INFO] ✓ platform5 recovered (response: 52ms)

[2026-01-15T20:40:42.901Z] [SUMMARY] 32/33 healthy (96.97%)
```

#### Metrics File (logs/metrics.json)

```json
{
  "timestamp": "2026-01-15T20:35:45.456Z",
  "platforms": {
    "platform1": {
      "healthy": true,
      "consecutiveFailures": 0,
      "lastCheck": "2026-01-15T20:35:45.456Z",
      "lastError": null,
      "responseTime": 42
    },
    "platform2": {
      "healthy": true,
      "consecutiveFailures": 0,
      "lastCheck": "2026-01-15T20:35:45.487Z",
      "lastError": null,
      "responseTime": 38
    }
  },
  "summary": {
    "total": 33,
    "healthy": 33,
    "unhealthy": 0,
    "avgResponseTime": "45.20"
  }
}
```

### Integration with CI/CD

Add to GitHub Actions workflow:

```yaml
- name: Start Health Monitor
  run: |
    mkdir -p logs
    node monitoring/health-check.js &
    MONITOR_PID=$!
    sleep 60
    kill $MONITOR_PID || true
```

### Alerting Integration

#### Slack Integration

```bash
# Add to your alert handler:
curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\":\"Platform Alert: $PLATFORM_NAME is unhealthy\"}" \
  $SLACK_WEBHOOK_URL
```

#### Email Alerts

```bash
# Add to cron job or systemd timer:
cat logs/health.log | grep ALERT | mail -s "Platform Alerts" ops@example.com
```

#### PagerDuty Integration

```bash
# Trigger incident on alert threshold
curl -X POST https://events.pagerduty.com/v2/enqueue \
  -H 'Content-Type: application/json' \
  -d @- <<EOF
{
  "routing_key": "YOUR_ROUTING_KEY",
  "event_action": "trigger",
  "payload": {
    "summary": "Platform $PLATFORM_NAME unhealthy",
    "severity": "critical",
    "source": "Guardian Watchdog"
  }
}
EOF
```

### Monitoring Dashboard (Grafana Example)

Query metrics from `logs/metrics.json`:

```yaml
- job_name: 'platforms'
  static_configs:
    - targets: ['localhost:9090']
  metrics_path: '/logs/metrics.json'
```

### Troubleshooting

**Monitor not starting?**
- Check `logs/` directory exists: `mkdir -p logs`
- Verify platforms are accessible at configured `PLATFORM_BASE_URL`
- Check network connectivity: `curl http://localhost:3000/health/db`

**Alerts firing constantly?**
- Increase `ALERT_THRESHOLD` to reduce false positives
- Check platform logs for actual errors
- Verify Supabase credentials are configured

**High response times?**
- Check network latency: `ping platform_host`
- Monitor server CPU/memory usage
- Review platform application logs

### Production Deployment

```bash
# 1. Install as systemd service
sudo cp monitoring/health-check.service /etc/systemd/system/

# 2. Enable and start
sudo systemctl enable platforms-monitor
sudo systemctl start platforms-monitor

# 3. View logs
sudo journalctl -u platforms-monitor -f

# 4. Configure log rotation
sudo cp monitoring/health-check.logrotate /etc/logrotate.d/platforms
```

### Advanced: Custom Health Checks

Extend `health-check.js` to add custom checks:

```javascript
// Add to checkPlatformHealth function
const data = await response.json();

// Check database connection
if (!data.tables_accessible) {
  throw new Error('Database not accessible');
}

// Check response time threshold
if (responseTime > 1000) {
  throw new Error(`Slow response: ${responseTime}ms`);
}
```

### References

- [Guardian Watchdog Documentation](../README.md)
- [V5 Security Module](../v5Security.js)
- [Platform Health Endpoints](../README.md#health-check-endpoints)
