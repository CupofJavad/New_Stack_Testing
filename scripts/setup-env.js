#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envExampleContent = `🔐🗝️ Ultimate Secrete Variables File

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
`;

const rootDir = path.resolve(__dirname, '..');
const envExamplePath = path.join(rootDir, '.env.example');

try {
  // Check if .env.example already exists
  if (fs.existsSync(envExamplePath)) {
    console.log('⚠️  .env.example already exists. Skipping creation.');
    process.exit(0);
  }

  // Create .env.example
  fs.writeFileSync(envExamplePath, envExampleContent, 'utf8');
  console.log('✅ Created .env.example file');
  console.log('📝 Next steps:');
  console.log('   1. Copy .env.example to .env.local: cp .env.example .env.local');
  console.log('   2. Edit .env.local and replace all YOUR_* placeholders with your actual values');
} catch (error) {
  console.error('❌ Error creating .env.example:', error.message);
  process.exit(1);
}
