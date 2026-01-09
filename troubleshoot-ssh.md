# SSH Connection Troubleshooting

## Issue: Connection Timeout

The SSH connection to `192.168.1.172` timed out. Here are solutions:

## Possible Causes & Solutions

### 1. Server Not Accessible from Current Network

**Problem**: `192.168.1.172` is a local network IP. You need to be on the same network.

**Solutions**:
- Connect to the same WiFi/network as the server
- Use VPN if the server is on a different network
- Use Tailscale (you mentioned it's not on, but you could enable it)
- Use the Tailscale IP: `100.80.191.90` (if Tailscale is available)

### 2. Try Tailscale IP Instead

Since you have a Tailscale host configured, try connecting via Tailscale:

```bash
ssh -p 22 luna@100.80.191.90
```

**First, make sure Tailscale is running on your local machine:**
```bash
# Check if Tailscale is running
tailscale status

# If not running, start it
# On Mac: Open Tailscale app or run:
tailscale up
```

### 3. SSH Service Not Running on Server

The SSH service might not be running on the server.

**Check on server** (if you have physical/console access):
```bash
sudo systemctl status ssh
# or
sudo systemctl status sshd
```

**Start SSH service**:
```bash
sudo systemctl start ssh
# or
sudo systemctl start sshd
```

### 4. Firewall Blocking Connection

The firewall might be blocking port 22.

**Check firewall** (on server):
```bash
sudo ufw status
# or
sudo iptables -L
```

**Allow SSH** (on server):
```bash
sudo ufw allow 22/tcp
sudo ufw reload
```

### 5. Alternative: Use Cockpit Web Interface

Since you have Cockpit configured at `https://192.168.1.172:9090`, you can:

1. **Access Cockpit** in your browser:
   ```
   https://192.168.1.172:9090
   ```

2. **Use Cockpit's Terminal** to create the `.env` file directly

3. **Or use Cockpit's File Manager** to create/edit the file

## Alternative Methods to Set Environment Variables

### Method 1: Physical/Console Access

If you have physical access to the server:

1. Log in directly to the server
2. Run the commands from `server-env-setup.md`
3. Create the `.env` file manually

### Method 2: Use Cockpit Web Terminal

1. Open `https://192.168.1.172:9090` in browser
2. Log in to Cockpit
3. Go to "Terminal" section
4. Run the environment setup commands

### Method 3: Copy File via SCP (If Connection Works)

If you can get SSH working, you can copy a local file:

```bash
# Create the .env file locally first
cat > .env.local << 'EOF'
[all your env vars here]
EOF

# Then copy it to server
scp -P 22 .env.local luna@192.168.1.172:~/.env
```

### Method 4: Use pgAdmin or Other Tools

If you have pgAdmin access at `http://192.168.1.172:5050/browser/`, you might be able to:
- Access server files through pgAdmin
- Or use pgAdmin's connection to run commands

## Quick Test Commands

### Test if server is reachable:
```bash
# Ping test
ping 192.168.1.172

# Port test
nc -zv 192.168.1.172 22

# Try with verbose SSH
ssh -v -p 22 luna@192.168.1.172
```

### Test Tailscale connection:
```bash
# First, make sure Tailscale is running locally
tailscale status

# Then try SSH via Tailscale
ssh -p 22 luna@100.80.191.90
```

## Recommended Next Steps

1. **Check if you're on the same network** as the server (192.168.1.x)
2. **Try Tailscale** if available: `ssh luna@100.80.191.90`
3. **Use Cockpit web interface** at `https://192.168.1.172:9090`
4. **Check server status** - make sure it's powered on and running

## Manual Setup via Cockpit

If you can access Cockpit:

1. Go to `https://192.168.1.172:9090`
2. Log in
3. Navigate to "Terminal"
4. Run:
   ```bash
   nano ~/.env
   ```
5. Paste all environment variables
6. Save (Ctrl+O, Enter, Ctrl+X)
7. Set permissions:
   ```bash
   chmod 600 ~/.env
   ```
