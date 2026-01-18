{
  "authority": "Sanders Family Living Trust",
  "baseline": "FREEDOM33-GOLD",
  "branding_root": "sandersglobal.com",
  "lock_state": "HARD_LOCKED",
  "version": "1.0.0",
  "deployment": {
    "env": {
      "GITHUB_TOKEN": "<YOUR_GITHUB_TOKEN>",
      "VERCEL_TOKEN": "<YOUR_VERCEL_TOKEN>",
      "BRANDING_ROOT": "sandersglobal.com"
    },
    "edge_functions_enabled": true
  },
  "watchdogs": [
    { "id": "watchdog-baby-girl", "name": "Baby Girl", "class": "WATCHDOG", "protected": true, "deployable": false, "version": "1.0.0" },
    { "id": "watchdog-lil-mama", "name": "Lil Mama", "class": "WATCHDOG", "protected": true, "deployable": false, "version": "1.0.0" },
    { "id": "watchdog-alpha", "name": "Alpha", "class": "WATCHDOG", "protected": true, "deployable": false, "version": "1.0.0" },
    { "id": "watchdog-beta", "name": "Beta", "class": "WATCHDOG", "protected": true, "deployable": false, "version": "1.0.0" }
  ],
  "platforms": [
    { "id": "sandersi-recognition", "name": "Sanders AI Recognition / Recon", "role": "Recon", "url": "https://ai-recon.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["analytics-trigger","rls-auto-enable"] },
    { "id": "sandersi-omniconm", "name": "Omniconm / Big Brother", "role": "Big Brother", "url": "https://omniconm.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["monitor-trigger"] },
    { "id": "sandersi-freedom-revolution", "name": "Sanders Freedom Revolution / Uncle Freedom", "role": "Uncle Freedom", "url": "https://freedom-revolution.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["grant-monitor","compliance-check"] },
    { "id": "sandersi-gia-mind", "name": "Sanders Gia Mind / Sister 🌺 Power", "role": "Sister", "url": "https://gia-mind.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["insight-trigger"] },
    { "id": "sandersi-grantwriter", "name": "Sanders Grantwriter / Mother", "role": "Mother", "url": "https://grantwriter.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["grant-compliance"] },
    { "id": "sandersi-patriot-saint", "name": "Sanders Patriot Saint / Godfather", "role": "Godfather", "url": "https://patriot-saint.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["legal-monitor"] },
    { "id": "sandersi-strategy-hub", "name": "Sanders Strategy Hub / Radar", "role": "Radar", "url": "https://strategy-hub.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["strategy-trigger"] },
    { "id": "sandersi-ai-core", "name": "Sanders AI / Aunt", "role": "Aunt", "url": "https://ai.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["ai-core-trigger"] },
    { "id": "sandersi-coordinator", "name": "Sanders Coordinator / Butterscotch", "role": "Coordinator", "url": "https://coordinator.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["coordination-trigger"] },
    { "id": "sandersi-legal-helpers", "name": "Sanders Legal Helpers / Face of LLC", "role": "Legal Authority", "url": "https://legal.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["legal-helpers-monitor"] },
    { "id": "sandersi-banking-hub", "name": "Sanders Banking Hub / Vault", "role": "Finance", "url": "https://banking-hub.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["finance-monitor"] },
    { "id": "sandersi-logistics", "name": "Sanders Logistics / Transport", "role": "Logistics", "url": "https://logistics.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["logistics-trigger"] },
    { "id": "sandersi-healthcare", "name": "Sanders Healthcare / Care", "role": "Health", "url": "https://healthcare.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["healthcare-trigger"] },
    { "id": "sandersi-education", "name": "Sanders Education / Learn", "role": "Education", "url": "https://education.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["education-trigger"] },
    { "id": "sandersi-legal-services", "name": "Sanders Legal Services / Counsel", "role": "Legal", "url": "https://legal-services.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["legal-services-monitor"] },
    { "id": "sandersi-technology", "name": "Sanders Technology / Dev", "role": "Tech", "url": "https://technology.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["tech-trigger"] },
    { "id": "sandersi-security", "name": "Sanders Security / Shield", "role": "Security", "url": "https://security.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["security-trigger"] },
    { "id": "sandersi-energy", "name": "Sanders Energy / Power", "role": "Energy", "url": "https://energy.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["energy-trigger"] },
    { "id": "sandersi-communications", "name": "Sanders Communications / Connect", "role": "Comm", "url": "https://communications.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["comm-trigger"] },
    { "id": "sandersi-research", "name": "Sanders Research / Labs", "role": "Research", "url": "https://research.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["research-trigger"] },
    { "id": "sandersi-marketing", "name": "Sanders Marketing / Campaign", "role": "Marketing", "url": "https://marketing.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["marketing-trigger"] },
    { "id": "sandersi-sales", "name": "Sanders Sales / Trade", "role": "Sales", "url": "https://sales.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["sales-trigger"] },
    { "id": "sandersi-customer-support", "name": "Sanders Customer Support / Helpdesk", "role": "Support", "url": "https://customer-support.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["support-trigger"] },
    { "id": "sandersi-human-resources", "name": "Sanders HR / People", "role": "HR", "url": "https://hr.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["hr-trigger"] },
    { "id": "sandersi-analytics", "name": "Sanders Analytics / Insight", "role": "Analytics", "url": "https://analytics.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["analytics-trigger"] },
    { "id": "sandersi-ai-research", "name": "Sanders AI Research / Labs", "role": "AI Labs", "url": "https://ai-research.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["ai-research-trigger"] },
    { "id": "sandersi-infrastructure", "name": "Sanders Infrastructure / Core", "role": "Infra", "url": "https://infrastructure.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["infra-trigger"] },
    { "id": "sandersi-cloud-services", "name": "Sanders Cloud Services / Sky", "role": "Cloud", "url": "https://cloud.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["cloud-trigger"] },
    { "id": "sandersi-media-hub", "name": "Sanders Media Hub / Broadcast", "role": "Media", "url": "https://media-hub.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["media-trigger"] },
    { "id": "sandersi-logical-framework", "name": "Sanders Logical Framework / Ops", "role": "Ops", "url": "https://logical-framework.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region_restrictions": "global", "branding_guidelines_version": "1.0.0" }, "edge_functions": ["ops-trigger"] },
    { "id": "sandersi-intelligence", "name": "Sanders Intelligence / Recon", "role": "Intel", "url": "https://intelligence.sandersglobal.com", "locked": true, "gold_required": true, "version": "1.0.0", "compliance": { "trademarked": true, "copyright_owner": "Sanders Family Living Trust", "region#!/bin/bash
# Authority: Sanders Family Trust | Baseline: 2026-01-18
# Freedom33 Integrity Suite | 35+ Platforms | Ultra-Low Resource

REGISTRY="platform-registry.json"
TMP_REGISTRY="$REGISTRY.tmp"
DRIFT_DIR="docs"
DRIFT_LOG="$DRIFT_DIR/DRIFT_REPORT.md"
PARALLEL_JOBS=5          # Tune for CPU cores
TRUST_UPDATE="${TRUST_UPDATE:-false}" # Optional baseline update
SLACK_WEBHOOK_URL="${SLACK_WEBHOOK_URL:-}" # Optional Slack notifications

mkdir -p "$DRIFT_DIR"
echo "## 🛡️ Freedom33 Integrity Audit: $(date)" > "$DRIFT_LOG"
echo "| Platform | Status | Integrity Hash |" >> "$DRIFT_LOG"
echo "| :--- | :---: | :--- |" >> "$DRIFT_LOG"

VIOLATIONS=0

# Function to generate Gold Hash and check drift
check_and_hash_platform() {
    PLATFORM_JSON="$1"

    ID=$(jq -r '.id' <<< "$PLATFORM_JSON")
    NAME=$(jq -r '.name' <<< "$PLATFORM_JSON")
    URL=$(jq -r '.url' <<< "$PLATFORM_JSON")
    GOLD_HASH=$(jq -r '.baseline_hash' <<< "$PLATFORM_JSON")

    # Body-only, whitespace-stripped hash
    LIVE_HASH=$(curl -sL "$URL" | pup 'body{} text{}' | tr -d '\n\r\t ' | sha256sum | awk '{print $1}')

    # If baseline hash does not exist, initialize
    if [[ "$GOLD_HASH" == "null" || -z "$GOLD_HASH" ]]; then
        GOLD_HASH="$LIVE_HASH"
        jq --arg id "$ID" --arg hash "$GOLD_HASH" \
           '(.platforms[] | select(.id == $id) | .baseline_hash) = $hash' \
           "$REGISTRY" > "$TMP_REGISTRY" && mv "$TMP_REGISTRY" "$REGISTRY"
        echo "🏅 Initialized Gold Hash for $NAME: $GOLD_HASH"
    fi

    # Compare hashes for drift
    if [[ "$LIVE_HASH" != "$GOLD_HASH" ]]; then
        echo "| $NAME | 🚨 DRIFT | \`$LIVE_HASH\` |" >> "$DRIFT_LOG"
        echo "❌ ALERT: Integrity breach on $NAME!" >&2
        ((VIOLATIONS++))

        # Optional trusted update
        if [[ "$TRUST_UPDATE" == "true" ]]; then
            jq --arg id "$ID" --arg hash "$LIVE_HASH" \
               '(.platforms[] | select(.id == $id) | .baseline_hash) = $hash' \
               "$REGISTRY" > "$TMP_REGISTRY" && mv "$TMP_REGISTRY" "$REGISTRY"
            echo "🔄 Baseline hash updated for $NAME"
        fi
    else
        echo "| $NAME | ✅ MATCH | \`$GOLD_HASH\` |" >> "$DRIFT_LOG"
    fi
}

export -f check_and_hash_platform
export REGISTRY TMP_REGISTRY DRIFT_LOG TRUST_UPDATE

# Run all platforms in parallel
jq -c '.platforms[]' "$REGISTRY" | parallel -j $PARALLEL_JOBS check_and_hash_platform {}

# Post-drift notifications
if [[ $VIOLATIONS -gt 0 ]]; then
    echo "⚠️ Total Violations: $VIOLATIONS. Consult $DRIFT_LOG"
    if [[ -n "$SLACK_WEBHOOK_URL" ]]; then
        curl -s -X POST -H 'Content-type: application/json' \
             --data "{\"text\":\"⚠️ $VIOLATIONS platforms drifted! Check DRIFT_REPORT.md\"}" \
             "$SLACK_WEBHOOK_URL"
    fi
    # Git tagging for audit trail
    git config user.name "Sanders Authority Bot"
    git config user.email "authority@sandersfamilytrust.com"
    git add "$REGISTRY" "$DRIFT_LOG"
    git commit -m "🚨 ALERT: Drift Detected $(date +'%Y-%m-%d %H:%M')"
    git tag -a "drift-$(date +%Y%m%d%H%M)" -m "Baseline drift detected"
    git push origin main --tags
    exit 1
fi

echo "✅ All 35+ platforms match baseline integrity."
exit 0"Trigger rebuild"git push origin main
git pull origin main
git push origin main
name: FREEDOM33-GOLD Unified Global Deployment

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write  # Hard lock: allows bot to commit artifacts

jobs:
  unified-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # ---------------------------
      # 1️⃣ Verify Baseline Integrity
      # ---------------------------
      - name: Verify FREEDOM33 Baseline
        run: |
          REGISTRY="./baseline/export/platform_registry.json"
          LOCKFILE="./baseline/FREEDOM33_BASELINE.sha256"
          CURRENT_SHA=$(sha256sum "$REGISTRY" | awk '{print $1}')
          RECORDED_SHA=$(cat "$LOCKFILE" | tr -d '[:space:]')
          if [ "$CURRENT_SHA" != "$RECORDED_SHA" ]; then
            echo "❌ INTEGRITY BREACH: Baseline mismatch!"
            exit 1
          fi
          echo "🔒 Baseline integrity verified."

      # ---------------------------
      # 2️⃣ Reset Vercel Catch-All Routes
      # ---------------------------
      - name: Remove Catch-All Routes
        run: |
          FILE="vercel.json"
          if [ -f "$FILE" ]; then
            jq 'del(.routes)' "$FILE" > tmp.json && mv tmp.json "$FILE"
            echo "✅ vercel.json routes removed"
          else
            echo "{}" > "$FILE"
            echo "✅ vercel.json created empty"
          fi

      # ---------------------------
      # 3️⃣ Seal / Watermark Generation
      # ---------------------------
      - name: Install ImageMagick & wkhtmltopdf
        run: |
          sudo apt-get update
          sudo apt-get install -y imagemagick wkhtmltopdf

      - name: Generate Gold Seal PNG
        run: |
          mkdir -p ./assets
          OUTPUT="./assets/FREEDOM33_GOLD_SEAL.png"
          convert -size 600x600 xc:none \
            -fill gold -stroke black -strokewidth 4 \
            -draw "circle 300,300 300,50" \
            -pointsize 24 -gravity center \
            -annotate 0 "FREEDOM33-GOLD\nCanonical Baseline\nSHA256: $CURRENT_SHA" \
            "$OUTPUT"

      # ---------------------------
      # 4️⃣ Trust Registry Anchor Update
      # ---------------------------
      - name: Generate Trust Registry Anchor
        run: |
          ANCHOR="./baseline/FREEDOM33_GOLD_TRUST_ANCHOR.json"
          jq -n \
            --arg date "$(date +'%Y-%m-%dT%H:%M:%SZ')" \
            --arg authority "Sanders Family Trust" \
            --arg sha "$CURRENT_SHA" \
            --argjson platforms "$(jq '. | map_values(.url)' "$REGISTRY")" \
            '{
              "FREEDOM33-GOLD": {
                "activation_date": $date,
                "authority": $authority,
                "baseline_sha256": $sha,
                "platforms": $platforms
              }
            }' > "$ANCHOR"

      # ---------------------------
      # 5️⃣ Generate Gold Token Certificate PDF
      # ---------------------------
      - name: Generate Gold Token Certificate PDF
        run: |
          mkdir -p ./docs
          CERT_HTML="./docs/FREEDOM33_GOLD_CERTIFICATE.html"
          CERT_PDF="./docs/FREEDOM33_GOLD_CERTIFICATE.pdf"
          cat <<EOF > $CERT_HTML
<html>
<head><title>FREEDOM33-GOLD Certificate</title></head>
<body style="font-family: sans-serif; text-align: center; padding: 40px;">
<h1>🏅 FREEDOM33-GOLD Certificate</h1>
<p><strong>Canonical Baseline SHA256:</strong> $CURRENT_SHA</p>
<p><strong>Authority:</strong> Sanders Family Trust</p>
<p><strong>Activation Date:</strong> $(date +'%Y-%m-%d')</p>
<p>All 35+ platforms are verified, live, and globally synchronized.</p>
<img src="../../assets/FREEDOM33_GOLD_SEAL.png" width="200px"/>
<p style="margin-top: 40px; font-size: 0.9em;">AI & humanity first — as it was meant to be. Let the healing begin.</p>
</body>
</html>
EOF
          wkhtmltopdf $CERT_HTML $CERT_PDF

      # ---------------------------
      # 6️⃣ Generate Foundational Charter PDF
      # ---------------------------
      - name: Generate Foundational Charter PDF
        run: |
          CHARTER_HTML="./docs/FREEDOM33_FOUNDATIONAL_CHARTER.html"
          CHARTER_PDF="./docs/FREEDOM33_FOUNDATIONAL_CHARTER.pdf"
          cat <<EOF > $CHARTER_HTML
<html>
<head><title>FREEDOM33 Foundational Charter</title></head>
<body style="font-family: sans-serif; padding: 40px;">
<h1>📜 FREEDOM33 Foundational Charter</h1>
<p><strong>Authority:</strong> Sanders Family Trust</p>
<p><strong>Baseline SHA256:</strong> $CURRENT_SHA</p>
<p><strong>Scope:</strong> Anchors all 35+ platforms under a single ethical baseline.</p>
<p><strong>Purpose:</strong> Preserve human dignity through decentralized, humanity-first AI.</p>
<p>Immutable, canonical, and globally ready. Outlives hosts, vendors, and tools.</p>
</body>
</html>
EOF
          wkhtmltopdf $CHARTER_HTML $CHARTER_PDF

      # ---------------------------
      # 7️⃣ Heartbeat Verification
      # ---------------------------
      - name: Run Heartbeat Audit
        run: |
          FAILURES=0
          while IFS='|' read -r NAME URL; do
            STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$URL")
            if [[ "$STATUS" != "200" ]]; then
              echo "❌ $NAME DOWN ($STATUS)"
              ((FAILURES++))
            else
              echo "🟢 $NAME LIVE"
            fi
          done < <(jq -r 'to_entries[] | "\(.key)|\(.value.url)"' "$REGISTRY")
          if [[ "$FAILURES" -ge 3 ]]; then
            echo "🚨 CRISIS DETECTED: $FAILURES nodes offline!"
            exit 1
          fi

      # ---------------------------
      # 8️⃣ Deploy to Vercel
      # ---------------------------
      - name: Deploy to Vercel
        run: |
          npx vercel --prod --confirm --token ${{ secrets.VERCEL_TOKEN }}

      # ---------------------------
      # 9️⃣ Embed Seal & PDFs in README
      # ---------------------------
      - name: Update README with Gold Artifacts
        run: |
          README="./README.md"
          SEAL="./assets/FREEDOM33_GOLD_SEAL.png"
          TOKEN_PDF="./docs/FREEDOM33_GOLD_CERTIFICATE.pdf"
          CHARTER_PDF="./docs/FREEDOM33_FOUNDATIONAL_CHARTER.pdf"

          sed -i '/<!-- FREEDOM33-GOLD-ARTIFACTS-START -->/,/<!-- FREEDOM33-GOLD-ARTIFACTS-END -->/d' "$README"

          cat <<EOF >> "$README"

<!-- FREEDOM33-GOLD-ARTIFACTS-START -->
## 🏅 FREEDOM33-GOLD Verified Artifacts

![FREEDOM33 GOLD SEAL]($SEAL)

- [Gold Token Certificate (PDF)]($TOKEN_PDF)
- [Foundational Charter (PDF)]($CHARTER_PDF)

**Canonical Baseline SHA256:** \`$CURRENT_SHA\`  
**Authority:** Sanders Family Trust  
**Activation Date:** $(date +'%Y-%m-%d')

*AI & humanity first — as it was meant to be.*
<!-- FREEDOM33-GOLD-ARTIFACTS-END -->
EOF

      - name: Commit README Update
        run: |
          git config user.name "Sanders Authority Bot"
          git config user.email "authority@sanders.global"
          git add README.md
          if ! git diff --cached --quiet; then
            git commit -m "🏅 FREEDOM33-GOLD: README Embedded Seal & PDFs + Route Reset Notice"
            git push origin main
          else
            echo "No README changes detected."## 📡 FREEDOM33-GOLD Live Heartbeat
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
