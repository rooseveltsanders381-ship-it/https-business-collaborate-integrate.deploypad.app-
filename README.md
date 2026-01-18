## 📡 FREEDOM33-GOLD Live Heartbeat
> **Status:** Monitoring 35+ Sovereign Platforms via Sanders Authority Bot

<div id="freedom33-heartbeat" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; font-family: sans-serif;"></div>

<script>
const platforms = {
  "Sanders AI Doctor": "https://ai-doctor.sandershomehealthcare.com",
  "Sanders AI Psychiatrist": "https://ai-psychiatrist.sandershomehealthcare.com",
  "Sanders AI Recognition": "https://ai-recognition.sandersglobal.com",
  "Sanders Omniconm": "https://omniconm.sandersglobal.com",
  "Sanders Steward Sentinel": "https://steward-sentinel.sanderssecurestack.com",
  "Sanders Patriot Saint": "https://patriot-saint.sandersglobal.com",
  "Sanders Gia Mind Balance": "https://gia-mind.sandersglobal.com",
  "Sanders Grantwriter": "https://grantwriter.sanders.global",
  "Sanders Freedom Revolution": "https://freedom-rev.sandersglobal.com",
  "Sanders Tactical Training": "https://tactical-training.sandersglobal.com",
  "Sanders Martial Academy": "https://martial-academy.sandersglobal.com",
  "Sanders Leadership Institute": "https://leadership-institute.sandersglobal.com",
  "Sanders Fitness & Wellness": "https://fitness-wellness.sandersglobal.com",
  "Sanders Advanced Academics": "https://advanced-academics.sandersglobal.com",
  "Sanders Recon Ops": "https://recon-ops.sandersglobal.com",
  "Sanders Guardian Sentinel": "https://guardian-sentinel.sanderssecurestack.com",
  "Sanders Big Data Mind": "https://big-data-mind.sandersglobal.com",
  "Sanders Strategy Hub": "https://strategy-hub.sandersglobal.com",
  "Sanders Global Freedom": "https://global-freedom.sandersglobal.com",
  "Sanders Health Solutions": "https://health-solutions.sandershomehealthcare.com",
  "Sanders Coordinator": "https://sanders-coordinator.vercel.app",
  "Sanders Intelligence Ops": "https://intel-ops.sandersglobal.com",
  "Sanders Family Council": "https://family-council.sandersglobal.com",
  "Sanders Elite Leadership": "https://elite-leadership.sandersglobal.com",
  "Sanders Combat Academy": "https://combat-academy.sandersglobal.com",
  "Sanders Tactical Edge": "https://tactical-edge.sandersglobal.com",
  "Sanders Wellness Center": "https://wellness-center.sandersglobal.com",
  "Sanders Knowledge Base": "https://knowledge-base.sandersglobal.com",
  "Sanders AI Strategy": "https://ai-strategy.sandersglobal.com",
  "Sanders Freedom Ops": "https://freedom-ops.sandersglobal.com",
  "Sanders Mind Guardian": "https://mind-guardian.sandersglobal.com",
  "Sanders Watchdog Alpha": "https://watchdog-alpha.sanderssecurestack.com",
  "Sanders Watchdog Beta": "https://watchdog-beta.sanderssecurestack.com",
  "Lil Mama": "https://twin-lil-mama.sanderssecurestack.com",
  "Baby Girl": "https://twin-baby-girl.sanderssecurestack.com"
};

const container = document.getElementById("freedom33-heartbeat");

Object.entries(platforms).forEach(([name, url]) => {
  const card = document.createElement("div");
  card.style = "border: 1px solid #ccc; padding: 8px; border-radius: 8px; text-align: center; background: #fdfdfd;";
  card.innerHTML = `
    <div style="font-weight:bold; font-size:0.9em; margin-bottom:4px;">${name}</div>
    <div id="status-${name.replace(/\s+/g,'-')}" style="color:#666; font-size:0.8em;">🟡 Checking...</div>
  `;
  container.appendChild(card);

  // HEAD request (near-zero resource)
  fetch(url, { method: 'HEAD', mode: 'no-cors' })
    .then(() => {
      document.getElementById(`status-${name.replace(/\s+/g,'-')}`).innerHTML = "🟢 LIVE";
    })
    .catch(() => {
      document.getElementById(`status-${name.replace(/\s+/g,'-')}`).innerHTML = "🔴 OFFLINE";
    });
});
</script>## 📡 FREEDOM33-GOLD Live Heartbeat
> **Status:** Monitoring 35+ Sovereign Platforms via Sanders Authority Bot

<div id="freedom33-heartbeat" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; font-family: sans-serif;"></div>

<script>
const platforms = {
  "AI Doctor": "https://ai-doctor.sandershomehealthcare.com",
  "AI Psychiatrist": "https://ai-psychiatrist.sandershomehealthcare.com",
  "Sanders Coordinator": "https://sanders-coordinator.vercel.app",
  "Lil Mama": "https://twin-lil-mama.sanderssecurestack.com",
  "Baby Girl": "https://twin-baby-girl.sanderssecurestack.com"
  // Add the remaining 30+ platforms here following the same format
};

const container = document.getElementById("freedom33-heartbeat");

Object.entries(platforms).forEach(([name, url]) => {
  const card = document.createElement("div");
  card.style = "border: 1px solid #ccc; padding: 8px; border-radius: 8px; text-align: center; background: #fdfdfd;";
  card.innerHTML = `
    <div style="font-weight:bold; font-size:0.9em; margin-bottom:4px;">${name}</div>
    <div id="status-${name.replace(/\s+/g,'-')}" style="color:#666; font-size:0.8em;">🟡 Checking...</div>
  `;
  container.appendChild(card);

  // HEAD request (near-zero resource)
  fetch(url, { method: 'HEAD', mode: 'no-cors' })
    .then(() => {
      document.getElementById(`status-${name.replace(/\s+/g,'-')}`).innerHTML = "🟢 LIVE";
    })
    .catch(() => {
      document.getElementById(`status-${name.replace(/\s+/g,'-')}`).innerHTML = "🔴 OFFLINE";
    });
});
</script>GitHub repo → push README & code → Vercel auto-deploys code
README contains hyperlinks for live platforms (not executed)# 1️⃣ Ensure your platform_registry.json has exact Vercel slugs & URLs
# Example entries:
# {
#   "Business Collaborate Integrate": {
#       "slug": "business-collaborate-integrate",
#       "url": "https://v0-business-collaborate-integrate.vercel.app"
#   },
#   "Sanders Home Healthcare": {
#       "slug": "sanders-home-healthcare-ecosystem",
#       "url": "https://sanders-home-healthcare-ecosystem.vercel.app"
#   }
#   ...remaining 33+ platforms...
# }

# 2️⃣ Update README.md with live URLs
README="./README.md"
REGISTRY="./baseline/export/platform_registry.json"

# Remove previous platform grid section if exists
sed -i '/<!-- FREEDOM33-PLATFORM-GRID-START -->/,/<!-- FREEDOM33-PLATFORM-GRID-END -->/d' "$README"

# Append new platform grid section
echo "<!-- FREEDOM33-PLATFORM-GRID-START -->" >> "$README"
echo "## 📡 FREEDOM33-GLOBAL Platform Grid" >> "$README"

jq -r 'to_entries[] | "- [\(.key)](\(.value.url))"' "$REGISTRY" >> "$README"

echo "<!-- FREEDOM33-PLATFORM-GRID-END -->" >> "$README"

# 3️⃣ Commit changes with Sanders Authority Bot identity
git config user.name "Sanders Authority Bot"
git config user.email "authority@sanders.global"
git add "$README"
if ! git diff --cached --quiet; then
    git commit -m "🏅 FREEDOM33-GOLD: README Live URLs Synced"
    git push origin main
else
    echo "No README changes detected; URLs already up-to-date."
fi# Sanders Platforms Monorepo

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
const platforms = {
  "Sanders AI Doctor": { naic: "621111,541618,561612,541110,541512,611430", url: "https://ai-doctor.sandershomehealthcare.com" },
  "Sanders AI Psychiatrist": { naic: "621330,541618,561612,541110,541512,611430", url: "https://ai-psychiatrist.sandershomehealthcare.com" },
  "Sanders AI Recognition": { naic: "541511,541618,561612,523991,518210,611710", url: "https://ai-recognition.sandersglobal.com" },
  "Sanders Omniconm": { naic: "621399,541611,561612,541614,541715,611430", url: "https://omniconm.sandersglobal.com" },
  "Sanders Steward Sentinel": { naic: "621610,541618,561612,541611,541512,611430", url: "https://steward-sentinel.sanderssecurestack.com" },
  "Sanders Patriot Saint": { naic: "621399,922190,561612,523991,541715,611430", url: "https://patriot-saint.sandersglobal.com" },
  "Sanders Gia Mind Balance": { naic: "621111,541618,561612,541110,541512,611710", url: "https://gia-mind.sandersglobal.com" },
  "Sanders Grantwriter": { naic: "621610,541611,561612,523991,541512,611430", url: "https://grantwriter.sanders.global" },
  "Sanders Freedom Revolution": { naic: "621399,541618,561612,541614,518210,611430", url: "https://freedom-rev.sandersglobal.com" },
  "Sanders Tactical Training": { naic: "621610,541611,561612,541614,541512,611430", url: "https://tactical-training.sandersglobal.com" },
  "Sanders Martial Academy": { naic: "621610,922190,561612,541110,541715,611430", url: "https://martial-academy.sandersglobal.com" },
  "Sanders Leadership Institute": { naic: "621111,541618,561612,541611,541512,611430", url: "https://leadership-institute.sandersglobal.com" },
  "Sanders Fitness & Wellness": { naic: "621399,541618,561612,541110,518210,611430", url: "https://fitness-wellness.sandersglobal.com" },
  "Sanders Advanced Academics": { naic: "621330,541611,561612,541110,541512,611710", url: "https://advanced-academics.sandersglobal.com" },
  "Sanders Recon Ops": { naic: "621399,541618,561612,523991,541715,611430", url: "https://recon-ops.sandersglobal.com" },
  "Sanders Guardian Sentinel": { naic: "621610,541611,561612,541611,541512,611430", url: "https://guardian-sentinel.sanderssecurestack.com" },
  "Sanders Big Data Mind": { naic: "621399,541618,561612,523991,518210,611430", url: "https://big-data-mind.sandersglobal.com" },
  "Sanders Strategy Hub": { naic: "621111,541611,561612,541614,541512,611430", url: "https://strategy-hub.sandersglobal.com" },
  "Sanders Global Freedom": { naic: "621399,541618,561612,541611,541715,611430", url: "https://global-freedom.sandersglobal.com" },
  "Sanders Health Solutions": { naic: "621111,541611,561612,541110,518210,611430", url: "https://health-solutions.sandershomehealthcare.com" },
  "Sanders Coordinator": { naic: "621610,541618,561612,523991,541512,611430", url: "https://sanders-coordinator.vercel.app" },
  "Sanders Intelligence Ops": { naic: "621399,541611,561612,541110,541512,611430", url: "https://intel-ops.sandersglobal.com" },
  "Sanders Family Council": { naic: "621111,541618,561612,541611,541512,611430", url: "https://family-council.sandersglobal.com" },
  "Sanders Elite Leadership": { naic: "621330,541611,561612,541614,541512,611430", url: "https://elite-leadership.sandersglobal.com" },
  "Sanders Combat Academy": { naic: "621399,541618,561612,541110,541512,611430", url: "https://combat-academy.sandersglobal.com" },
  "Sanders Tactical Edge": { naic: "621111,541611,561612,541614,541512,611430", url: "https://tactical-edge.sandersglobal.com" },
  "Sanders Wellness Center": { naic: "621399,541618,561612,541110,518210,611430", url: "https://wellness-center.sandersglobal.com" },
  "Sanders Knowledge Base": { naic: "621330,541611,561612,541110,541512,611430", url: "https://knowledge-base.sandersglobal.com" },
  "Sanders AI Strategy": { naic: "621111,541618,561612,541614,541512,611430", url: "https://ai-strategy.sandersglobal.com" },
  "Sanders Freedom Ops": { naic: "621399,541611,561612,541611,541715,611430", url: "https://freedom-ops.sandersglobal.com" },
  "Sanders Mind Guardian": { naic: "621111,541618,561612,541110,541512,611430", url: "https://mind-guardian.sandersglobal.com" },
  "Sanders Watchdog Alpha": { naic: "621399,541611,561612,523991,541512,611430", url: "https://watchdog-alpha.sanderssecurestack.com" },
  "Sanders Watchdog Beta": { naic: "621399,541618,561612,523991,541512,611430", url: "https://watchdog-beta.sanderssecurestack.com" },
  "Lil Mama": { naic: "621399,541618,561612,523991,541512,611430", url: "https://twin-lil-mama.sanderssecurestack.com" },
  "Baby Girl": { naic: "621399,541618,561612,523991,541512,611430", url: "https://twin-baby-girl.sanderssecurestack.com" }
};
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
