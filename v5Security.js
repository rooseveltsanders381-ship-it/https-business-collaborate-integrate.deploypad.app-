export function verifyV5Deployment(userToken, platformId) {
  if (userToken !== process.env.V5_AGENT_KEY) {
    throw new Error("Unauthorized: V5 token invalid");
  }
  const allowedPlatforms = Array.from({ length: 33 }, (_, i) => `platform${i + 1}`);
  if (!allowedPlatforms.includes(platformId)) {
    throw new Error(`Unauthorized: ${platformId} not approved`);
  }
  return true;
}
echo 'export V5_AGENT_KEY="FREEDOM-V5-SANDERS-777-SHIPI-2026"' >> ~/.bashrc
source ~/.bashrc
