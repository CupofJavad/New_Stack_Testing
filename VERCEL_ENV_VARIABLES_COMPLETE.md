# Complete Vercel Environment Variables List

## 🚀 Copy-Paste Ready: All Variables for Vercel

Since this is a test deployment, here are ALL the environment variables you need. Copy each one into Vercel's Environment Variables section.

**IMPORTANT**: 
- Check ✅ **Production** and ✅ **Preview** for all variables
- After first deploy, update the URL variables with your actual Vercel domain

---

## ✅ Critical Variables (Required for App to Work)

### 1. App Environment
```
Key: APP_ENV
Value: production
Environments: ✅ Production, ✅ Preview
```
**Note**: Your template has `dev`, but use `production` for Vercel deployment

### 2. JWT Secret (Already have this, but here for reference)
```
Key: JWT_SECRET
Value: tX8rUO/xYAf3WzF9/EsGLTjThoHiyBIBNU=
Environments: ✅ Production, ✅ Preview
```
**Note**: You already have this set, but make sure it's `7d` not `7`!

### 3. JWT Expiration (FIX THIS - Change from "7" to "7d")
```
Key: JWT_EXPIRES_IN
Value: 7d
Environments: ✅ Production, ✅ Preview
```
**⚠️ ACTION REQUIRED**: Change your current value from `7` to `7d`

### 4. Log Level
```
Key: LOG_LEVEL
Value: INFO
Environments: ✅ Production, ✅ Preview
```

### 5. API Port
```
Key: API_PORT
Value: 3001
Environments: ✅ Production, ✅ Preview
```

---

## 📝 URL Variables (Add After First Deploy)

**IMPORTANT**: Add these AFTER your first successful deployment, then update with your actual Vercel URL.

### 6. API URL
```
Key: API_URL
Value: https://new-stack-testing.vercel.app
Environments: ✅ Production, ✅ Preview
```
**Note**: Replace `new-stack-testing` with your actual project name/URL after deploy

### 7. Frontend URL
```
Key: FRONTEND_URL
Value: https://new-stack-testing.vercel.app
Environments: ✅ Production, ✅ Preview
```
**Note**: Replace `new-stack-testing` with your actual project name/URL after deploy

### 8. Frontend API URL (Vite - Must have VITE_ prefix)
```
Key: VITE_API_URL
Value: https://new-stack-testing.vercel.app/api
Environments: ✅ Production, ✅ Preview
```
**Note**: Replace `new-stack-testing` with your actual project name/URL after deploy

---

## 🗄️ Database Variables

### PostgreSQL (Local server)
```
Key: POSTGRES_HOST
Value: localhost
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_PORT
Value: 5432
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_DB
Value: lunaverse_db
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_USER
Value: lunaverse_admin
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_PASSWORD
Value: LunaAdminDB123!
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_SUPERUSER
Value: postgres
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_SUPERUSER_PASSWORD
Value: RufusDeHiss_2025*!
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_ALT_USER
Value: Rue_gres
Environments: ✅ Production, ✅ Preview
```

```
Key: POSTGRES_ALT_PASSWORD
Value: RufusDeHiss_2025*!
Environments: ✅ Production, ✅ Preview
```

```
Key: PGADMIN_MASTER_PASSWORD
Value: LunaMasterKey_!*2025
Environments: ✅ Production, ✅ Preview
```

### DigitalOcean Managed DB
```
Key: DO_PG_HOST
Value: genai-yellowfin-do-user-29516623-0.i.db.ondigitalocean.com
Environments: ✅ Production, ✅ Preview
```

```
Key: DO_PG_PORT
Value: 25060
Environments: ✅ Production, ✅ Preview
```

```
Key: DO_PG_USER
Value: doadmin
Environments: ✅ Production, ✅ Preview
```

```
Key: DO_PG_PASSWORD
Value: [YOUR_DO_PG_PASSWORD]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual DigitalOcean database password from your template

```
Key: DO_PG_SSLMODE
Value: require
Environments: ✅ Production, ✅ Preview
```

```
Key: DO_API_TOKEN
Value: [YOUR_DO_API_TOKEN]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual DigitalOcean API token from your template

---

## 👤 App User Variables

### Default Admin User
```
Key: DEFAULT_ADMIN_EMAIL
Value: admin@example.com
Environments: ✅ Production, ✅ Preview
```

```
Key: DEFAULT_ADMIN_PASSWORD
Value: Admin123!
Environments: ✅ Production, ✅ Preview
```

```
Key: DEFAULT_ADMIN_ROLE
Value: admin
Environments: ✅ Production, ✅ Preview
```

### App User
```
Key: LUNAVERSE_APP_USER
Value: lunaverse_app
Environments: ✅ Production, ✅ Preview
```

```
Key: LUNAVERSE_APP_PASSWORD
Value: Luna_App*!
Environments: ✅ Production, ✅ Preview
```

---

## 🔑 Third-Party Service Variables

### GitHub Token
```
Key: GITHUB_TOKEN
Value: [YOUR_GITHUB_TOKEN]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual GitHub token from your template

### Hugging Face
```
Key: HF_TOKEN
Value: [YOUR_HF_TOKEN]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual Hugging Face token from your template

```
Key: HF_SSH_KEY_FINGERPRINT
Value: [YOUR_HF_SSH_KEY_FINGERPRINT]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual Hugging Face SSH key fingerprint from your template

### Taskade
```
Key: TASKADE_TOKEN
Value: [YOUR_TASKADE_TOKEN]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual Taskade token from your template

### NameSilo
```
Key: NAMESILO_API_KEY
Value: [YOUR_NAMESILO_API_KEY]
Environments: ✅ Production, ✅ Preview
```
**Note**: Use your actual NameSilo API key from your template

```
Key: NAMESILO_ACCOUNT_URL
Value: https://www.namesilo.com/account/
Environments: ✅ Production, ✅ Preview
```

```
Key: NAMESILO_SITE_BUILDER_URL
Value: https://sites.google.com/view/thekeyholders?usp=sharing
Environments: ✅ Production, ✅ Preview
```

---

## 🖥️ Server Configuration

### Server Info
```
Key: SERVER_ADMIN_NAME
Value: Luna Server Admin
Environments: ✅ Production, ✅ Preview
```

```
Key: SERVER_NAME
Value: lunaverse
Environments: ✅ Production, ✅ Preview
```

### Lunaverse Server
```
Key: LUNAVERSE_HOST
Value: 192.168.1.172
Environments: ✅ Production, ✅ Preview
```

```
Key: LUNAVERSE_SSH_USER
Value: luna
Environments: ✅ Production, ✅ Preview
```

```
Key: LUNAVERSE_SSH_PORT
Value: 22
Environments: ✅ Production, ✅ Preview
```

```
Key: LUNAVERSE_SSH_PASSWORD
Value: Lunatic_2025*!
Environments: ✅ Production, ✅ Preview
```

```
Key: LUNAVERSE_SSH_TAILSCALE_HOST
Value: 100.80.191.90
Environments: ✅ Production, ✅ Preview
```

```
Key: COCKPIT_URL
Value: https://192.168.1.172:9090
Environments: ✅ Production, ✅ Preview
```

```
Key: PGADMIN_URL
Value: http://192.168.1.172:5050/browser/
Environments: ✅ Production, ✅ Preview
```

---

## ❌ DO NOT ADD THESE (Vercel Provides Automatically)

**DO NOT** add these variables - Vercel sets them automatically:
- ❌ `VERCEL` (auto-set to `1`)
- ❌ `VERCEL_URL` (auto-provided - your deployment URL)
- ❌ `VERCEL_ENV` (auto-set to `production`/`preview`)
- ❌ `NODE_ENV` (auto-set to `production`)

---

## 📋 Quick Setup Checklist

### Before First Deploy (Minimum Required):
- [x] `APP_ENV` = `production` ✅ (You have this)
- [x] `JWT_SECRET` = (your value) ✅ (You have this)
- [ ] `JWT_EXPIRES_IN` = `7d` ⚠️ (Fix: change from `7` to `7d`)
- [ ] `LOG_LEVEL` = `INFO` (Add this)
- [ ] `API_PORT` = `3001` (Add this)

### After First Deploy (Update URLs):
- [ ] `API_URL` = (your actual Vercel URL)
- [ ] `FRONTEND_URL` = (your actual Vercel URL)
- [ ] `VITE_API_URL` = (your actual Vercel URL + `/api`)

### Optional (Add if needed):
- [ ] Database variables (if using database)
- [ ] Third-party service tokens (if using those services)
- [ ] Server configuration (if using)

---

## 🎯 Recommended: Start with Minimum Variables

For a test deployment, start with just these 5 variables:

1. `APP_ENV` = `production` ✅ (You have)
2. `JWT_SECRET` = (your value) ✅ (You have)
3. `JWT_EXPIRES_IN` = `7d` ⚠️ (Fix this!)
4. `LOG_LEVEL` = `INFO` (Add)
5. `API_PORT` = `3001` (Add)

Then deploy, and add the URL variables after you get your Vercel domain.

---

## 📝 How to Add Variables in Vercel

1. In Vercel project settings, go to **Environment Variables**
2. Click **"+ Add More"** button
3. Enter the **Key** (variable name)
4. Enter the **Value**
5. Check ✅ **Production** and ✅ **Preview** checkboxes
6. Click **Save**
7. Repeat for each variable

---

## ✅ You're Ready to Deploy!

Once you've:
1. Fixed `JWT_EXPIRES_IN` to `7d`
2. Added `LOG_LEVEL=INFO`
3. Added `API_PORT=3001`

Click **"Deploy"** and your app will build and deploy!

After deployment, come back and add the URL variables with your actual Vercel domain.
