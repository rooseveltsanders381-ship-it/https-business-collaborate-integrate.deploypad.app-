# GitHub Actions Secrets Setup

Configure these secrets in your GitHub repository to enable secure deployments.

## How to Add Secrets

1. Go to **GitHub Repository Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each secret below

## Required Secrets

### 1. V5_AGENT_KEY
**Purpose**: Security token for V5 deployment authorization

```
Name: V5_AGENT_KEY
Value: [Your unique security token - generate a strong random string]
```

**Example generation:**
```bash
openssl rand -hex 32
# Output: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

---

### 2. SUPABASE_URL
**Purpose**: Your Supabase project URL for database connections

```
Name: SUPABASE_URL
Value: https://your-project.supabase.co
```

**Where to find:**
- Log in to [Supabase Dashboard](https://app.supabase.com)
- Select your project
- Go to **Settings** → **API**
- Copy the **Project URL**

---

### 3. SUPABASE_KEY
**Purpose**: Supabase API key for authentication

```
Name: SUPABASE_KEY
Value: [Your Supabase anon or service key]
```

**Where to find:**
- Same page as SUPABASE_URL (Settings → API)
- Use the **anon public** key for client-side access
- Use **service_role** key for server-side operations (more privileged)

---

## Verification

After adding secrets, verify they're configured:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. You should see all 3 secrets listed (values are hidden)
3. Green checkmark ✓ indicates successful configuration

## Security Best Practices

✅ **DO:**
- Generate strong random tokens for V5_AGENT_KEY
- Use restrictive Supabase roles where possible
- Rotate secrets periodically
- Keep secrets out of code and version control

❌ **DON'T:**
- Commit secrets to git
- Share secret values with unauthorized users
- Use the same secret across multiple projects
- Log or print secret values

## Testing the Configuration

Once secrets are configured, push a change to trigger CI/CD:

```bash
git push origin main
```

Monitor the GitHub Actions tab to verify the build succeeds with your configured secrets.

## Troubleshooting

**Build fails with "Unauthorized: V5 token invalid"**
- Verify V5_AGENT_KEY is correctly set in GitHub secrets
- Check that the value matches exactly (no extra spaces)

**Database connection fails**
- Verify SUPABASE_URL format: `https://your-project.supabase.co`
- Verify SUPABASE_KEY is the correct anon or service role key
- Ensure your Supabase project is active and accessible

**Secrets not appearing in workflow**
- Wait 2-3 minutes after adding secrets for GitHub to sync
- Clear browser cache and refresh
- Try the workflow again

## References

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Supabase API Documentation](https://supabase.com/docs/reference/api)
- [V5 Security Module](v5Security.js)
