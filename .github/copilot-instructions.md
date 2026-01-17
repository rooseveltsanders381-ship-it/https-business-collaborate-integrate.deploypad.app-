index.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanders Global Platforms - Freedom33</title>
    <style>
        body { font-family: Arial, sans-serif; background: #0a0a0a; color: #00ff00; padding: 20px; }
        .platform { background: #1a1a1a; border: 1px solid #00ff00; padding: 15px; margin: 10px 0; border-radius: 5px; }
        h1 { color: #00ff00; text-align: center; }
        a { color: #00aaff; text-decoration: none; }
        .naic { color: #ffaa00; font-size: 0.9em; }
    </style>
</head>
<body>
    <h1>🔒 SANDERS GLOBAL PLATFORMS - FREEDOM33 DEPLOYMENT</h1>
    <div id="platforms"></div>
    <script src="platforms.js"></script>
</body>
</html>
Then add platforms.js:
const platforms = {
    "Sanders AI Doctor": { naic: "621111,541618,561612,541110,541512,611430", url: "https://ai-doctor.sandershomehealthcare.com" },
    "Sanders AI Psychiatrist": { naic: "621330,541618,561612,541110,541512,611430", url: "https://ai-psychiatrist.sandershomehealthcare.com" },
    "Lil Mama": { naic: "621399,541618,561612,523991,541512,611430", url: "https://twin-lil-mama.sanderssecurestack.com" },
    "Baby Girl": { naic: "621399,541618,561612,523991,541512,611430", url: "https://twin-baby-girl.sanderssecurestack.com" }
    // Add all 35 platforms here
};

const container = document.getElementById('platforms');
Object.entries(platforms).forEach(([name, data]) => {
    const div = document.createElement('div');
    div.className = 'platform';
    div.innerHTML = `
        <h3>${name}</h3>
        <div class="naic">NAIC: ${data.naic}</div>
        <a href="${data.url}" target="_blank">${data.url}</a>
    `;
    container.appendChild(div);
});
# Copilot Instructions - Sanders Platforms Monorepo

## Project Overview
This is a monorepo for **33 ready-to-deploy platforms** with integrated **Guardian Watchdog** monitoring and **V5 security layer**. The project uses GitHub Actions CI/CD with Node.js testing across multiple versions (18.x, 20.x, 22.x).

## Architecture & Key Components

### Platform Structure
- **Platform Distribution**: 33 identical platforms (`platform1` through `platform33`) packaged as zip artifacts
- **Platform Composition**: Each platform contains:
  - `package.json` - Dependencies include Express and Supabase
  - `src/index.js` - Express server listening on PORT (default 3000)
  - Platforms expose a health check endpoint: `GET /` returns "platform{N} running ✅"
- **Entry Point**: [v5Security.js](v5Security.js) - Core security validation module for all deployments
- **Key Function**: `verifyV5Deployment(userToken, platformId)` validates token and platform authorization
  - Expects `V5_AGENT_KEY` environment variable for token verification
  - Validates platform ID against allowed set (platform1-platform33)
  - Throws descriptive errors for unauthorized access

### Guardian Watchdog System
- Monitors deployment health across all 33 platforms
- Packaged as `watchdog-{timestamp}-{id}.zip` artifact
- Integrated into the deployment pipeline

## Development Workflows

### Building & Testing
- **Build Command**: `npm run build --if-present` (CI runs this on all pushes/PRs to main)
- **Test Command**: `npm test` (required in CI pipeline)
- **Package Management**: Uses npm with dependency caching in CI (`.github/workflows/node.js.yml`)

### CI/CD Pipeline (.github/workflows/node.js.yml)
- **Trigger**: Runs on push to main and pull requests
- **Test Matrix**: Node 18.x, 20.x, 22.x (ensure compatibility across versions)
- **Steps**: Checkout → Setup Node → npm ci → build → test

## Security & Patterns

### V5 Authorization Pattern
All platform deployments must follow the strict two-step validation in `verifyV5Deployment()`:
1. **Token Verification**: Pass `userToken` matching `process.env.V5_AGENT_KEY` (exact string comparison)
2. **Platform Whitelist Check**: Reference valid `platformId` from hardcoded 33-platform set (`platform1` through `platform33`)
3. **Early Validation**: Call `verifyV5Deployment()` before any deployment logic executes

```javascript
// Example usage pattern from v5Security.js
import { verifyV5Deployment } from './v5Security.js';
verifyV5Deployment(agentToken, 'platform1'); // Throws if invalid
```

### Authorization Failure Behavior
- Invalid token: `"Unauthorized: V5 token invalid"` (exception thrown)
- Invalid platformId: `"Unauthorized: {platformId} not approved"` (exception thrown)
- **Critical**: Exceptions halt execution - no graceful fallback

### Environment Variables
- **V5_AGENT_KEY**: Required for deployment authorization (set in CI/CD secrets)
  - Never commit this to repo
  - Must be configured in GitHub Actions secrets for CI/CD pipeline

## Important Constraints
- Platform IDs follow strict naming: `platform1` through `platform33` (numeric suffix only)
- Always validate before deployment - security exceptions halt execution
- CI runs against Node.js LTS versions only; use compatible APIs/packages

## Security Considerations

### Do's & Don'ts for AI Agents
✅ **DO:**
- Always call `verifyV5Deployment()` at the start of deployment routines
- Throw on authorization failures - never continue execution
- Treat `V5_AGENT_KEY` as a secret - never log or expose it
- Validate platformId format matches the 33-platform whitelist before use
- Reference `v5Security.js` as the single source of truth for authorization

❌ **DON'T:**
- Bypass security checks with alternative authorization mechanisms
- Cache or hardcode platform lists - always reference the dynamic generation in `verifyV5Deployment()`
- Log error details containing sensitive deployment information
- Allow unapproved platform IDs to proceed to deployment
- Modify the whitelist validation logic outside of `v5Security.js`

### Known Security Boundaries
- All platforms are isolated (separate zip artifacts, distinct PORT instances)
- Supabase credentials must be configured separately per platform
- Express servers have no authentication by default - add auth middleware if needed
- Health check endpoint (`GET /`) is public - suitable for monitoring only

## File Structure
```
/
├── v5Security.js                       # Core security validation
├── .github/
│   ├── copilot-instructions.md         # AI agent guidance (this file)
│   └── workflows/
│       └── node.js.yml                 # CI/CD pipeline configuration
├── README.md                           # Project overview
├── platform{1-33}-{timestamp}-{id}.zip # Deployment artifacts (33 platforms)
├── watchdog-{timestamp}-{id}.zip       # Guardian Watchdog monitoring artifact
└── github-{timestamp}-{id}.zip         # GitHub integration artifact
```

## Platform Internals

Each platform zip contains:
```
platform{N}/
├── package.json              # Dependencies: express@^4.18.2, @supabase/supabase-js@^3.29.0
└── src/
    └── index.js             # Express server with health check at GET /
```

**Example platform implementation:**
- Starts Express server on `process.env.PORT` (default 3000)
- Health endpoint: `GET /` responds with "platform{N} running ✅"
- All platforms follow identical structure for consistency
index.html:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanders Global Platforms - Freedom33</title>
    <style>
        body { font-family: Arial, sans-serif; background: #0a0a0a; color: #00ff00; padding: 20px; }
        .platform { background: #1a1a1a; border: 1px solid #00ff00; padding: 15px; margin: 10px 0; border-radius: 5px; }
        h1 { color: #00ff00; text-align: center; }
        a { color: #00aaff; text-decoration: none; }
        .naic { color: #ffaa00; font-size: 0.9em; }
    </style>
</head>
<body>
    <h1>🔒 SANDERS GLOBAL PLATFORMS - FREEDOM33 DEPLOYMENT</h1>
    <div id="platforms"></div>
    <script src="platforms.js"></script>
</body>
</html>
Then add platforms.js:
const platforms = {
    "Sanders AI Doctor": { naic: "621111,541618,561612,541110,541512,611430", url: "https://ai-doctor.sandershomehealthcare.com" },
    "Sanders AI Psychiatrist": { naic: "621330,541618,561612,541110,541512,611430", url: "https://ai-psychiatrist.sandershomehealthcare.com" },
    "Lil Mama": { naic: "621399,541618,561612,523991,541512,611430", url: "https://twin-lil-mama.sanderssecurestack.com" },
    "Baby Girl": { naic: "621399,541618,561612,523991,541512,611430", url: "https://twin-baby-girl.sanderssecurestack.com" }
    // Add all 35 platforms here
};

const container = document.getElementById('platforms');
Object.entries(platforms).forEach(([name, data]) => {
    const div = document.createElement('div');
    div.className = 'platform';
    div.innerHTML = `
        <h3>${name}</h3>
        <div class="naic">NAIC: ${data.naic}</div>
        <a href="${data.url}" target="_blank">${data.url}</a>
    `;
    container.appendChild(div);
});
