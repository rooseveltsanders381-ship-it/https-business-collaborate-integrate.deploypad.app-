# Sanders Platforms Monorepo

Ready-to-deploy monorepo for 33 platforms with Guardian Watchdog and V5 security.

## Quick Start

### Prerequisites
- Node.js 18.x, 20.x, or 22.x (tested versions)
- npm 8+

### Setup
```bash
npm ci
npm run build --if-present
npm test
```

## Architecture

### 33 Platforms
Each platform is an Express.js application with the following structure:
```
platform{N}/
├── package.json              # express@^4.18.2, @supabase/supabase-js@^3.29.0
└── src/
    └── index.js             # Express server with health check
```

**Platform Features:**
- Health endpoint: `GET /` returns `"platform{N} running ✅"`
- Runs on configurable PORT (default: 3000)
- Pre-configured Supabase integration
- Deployed as zip artifacts

### Guardian Watchdog
Monitors deployment health across all 33 platforms:
- Packaged as `watchdog-{timestamp}-{id}.zip` artifact
- Integrated into the deployment pipeline
- Tracks platform uptime and performance

## Security

### V5 Authorization Layer
All deployments are protected by the V5 security module (`v5Security.js`):

#### Token Validation
```javascript
import { verifyV5Deployment } from './v5Security.js';

// Both parameters required - throws on failure
verifyV5Deployment(userToken, platformId);
```

**Validation Steps:**
1. **Token Check**: `userToken` must equal `process.env.V5_AGENT_KEY` (exact match)
2. **Platform Whitelist**: `platformId` must be in `platform1` through `platform33`
3. **Fail-Fast**: Exceptions halt execution - no fallback behavior

**Error Messages:**
- Invalid token: `"Unauthorized: V5 token invalid"`
- Invalid platform: `"Unauthorized: {platformId} not approved"`

#### Environment Variables
- `V5_AGENT_KEY` - Required secret for authorization
  - **MUST** be set in GitHub Actions secrets
  - **NEVER** commit to repository
  - Used for token verification in deployments

#### Security Boundaries
- ✅ Platforms are isolated (separate processes, distinct ports)
- ✅ Token verification is mandatory
- ⚠️ Express servers have no authentication by default - add middleware if needed
- ⚠️ Health endpoint (`GET /`) is public (for monitoring)
- ⚠️ Supabase credentials must be configured separately per platform

## CI/CD Pipeline

### Testing Matrix
Runs on all pushes to `main` and pull requests:
- Node.js 18.x
- Node.js 20.x
- Node.js 22.x

### Pipeline Steps
1. Checkout code
2. Setup Node.js (with npm cache)
3. Install dependencies (`npm ci`)
4. Build (`npm run build --if-present`)
5. Test (`npm test`)

See [.github/workflows/node.js.yml](.github/workflows/node.js.yml) for details.

## File Structure
```
/
├── v5Security.js                       # Security validation module
├── .github/
│   ├── copilot-instructions.md         # AI agent guidelines
│   └── workflows/
│       └── node.js.yml                 # CI/CD configuration
├── README.md                           # This file
├── platform{1-33}-{timestamp}.zip      # 33 platform artifacts
├── watchdog-{timestamp}.zip            # Health monitoring artifact
└── github-{timestamp}.zip              # GitHub integration artifact
```

## Development Guidelines

- Always run tests before committing: `npm test`
- Test compatibility across Node.js 18, 20, and 22
- Reference [.github/copilot-instructions.md](.github/copilot-instructions.md) for AI agent guidance

For security-focused development, see the **Security** section above.