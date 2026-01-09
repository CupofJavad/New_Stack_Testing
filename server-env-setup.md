# Server Environment Variables Setup Guide

## Quick Setup (Manual SSH)

Since Tailscale is not on, use the direct IP address. Here are the commands to run:

### Option 1: SSH and Create .env File Manually

```bash
# Connect to server
ssh -p 22 luna@192.168.1.172

# Once connected, create the .env file
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

# Make it readable only by you
chmod 600 ~/.env

# Verify it was created
cat ~/.env
```

### Option 2: Copy File from Local Machine

If you have the file locally, you can copy it:

```bash
# From your local machine
scp -P 22 .env.local luna@192.168.1.172:~/.env
```

### Option 3: Use the Setup Script

```bash
# Make script executable
chmod +x scripts/setup-server-env.sh

# Run the script (requires sshpass)
# Install sshpass first: brew install sshpass (Mac) or apt-get install sshpass (Linux)
./scripts/setup-server-env.sh
```

## Where to Place the .env File

Depending on your application setup:

1. **In user home directory**: `~/.env`
2. **In application directory**: `/opt/your-app/.env` or `/var/www/your-app/.env`
3. **System-wide**: `/etc/environment` (requires sudo)

## Loading Environment Variables

### For a Node.js/Express app:
```bash
# The app will automatically load .env if using dotenv
# Make sure your app has: require('dotenv').config()
```

### For system-wide use:
```bash
# Add to ~/.bashrc or ~/.zshrc
export $(cat ~/.env | xargs)
```

### For a specific application:
```bash
# In your app directory
cp ~/.env /path/to/your/app/.env
```

## Verify Setup

```bash
# SSH into server
ssh -p 22 luna@192.168.1.172

# Check if .env exists
ls -la ~/.env

# View contents (be careful, contains secrets)
cat ~/.env

# Test loading variables
source ~/.env
echo $POSTGRES_DB
echo $JWT_SECRET
```

## Security Notes

1. **File permissions**: Make sure `.env` is only readable by the owner:
   ```bash
   chmod 600 ~/.env
   ```

2. **Never commit**: Ensure `.env` is in `.gitignore`

3. **Backup**: Keep a secure backup of your `.env` file

4. **Rotate secrets**: Change passwords and tokens regularly

## Troubleshooting

### Can't connect via SSH
- Verify the IP address: `192.168.1.172`
- Check if SSH service is running: `sudo systemctl status ssh`
- Verify port 22 is open

### Variables not loading
- Check file path is correct
- Verify file permissions
- Ensure your app is configured to load `.env` files
- Check for syntax errors in `.env` file

### Permission denied
- Use `chmod 600 ~/.env` to set correct permissions
- If copying to system directory, use `sudo`
