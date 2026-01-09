# Vercel Deployment Setup Guide - Click-by-Click Tutorial

This guide walks you through deploying your React + Node.js + TypeScript application to Vercel, including setting up all environment variables correctly.

## Prerequisites

- ✅ GitHub repository with your code pushed
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com) if needed)
- ✅ All environment variables ready (from your `.env.local` file)

---

## Part 1: Initial Project Setup on Vercel

### Step 1: Access Vercel Dashboard
1. Go to [https://vercel.com](https://vercel.com)
2. **Click** "Log In" (top right) if not already logged in
3. **Click** "Sign Up" if you don't have an account (you can use GitHub to sign up)

### Step 2: Create New Project
1. **Click** the "Add New..." button (top right of dashboard)
2. **Click** "Project" from the dropdown menu
3. You'll see a list of your GitHub repositories

### Step 3: Import Your Repository
1. **Find** your repository (`New_Stack_Testing` or whatever you named it)
2. **Click** "Import" button next to your repository
3. If you don't see your repo:
   - **Click** "Adjust GitHub App Permissions"
   - **Select** the repositories you want to give Vercel access to
   - **Click** "Save" and return to import page

### Step 4: Configure Project Settings
1. **Project Name**: Leave default or change it (e.g., `react-node-typescript-app`)
2. **Framework Preset**: **Select** "Other" (we're using a custom setup)
3. **Root Directory**: Leave as `./` (root of repository)
4. **Build Command**: Should auto-detect or enter: `npm run build`
5. **Output Directory**: Enter: `frontend/dist`
6. **Install Command**: Enter: `npm run install:all`
7. **DO NOT CLICK "Deploy" YET** - We need to set up environment variables first!

---

## Part 2: Environment Variables Setup (CRITICAL)

### Step 5: Access Environment Variables Section
1. **Scroll down** on the project configuration page
2. **Find** the "Environment Variables" section
3. **Click** "Add" or the "+" button to add variables

### Step 6: Add Environment Variables One by One

**IMPORTANT**: Add variables for **ALL THREE** environments:
- **Production** (for live site)
- **Preview** (for pull request previews)
- **Development** (for local development - optional)

For each variable, you'll see checkboxes for which environments to apply it to. **Check all three** unless specified otherwise.

#### Critical Variables (Required for App to Work)

**1. App Environment**
- **Name**: `APP_ENV`
- **Value**: `production` (for Production), `preview` (for Preview)
- **Environments**: ✅ Production, ✅ Preview

**2. JWT Secret (CRITICAL - Must be strong and unique)**
- **Name**: `JWT_SECRET`
- **Value**: Generate a strong random string (at least 32 characters)
  - You can use: `openssl rand -base64 32` in terminal
  - Or use an online generator
- **Environments**: ✅ Production, ✅ Preview
- **⚠️ WARNING**: Use a DIFFERENT secret than your local development!

**3. JWT Expiration**
- **Name**: `JWT_EXPIRES_IN`
- **Value**: `7d`
- **Environments**: ✅ Production, ✅ Preview

**4. API Configuration**
- **Name**: `API_PORT`
- **Value**: `3001` (Vercel will handle port automatically, but keep for compatibility)
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `API_URL`
- **Value**: `https://your-project-name.vercel.app` (replace with your actual Vercel URL - you'll get this after first deploy)
- **Environments**: ✅ Production, ✅ Preview
- **Note**: Update this after first deployment with your actual domain

- **Name**: `FRONTEND_URL`
- **Value**: `https://your-project-name.vercel.app` (same as API_URL)
- **Environments**: ✅ Production, ✅ Preview
- **Note**: Update this after first deployment

**5. Log Level**
- **Name**: `LOG_LEVEL`
- **Value**: `INFO` (or `ERROR` for production)
- **Environments**: ✅ Production, ✅ Preview

#### Database Variables (If Using PostgreSQL)

**6. PostgreSQL Connection (Production Database)**
- **Name**: `POSTGRES_HOST`
- **Value**: Your production database host (e.g., DigitalOcean host or Vercel Postgres)
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `POSTGRES_PORT`
- **Value**: `5432` (or your database port)
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `POSTGRES_DB`
- **Value**: Your database name
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `POSTGRES_USER`
- **Value**: Your database username
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `POSTGRES_PASSWORD`
- **Value**: Your database password
- **Environments**: ✅ Production, ✅ Preview
- **⚠️ WARNING**: Keep this secure! Vercel encrypts it automatically.

**If using DigitalOcean Managed Database:**
- **Name**: `DO_PG_HOST`
- **Value**: Your DigitalOcean database host
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `DO_PG_PORT`
- **Value**: `25060` (or your DO port)
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `DO_PG_USER`
- **Value**: Your DigitalOcean database user
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `DO_PG_PASSWORD`
- **Value**: Your DigitalOcean database password
- **Environments**: ✅ Production, ✅ Preview

- **Name**: `DO_PG_SSLMODE`
- **Value**: `require`
- **Environments**: ✅ Production, ✅ Preview

#### Third-Party Service Variables (If Using)

**7. GitHub Token** (if your app uses GitHub API)
- **Name**: `GITHUB_TOKEN`
- **Value**: Your GitHub personal access token
- **Environments**: ✅ Production, ✅ Preview

**8. Hugging Face** (if using)
- **Name**: `HF_TOKEN`
- **Value**: Your Hugging Face token
- **Environments**: ✅ Production, ✅ Preview

**9. Taskade** (if using)
- **Name**: `TASKADE_TOKEN`
- **Value**: Your Taskade token
- **Environments**: ✅ Production, ✅ Preview

**10. NameSilo** (if using)
- **Name**: `NAMESILO_API_KEY`
- **Value**: Your NameSilo API key
- **Environments**: ✅ Production, ✅ Preview

#### Frontend-Specific Variables

**11. Frontend API URL** (For Vite/React)
- **Name**: `VITE_API_URL`
- **Value**: `https://your-project-name.vercel.app/api` (update after first deploy)
- **Environments**: ✅ Production, ✅ Preview
- **Note**: Vite requires `VITE_` prefix for client-side variables

#### Optional Variables (Add if Needed)

- `SERVER_ADMIN_NAME`
- `SERVER_NAME`
- `LUNAVERSE_HOST` (if using)
- `DEFAULT_ADMIN_EMAIL`
- `DEFAULT_ADMIN_PASSWORD`
- `DEFAULT_ADMIN_ROLE`
- Any other variables from your `.env.local`

### Step 7: Vercel Auto-Provided Variables (DO NOT ADD THESE)

Vercel automatically provides these - **DO NOT** add them manually:
- ✅ `VERCEL` - Set to `1` automatically
- ✅ `VERCEL_URL` - Your deployment URL (e.g., `your-app.vercel.app`)
- ✅ `VERCEL_ENV` - Environment (`production`, `preview`, or `development`)
- ✅ `NODE_ENV` - Set automatically

**Important**: Your code should use `process.env.VERCEL_URL` which Vercel provides automatically.

---

## Part 3: Special Configuration for Monorepo

### Step 8: Verify vercel.json Configuration

Your `vercel.json` should already be configured, but verify these settings:

1. **Build Command**: `npm run build`
2. **Output Directory**: `frontend/dist`
3. **Install Command**: `npm run install:all`

These should match what you see in the Vercel dashboard.

### Step 9: Update API_URL After First Deploy

**IMPORTANT**: After your first successful deployment:

1. **Go to** your project dashboard on Vercel
2. **Click** on a deployment to see its details
3. **Copy** the deployment URL (e.g., `https://your-app-abc123.vercel.app`)
4. **Go to** Settings → Environment Variables
5. **Find** `API_URL` and `FRONTEND_URL`
6. **Click** the edit icon (pencil)
7. **Update** the value to your actual deployment URL
8. **Save**
9. **Redeploy** your application (Vercel will automatically redeploy when you update env vars, or click "Redeploy")

---

## Part 4: Deploy

### Step 10: Deploy Your Application

1. **Scroll to the bottom** of the project configuration page
2. **Review** all your environment variables (they should all be listed)
3. **Click** the "Deploy" button
4. **Wait** for the build to complete (usually 2-5 minutes)

### Step 11: Monitor Deployment

1. You'll see a build log in real-time
2. **Watch for errors** - common issues:
   - Missing environment variables
   - Build command failures
   - TypeScript errors
3. If build fails, **click** "View Function Logs" to see detailed errors

---

## Part 5: Post-Deployment Configuration

### Step 12: Update Environment Variables with Actual URLs

After successful deployment:

1. **Go to** your project dashboard
2. **Click** "Settings" (top navigation)
3. **Click** "Environment Variables" (left sidebar)
4. **Update** these variables with your actual deployment URL:
   - `API_URL`: `https://your-actual-domain.vercel.app`
   - `FRONTEND_URL`: `https://your-actual-domain.vercel.app`
   - `VITE_API_URL`: `https://your-actual-domain.vercel.app/api`
5. **Click** "Save" for each variable
6. **Redeploy** (Vercel may auto-redeploy, or click "Redeploy" button)

### Step 13: Test Your Deployment

1. **Click** "Visit" button on your deployment
2. **Test** the frontend loads correctly
3. **Test** API endpoints:
   - Visit: `https://your-app.vercel.app/api/health`
   - Should return: `{"status":"ok","timestamp":"...","environment":"production"}`
4. **Check** browser console for any errors
5. **Test** authentication endpoints if implemented

---

## Part 6: Common Issues and Solutions

### Issue 1: "Missing Environment Variable" Error

**Symptoms**: Build fails with error about missing variable

**Solution**:
1. **Go to** Settings → Environment Variables
2. **Check** that the variable exists
3. **Verify** it's checked for the correct environment (Production/Preview)
4. **Redeploy** after adding

### Issue 2: API Routes Not Working

**Symptoms**: Frontend loads but API calls fail

**Solutions**:
1. **Check** `VITE_API_URL` is set correctly
2. **Verify** `API_URL` matches your Vercel domain
3. **Check** CORS settings in `backend/src/server.ts`
4. **Verify** `vercel.json` rewrites are correct

### Issue 3: Database Connection Fails

**Symptoms**: API returns database connection errors

**Solutions**:
1. **Verify** database credentials are correct
2. **Check** database allows connections from Vercel IPs (if using external DB)
3. **For DigitalOcean**: Ensure firewall allows Vercel IPs
4. **Check** SSL mode is set correctly (`DO_PG_SSLMODE=require`)

### Issue 4: Build Fails with TypeScript Errors

**Symptoms**: Build log shows TypeScript compilation errors

**Solutions**:
1. **Fix** errors locally first: `npm run type-check` in backend
2. **Ensure** all dependencies are in `package.json`
3. **Check** `tsconfig.json` is configured correctly

### Issue 5: Frontend Can't Connect to Backend

**Symptoms**: Frontend loads but shows "Failed to connect to backend"

**Solutions**:
1. **Verify** `VITE_API_URL` is set to: `https://your-domain.vercel.app/api`
2. **Check** API routes are working: Visit `/api/health` directly
3. **Verify** CORS is configured to allow your frontend domain
4. **Check** browser console for specific error messages

---

## Part 7: Environment Variables Checklist

Use this checklist to ensure you've added all necessary variables:

### ✅ Critical (Must Have)
- [ ] `APP_ENV` = `production`
- [ ] `JWT_SECRET` = (strong random string)
- [ ] `JWT_EXPIRES_IN` = `7d`
- [ ] `API_URL` = (your Vercel URL - update after deploy)
- [ ] `FRONTEND_URL` = (your Vercel URL - update after deploy)
- [ ] `VITE_API_URL` = (your Vercel URL + `/api` - update after deploy)
- [ ] `LOG_LEVEL` = `INFO` or `ERROR`

### ✅ Database (If Using)
- [ ] `POSTGRES_HOST`
- [ ] `POSTGRES_PORT`
- [ ] `POSTGRES_DB`
- [ ] `POSTGRES_USER`
- [ ] `POSTGRES_PASSWORD`
- [ ] OR DigitalOcean variables:
  - [ ] `DO_PG_HOST`
  - [ ] `DO_PG_PORT`
  - [ ] `DO_PG_USER`
  - [ ] `DO_PG_PASSWORD`
  - [ ] `DO_PG_SSLMODE`

### ✅ Third-Party Services (If Using)
- [ ] `GITHUB_TOKEN` (if using GitHub API)
- [ ] `HF_TOKEN` (if using Hugging Face)
- [ ] `TASKADE_TOKEN` (if using Taskade)
- [ ] `NAMESILO_API_KEY` (if using NameSilo)

### ✅ Optional (Add as Needed)
- [ ] `DEFAULT_ADMIN_EMAIL`
- [ ] `DEFAULT_ADMIN_PASSWORD`
- [ ] `SERVER_ADMIN_NAME`
- [ ] Any other variables from your local `.env.local`

---

## Part 8: Variables That Need Special Attention

### Variables That Vercel Provides Automatically (Don't Add)
- ❌ `VERCEL` - Auto-set to `1`
- ❌ `VERCEL_URL` - Auto-provided
- ❌ `VERCEL_ENV` - Auto-set to `production`/`preview`
- ❌ `NODE_ENV` - Auto-set to `production`

### Variables That Need Updates After First Deploy
1. `API_URL` - Update with actual Vercel domain
2. `FRONTEND_URL` - Update with actual Vercel domain
3. `VITE_API_URL` - Update with actual Vercel domain + `/api`

### Variables That Should Be Different for Production
1. `JWT_SECRET` - **MUST** be different from development
2. `APP_ENV` - Should be `production` (not `dev`)
3. Database credentials - Use production database (not localhost)

---

## Quick Reference: Vercel Dashboard Navigation

```
Vercel Dashboard
├── Projects (list of all projects)
│   └── [Your Project]
│       ├── Deployments (view all deployments)
│       ├── Settings
│       │   ├── General
│       │   ├── Environment Variables ← ADD VARIABLES HERE
│       │   ├── Domains
│       │   └── Functions
│       └── [Deployment]
│           ├── Build Logs
│           ├── Runtime Logs
│           └── Visit (button to view live site)
```

---

## Final Notes

1. **Always test locally first** before deploying to Vercel
2. **Use different secrets** for production vs development
3. **Update URLs** after first deployment with actual Vercel domains
4. **Monitor build logs** for any errors
5. **Check function logs** if API routes aren't working
6. **Redeploy** after updating environment variables

---

## Need Help?

- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [https://vercel.com/support](https://vercel.com/support)
- Check build logs for specific error messages

Good luck with your deployment! 🚀
