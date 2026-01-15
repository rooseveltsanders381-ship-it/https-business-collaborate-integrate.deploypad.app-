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
