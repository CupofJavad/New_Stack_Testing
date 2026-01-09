# Backend Setup & Connection Guide

## ✅ Backend is Now Configured

The backend has been set up with:
- ✅ Database connection pool
- ✅ Connection testing
- ✅ Health check endpoints with DB status
- ✅ Database initialization script

## 🗄️ Database Connection

The backend is configured to connect to PostgreSQL using these environment variables:

```
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=lunaverse_db
POSTGRES_USER=lunaverse_admin
POSTGRES_PASSWORD=LunaAdminDB123!
```

## 🧪 Test Database Connection

### Option 1: Test via API Endpoint

Once the backend is running, test the connection:

```bash
# Health check (includes DB status)
curl http://localhost:3001/api/health

# Direct database test
curl http://localhost:3001/api/db/test
```

### Option 2: Test via Script

```bash
cd backend
npm run db:test
```

### Option 3: Initialize Database

To create tables and set up the schema:

```bash
cd backend
npm run db:init
```

This will:
- Create `users` table
- Create indexes
- Insert default admin user (from env vars)

## 🚀 Start Backend Locally

```bash
# From project root
cd backend
npm run dev
```

Or from root:
```bash
npm run dev --workspace=backend
```

## 📝 Database Schema

The initialization script creates:

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Environment Variables for Database

Make sure these are set in your `.env.local`:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=lunaverse_db
POSTGRES_USER=lunaverse_admin
POSTGRES_PASSWORD=LunaAdminDB123!
```

## ✅ Connection Status

The backend will:
- ✅ Attempt to connect to database on startup
- ✅ Log connection status
- ✅ Continue running even if DB is unavailable (for development)
- ✅ Show DB status in `/api/health` endpoint

## 🧪 Test Endpoints

### Health Check (with DB status)
```
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-09T...",
  "environment": "production",
  "database": "connected" // or "error" or "disconnected"
}
```

### Database Test
```
GET /api/db/test
```

Response (if connected):
```json
{
  "status": "connected",
  "database": "lunaverse_db",
  "host": "localhost",
  "port": 5432,
  "user": "lunaverse_admin",
  "currentTime": "...",
  "version": "PostgreSQL ..."
}
```

## 🐛 Troubleshooting

### Database Connection Fails

1. **Check PostgreSQL is running:**
   ```bash
   # On Mac
   brew services list | grep postgresql
   
   # Or check process
   ps aux | grep postgres
   ```

2. **Verify credentials:**
   - Check `.env.local` has correct values
   - Test connection manually:
     ```bash
     psql -h localhost -U lunaverse_admin -d lunaverse_db
     ```

3. **Check database exists:**
   ```bash
   psql -h localhost -U postgres -c "\l" | grep lunaverse_db
   ```

4. **Create database if needed:**
   ```bash
   psql -h localhost -U postgres -c "CREATE DATABASE lunaverse_db;"
   psql -h localhost -U postgres -c "CREATE USER lunaverse_admin WITH PASSWORD 'LunaAdminDB123!';"
   psql -h localhost -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE lunaverse_db TO lunaverse_admin;"
   ```

### Backend Won't Start

1. Check environment variables are loaded
2. Check port 3001 is available
3. Check TypeScript compiles: `npm run type-check`
4. Check for errors in console

## 🎯 Next Steps

1. **Start backend**: `npm run dev --workspace=backend`
2. **Initialize database**: `npm run db:init --workspace=backend`
3. **Test connection**: Visit `http://localhost:3001/api/db/test`
4. **Start frontend**: `npm run dev --workspace=frontend`
5. **Test full stack**: Visit `http://localhost:5173`

## ✅ Backend is Ready!

The backend is fully configured and ready to connect to your PostgreSQL database. Just make sure:
- PostgreSQL is running
- Environment variables are set correctly
- Database exists and user has permissions

Then start the backend and test the connection! 🚀
