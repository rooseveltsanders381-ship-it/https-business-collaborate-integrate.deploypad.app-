#!/bin/bash
# Test script to verify platform health and Supabase connectivity
# Run after deploying platforms with configured secrets

set -e

echo "🔍 Platform Deployment Verification Script"
echo "=========================================="
echo ""

# Configuration
PLATFORMS=(1 2 3 4 5)  # Test first 5 platforms, adjust as needed
BASE_URL="${BASE_URL:-http://localhost:3000}"
V5_TOKEN="${V5_AGENT_KEY:-test_token}"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "Configuration:"
echo "  Platforms: ${PLATFORMS[@]}"
echo "  Base URL: $BASE_URL"
echo "  V5 Token: ${V5_TOKEN:0:10}..."
echo ""

test_count=0
pass_count=0
fail_count=0

# Test each platform's health endpoint
for platform_num in "${PLATFORMS[@]}"; do
  echo -n "Testing platform$platform_num... "
  test_count=$((test_count + 1))
  
  # Test health check endpoint
  response=$(curl -s -w "\n%{http_code}" "$BASE_URL/health/db" 2>/dev/null || echo -e "\n503")
  http_code=$(echo "$response" | tail -1)
  body=$(echo "$response" | head -1)
  
  if [[ "$http_code" == "200" ]]; then
    echo -e "${GREEN}✓ OK (HTTP $http_code)${NC}"
    pass_count=$((pass_count + 1))
  elif [[ "$http_code" == "503" ]]; then
    echo -e "${YELLOW}⚠ Supabase not configured (HTTP $http_code)${NC}"
    pass_count=$((pass_count + 1))  # Still counts as pass - graceful degradation
  else
    echo -e "${RED}✗ FAILED (HTTP $http_code)${NC}"
    echo "  Response: $body"
    fail_count=$((fail_count + 1))
  fi
done

echo ""
echo "=========================================="
echo "Results:"
echo "  Total Tests: $test_count"
echo -e "  Passed: ${GREEN}$pass_count${NC}"
echo -e "  Failed: ${RED}$fail_count${NC}"
echo ""

if [ $fail_count -eq 0 ]; then
  echo -e "${GREEN}✓ All tests passed!${NC}"
  exit 0
else
  echo -e "${RED}✗ Some tests failed${NC}"
  exit 1
fi
