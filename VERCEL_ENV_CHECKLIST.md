# Vercel Environment Variables Quick Checklist

## ⚠️ Critical Variables (Must Add Before First Deploy)

Copy these exactly as shown and add them in Vercel Dashboard → Settings → Environment Variables:

```
APP_ENV=production
JWT_SECRET=<generate-strong-random-string-32-chars-minimum>
JWT_EXPIRES_IN=7d
LOG_LEVEL=INFO
API_PORT=3001
```

## 📝 Variables to Add After First Deployment

After your first successful deploy, update these with your actual Vercel URL:

```
API_URL=https://your-project-name.vercel.app
FRONTEND_URL=https://your-project-name.vercel.app
VITE_API_URL=https://your-project-name.vercel.app/api
```

## 🗄️ Database Variables (If Using PostgreSQL)

If using a production database (not localhost):

```
POSTGRES_HOST=your-database-host
POSTGRES_PORT=5432
POSTGRES_DB=your-database-name
POSTGRES_USER=your-database-user
POSTGRES_PASSWORD=your-database-password
```

Or if using DigitalOcean:

```
DO_PG_HOST=your-do-host
DO_PG_PORT=25060
DO_PG_USER=your-do-user
DO_PG_PASSWORD=your-do-password
DO_PG_SSLMODE=require
```

## 🔑 Third-Party Services (Add Only If Using)

```
GITHUB_TOKEN=your-github-token
HF_TOKEN=your-huggingface-token
TASKADE_TOKEN=your-taskade-token
NAMESILO_API_KEY=your-namesilo-key
```

## ❌ DO NOT ADD THESE (Vercel Provides Automatically)

- `VERCEL` (auto-set to `1`)
- `VERCEL_URL` (auto-provided)
- `VERCEL_ENV` (auto-set to `production`/`preview`)
- `NODE_ENV` (auto-set to `production`)

## ✅ Quick Setup Steps

1. **Before First Deploy**: Add all "Critical Variables" above
2. **Deploy**: Click "Deploy" button
3. **After Deploy**: Copy your Vercel URL and update `API_URL`, `FRONTEND_URL`, `VITE_API_URL`
4. **Redeploy**: Vercel will auto-redeploy when you update env vars

## 🔍 How to Generate JWT_SECRET

Run this in your terminal:
```bash
openssl rand -base64 32
```

Or use an online generator: https://randomkeygen.com/

**IMPORTANT**: Use a DIFFERENT secret for production than development!
