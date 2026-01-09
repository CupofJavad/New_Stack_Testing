# Setup Environment Variables via Cockpit

Since SSH connection timed out, use Cockpit web interface instead.

## Steps

### 1. Access Cockpit

Open in your browser:
```
https://192.168.1.172:9090
```

Log in with your server credentials.

### 2. Open Terminal

1. In Cockpit, click on **"Terminal"** in the left sidebar
2. This opens a web-based terminal

### 3. Create .env File

In the Cockpit terminal, run:

```bash
nano ~/.env
```

### 4. Paste Environment Variables

Copy and paste ALL of this into the nano editor:

```
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
JWT_SECRET="EwN6bM/3BtX8rUO/xYAf3WzF9/EsGLTjThoHiyBlBNU="
JWT_EXPIRES_IN=7d

# =========================================
# API Configuration
# =========================================
API_PORT=3001
API_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
```

### 5. Save the File

In nano:
- Press `Ctrl + O` to save
- Press `Enter` to confirm filename
- Press `Ctrl + X` to exit

### 6. Set File Permissions

Back in the terminal, run:

```bash
chmod 600 ~/.env
```

### 7. Verify

Check that the file was created:

```bash
ls -la ~/.env
cat ~/.env
```

You should see the file with permissions `-rw-------` (read/write for owner only).

## Alternative: Use Cockpit File Manager

1. In Cockpit, go to **"Files"** in the left sidebar
2. Navigate to `/home/luna/` (or your home directory)
3. Click **"Create"** → **"New File"**
4. Name it `.env`
5. Paste all the environment variables
6. Save
7. Right-click the file → **"Properties"** → Set permissions to `600`

## Done!

Your environment variables are now set up on the server at `~/.env`.

To use them in your application:
- Make sure your app loads `.env` files (using `dotenv` package)
- Or copy to your app directory: `cp ~/.env /path/to/your/app/.env`
