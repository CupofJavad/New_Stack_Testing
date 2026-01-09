#!/usr/bin/env node

/**
 * Database Initialization Script
 * Creates necessary tables and sets up the database schema
 */

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'lunaverse_db',
  user: process.env.POSTGRES_USER || 'lunaverse_admin',
  password: process.env.POSTGRES_PASSWORD || '',
});

async function initDatabase() {
  const client = await pool.connect();
  
  try {
    console.log('🔄 Initializing database...');
    
    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Users table created/verified');
    
    // Create index on email
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `);
    console.log('✅ Indexes created');
    
    // Insert default admin user if it doesn't exist
    const adminEmail = process.env.DEFAULT_ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'Admin123!';
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    
    const existingAdmin = await client.query(
      'SELECT id FROM users WHERE email = $1',
      [adminEmail]
    );
    
    if (existingAdmin.rows.length === 0) {
      await client.query(
        `INSERT INTO users (email, password_hash, role) 
         VALUES ($1, $2, $3)`,
        [adminEmail, hashedPassword, 'admin']
      );
      console.log(`✅ Default admin user created: ${adminEmail}`);
    } else {
      console.log(`ℹ️  Admin user already exists: ${adminEmail}`);
    }
    
    console.log('✅ Database initialization complete!');
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

initDatabase();
