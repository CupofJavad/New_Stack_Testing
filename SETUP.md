# Setup Guide

## Environment Variables Setup

Since `.env` files are protected for security reasons, you need to manually create them. Follow these steps:

### Step 1: Create `.env.example` (Template)

Create a file named `.env.example` in the root directory with the following content:

```env
🔐🗝️ Ultimate Secrete Variables File

# =========================================
# App / Environment
# =========================================
APP_ENV=dev
LOG_LEVEL=INFO

# =========================================
# Lunaverse Server (SSH + endpoints)
# =========================================
SERVER_ADMIN_NAME="YOUR_SERVER_ADMIN_NAME"
SERVER_NAME=YOUR_SERVER_NAME

LUNAVERSE_HOST=YOUR_LUNAVERSE_HOST
LUNAVERSE_SSH_USER=YOUR_LUNAVERSE_SSH_USER
LUNAVERSE_SSH_PORT=22
LUNAVERSE_SSH_PASSWORD="YOUR_LUNAVERSE_SSH_PASSWORD"
LUNAVERSE_SSH_TAILSCALE_HOST=YOUR_LUNAVERSE_SSH_TAILSCALE_HOST

COCKPIT_URL="YOUR_COCKPIT_URL"
PGADMIN_URL="YOUR_PGADMIN_URL"

# =========================================
# PostgreSQL (Local server)
# =========================================
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=YOUR_POSTGRES_DB

POSTGRES_USER=YOUR_POSTGRES_USER
POSTGRES_PASSWORD="YOUR_POSTGRES_PASSWORD"

POSTGRES_SUPERUSER=postgres
POSTGRES_SUPERUSER_PASSWORD="YOUR_POSTGRES_SUPERUSER_PASSWORD"

POSTGRES_ALT_USER=YOUR_POSTGRES_ALT_USER
POSTGRES_ALT_PASSWORD="YOUR_POSTGRES_ALT_PASSWORD"

PGADMIN_MASTER_PASSWORD="YOUR_PGADMIN_MASTER_PASSWORD"

# =========================================
# App seeded admin user (from spec/seed)
# =========================================
DEFAULT_ADMIN_EMAIL=YOUR_DEFAULT_ADMIN_EMAIL
DEFAULT_ADMIN_PASSWORD="YOUR_DEFAULT_ADMIN_PASSWORD"
DEFAULT_ADMIN_ROLE=admin

# =========================================
# Additional app users (examples)
# =========================================
LUNAVERSE_APP_USER=YOUR_LUNAVERSE_APP_USER
LUNAVERSE_APP_PASSWORD="YOUR_LUNAVERSE_APP_PASSWORD"

# =========================================
# GitHub
# =========================================
GITHUB_TOKEN="YOUR_GITHUB_TOKEN"

# =========================================
# Hugging Face
# =========================================
HF_TOKEN="YOUR_HF_TOKEN"
HF_SSH_KEY_FINGERPRINT="YOUR_HF_SSH_KEY_FINGERPRINT"

# =========================================
# DigitalOcean Managed DB (examples)
# =========================================
DO_PG_HOST="YOUR_DO_PG_HOST"
DO_PG_PORT=25060
DO_PG_USER=YOUR_DO_PG_USER
DO_PG_PASSWORD="YOUR_DO_PG_PASSWORD"
DO_PG_SSLMODE=require
DO_API_TOKEN="YOUR_DO_API_TOKEN"

# =========================================
# Taskade
# =========================================
TASKADE_TOKEN="YOUR_TASKADE_TOKEN"

# =========================================
# NameSilo
# =========================================
NAMESILO_API_KEY="YOUR_NAMESILO_API_KEY"
NAMESILO_ACCOUNT_URL="YOUR_NAMESILO_ACCOUNT_URL"
NAMESILO_SITE_BUILDER_URL="YOUR_NAMESILO_SITE_BUILDER_URL"

# =========================================
# JWT / Authentication
# =========================================
JWT_SECRET="YOUR_JWT_SECRET"
JWT_EXPIRES_IN=7d

# =========================================
# API Configuration
# =========================================
API_PORT=3001
API_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173

# =========================================
# Vercel
# =========================================
VERCEL_URL=YOUR_VERCEL_URL
VERCEL_ENV=development
```

### Step 2: Create `.env.local` (Local Development)

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and replace all `YOUR_*` placeholders with your actual values.

3. **Important**: Never commit `.env.local` to version control (it's already in `.gitignore`).

### Step 3: Backend Environment Variables

The backend will automatically load environment variables from `.env.local` in the root directory when using `dotenv`.

### Step 4: Frontend Environment Variables

For the frontend, create a `.env.local` file in the `frontend/` directory with:

```env
VITE_API_URL=http://localhost:3001
```

Or set it in the root `.env.local` and it will be available to both frontend and backend.

## Quick Setup Commands

```bash
# 1. Install all dependencies
npm run install:all

# 2. Create .env.local from template (if .env.example exists)
cp .env.example .env.local

# 3. Edit .env.local with your actual values
# (Use your preferred editor)

# 4. Start development servers
npm run dev
```

## Environment Variable Reference

### Required for Development
- `JWT_SECRET` - Secret key for JWT token signing
- `POSTGRES_HOST` - PostgreSQL host (default: localhost)
- `POSTGRES_PORT` - PostgreSQL port (default: 5432)
- `POSTGRES_DB` - Database name
- `POSTGRES_USER` - Database user
- `POSTGRES_PASSWORD` - Database password

### Optional
- All other variables are optional and can be added as needed for your specific use case.

## Security Notes

- Never commit `.env.local` or any file containing real credentials
- Use strong, unique values for `JWT_SECRET` in production
- Rotate API keys and secrets regularly
- Use different values for development and production environments
