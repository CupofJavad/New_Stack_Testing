#!/bin/bash

# Script to set up environment variables on Luna Server
# Run this script on your server via SSH

SERVER_USER="luna"
SERVER_HOST="192.168.1.172"
SSH_PORT="22"
SSH_PASSWORD="Lunatic_2025*!"

# Environment variables content
ENV_CONTENT='# =========================================
# App / Environment
# =========================================
APP_ENV=production
LOG_LEVEL=INFO

# =========================================
# Lunaverse Server (SSH + endpoints)
# =========================================
SERVER_ADMIN_NAME="Luna Server Admin"
SERVER_NAME=lunaverse

LUNAVERSE_HOST=192.168.1.172
LUNAVERSE_SSH_USER=luna
LUNAVERSE_SSH_PORT=22
LUNAVERSE_SSH_PASSWORD="Lunatic_2025*!"
LUNAVERSE_SSH_TAILSCALE_HOST=100.80.191.90

COCKPIT_URL="https://192.168.1.172:9090"
PGADMIN_URL="http://192.168.1.172:5050/browser/"

# =========================================
# PostgreSQL (Local server)
# =========================================
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=lunaverse_db

POSTGRES_USER=lunaverse_admin
POSTGRES_PASSWORD="LunaAdminDB123!"

POSTGRES_SUPERUSER=postgres
POSTGRES_SUPERUSER_PASSWORD="RufusDeHiss_2025*!"

POSTGRES_ALT_USER=Rue_gres
POSTGRES_ALT_PASSWORD="RufusDeHiss_2025*!"

PGADMIN_MASTER_PASSWORD="LunaMasterKey_!*2025"

# =========================================
# App seeded admin user (from spec/seed)
# =========================================
DEFAULT_ADMIN_EMAIL=admin@example.com
DEFAULT_ADMIN_PASSWORD="Admin123!"
DEFAULT_ADMIN_ROLE=admin

# =========================================
# Additional app users (examples)
# =========================================
LUNAVERSE_APP_USER=lunaverse_app
LUNAVERSE_APP_PASSWORD="Luna_App*!"

# =========================================
# JWT / Authentication
# =========================================
JWT_SECRET="tX8rUO/xYAf3WzF9/EsGLTjThoHiyBIBNU="
JWT_EXPIRES_IN=7d

# =========================================
# API Configuration
# =========================================
API_PORT=3001
API_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
'

echo "Setting up environment variables on server..."
echo ""

# Create .env file on server
sshpass -p "$SSH_PASSWORD" ssh -p "$SSH_PORT" "$SERVER_USER@$SERVER_HOST" << 'ENDSSH'
# Create .env file in home directory
cat > ~/.env << 'EOF'
# =========================================
# App / Environment
# =========================================
APP_ENV=production
LOG_LEVEL=INFO

# =========================================
# Lunaverse Server (SSH + endpoints)
# =========================================
SERVER_ADMIN_NAME="Luna Server Admin"
SERVER_NAME=lunaverse

LUNAVERSE_HOST=192.168.1.172
LUNAVERSE_SSH_USER=luna
LUNAVERSE_SSH_PORT=22
LUNAVERSE_SSH_PASSWORD="Lunatic_2025*!"
LUNAVERSE_SSH_TAILSCALE_HOST=100.80.191.90

COCKPIT_URL="https://192.168.1.172:9090"
PGADMIN_URL="http://192.168.1.172:5050/browser/"

# =========================================
# PostgreSQL (Local server)
# =========================================
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=lunaverse_db

POSTGRES_USER=lunaverse_admin
POSTGRES_PASSWORD="LunaAdminDB123!"

POSTGRES_SUPERUSER=postgres
POSTGRES_SUPERUSER_PASSWORD="RufusDeHiss_2025*!"

POSTGRES_ALT_USER=Rue_gres
POSTGRES_ALT_PASSWORD="RufusDeHiss_2025*!"

PGADMIN_MASTER_PASSWORD="LunaMasterKey_!*2025"

# =========================================
# App seeded admin user (from spec/seed)
# =========================================
DEFAULT_ADMIN_EMAIL=admin@example.com
DEFAULT_ADMIN_PASSWORD="Admin123!"
DEFAULT_ADMIN_ROLE=admin

# =========================================
# Additional app users (examples)
# =========================================
LUNAVERSE_APP_USER=lunaverse_app
LUNAVERSE_APP_PASSWORD="Luna_App*!"

# =========================================
# JWT / Authentication
# =========================================
JWT_SECRET="tX8rUO/xYAf3WzF9/EsGLTjThoHiyBIBNU="
JWT_EXPIRES_IN=7d

# =========================================
# API Configuration
# =========================================
API_PORT=3001
API_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
EOF

# Also create in /etc/environment or /opt/app/.env if needed
# Uncomment the following if you want to set system-wide environment variables
# sudo bash -c 'cat >> /etc/environment << EOF
# [paste env vars here]
# EOF'

echo "Environment variables file created at ~/.env"
echo "To use these variables, source them with: source ~/.env"
echo "Or add to your application's .env file"
ENDSSH

echo ""
echo "✅ Environment variables have been set up on the server!"
echo ""
echo "The .env file has been created at: ~/.env on the server"
echo ""
echo "To use these variables in your application:"
echo "1. Copy ~/.env to your application directory"
echo "2. Or source them: source ~/.env"
echo "3. Or add them to your app's .env file"
