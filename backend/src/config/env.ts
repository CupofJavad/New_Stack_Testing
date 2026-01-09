import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface EnvConfig {
  // App / Environment
  appEnv: string;
  logLevel: string;

  // Server
  serverAdminName: string;
  serverName: string;

  // Lunaverse Server
  lunaverseHost: string;
  lunaverseSshUser: string;
  lunaverseSshPort: number;
  lunaverseSshPassword: string;
  lunaverseSshTailscaleHost: string;
  cockpitUrl: string;
  pgadminUrl: string;

  // PostgreSQL
  postgresHost: string;
  postgresPort: number;
  postgresDb: string;
  postgresUser: string;
  postgresPassword: string;
  postgresSuperuser: string;
  postgresSuperuserPassword: string;
  postgresAltUser: string;
  postgresAltPassword: string;
  pgadminMasterPassword: string;

  // App Users
  defaultAdminEmail: string;
  defaultAdminPassword: string;
  defaultAdminRole: string;
  lunaverseAppUser: string;
  lunaverseAppPassword: string;

  // Third-party Services
  githubToken: string;
  hfToken: string;
  hfSshKeyFingerprint: string;
  doPgHost: string;
  doPgPort: number;
  doPgUser: string;
  doPgPassword: string;
  doPgSslMode: string;
  doApiToken: string;
  taskadeToken: string;
  namesiloApiKey: string;
  namesiloAccountUrl: string;
  namesiloSiteBuilderUrl: string;

  // JWT / Authentication
  jwtSecret: string;
  jwtExpiresIn: string;

  // API Configuration
  apiPort: number;
  apiUrl: string;
  frontendUrl: string;

  // Vercel
  vercelUrl?: string;
  vercelEnv?: string;
}

function getEnv(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || defaultValue || '';
}

function getEnvNumber(key: string, defaultValue: number): number {
  const value = process.env[key];
  if (!value) return defaultValue;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    throw new Error(`Invalid number for environment variable: ${key}`);
  }
  return parsed;
}

export const config: EnvConfig = {
  // App / Environment
  appEnv: getEnv('APP_ENV', 'development'),
  logLevel: getEnv('LOG_LEVEL', 'INFO'),

  // Server
  serverAdminName: getEnv('SERVER_ADMIN_NAME', 'Server Admin'),
  serverName: getEnv('SERVER_NAME', 'app'),

  // Lunaverse Server
  lunaverseHost: getEnv('LUNAVERSE_HOST', 'localhost'),
  lunaverseSshUser: getEnv('LUNAVERSE_SSH_USER', 'user'),
  lunaverseSshPort: getEnvNumber('LUNAVERSE_SSH_PORT', 22),
  lunaverseSshPassword: getEnv('LUNAVERSE_SSH_PASSWORD', ''),
  lunaverseSshTailscaleHost: getEnv('LUNAVERSE_SSH_TAILSCALE_HOST', ''),
  cockpitUrl: getEnv('COCKPIT_URL', ''),
  pgadminUrl: getEnv('PGADMIN_URL', ''),

  // PostgreSQL
  postgresHost: getEnv('POSTGRES_HOST', 'localhost'),
  postgresPort: getEnvNumber('POSTGRES_PORT', 5432),
  postgresDb: getEnv('POSTGRES_DB', 'app_db'),
  postgresUser: getEnv('POSTGRES_USER', 'postgres'),
  postgresPassword: getEnv('POSTGRES_PASSWORD', ''),
  postgresSuperuser: getEnv('POSTGRES_SUPERUSER', 'postgres'),
  postgresSuperuserPassword: getEnv('POSTGRES_SUPERUSER_PASSWORD', ''),
  postgresAltUser: getEnv('POSTGRES_ALT_USER', ''),
  postgresAltPassword: getEnv('POSTGRES_ALT_PASSWORD', ''),
  pgadminMasterPassword: getEnv('PGADMIN_MASTER_PASSWORD', ''),

  // App Users
  defaultAdminEmail: getEnv('DEFAULT_ADMIN_EMAIL', 'admin@example.com'),
  defaultAdminPassword: getEnv('DEFAULT_ADMIN_PASSWORD', ''),
  defaultAdminRole: getEnv('DEFAULT_ADMIN_ROLE', 'admin'),
  lunaverseAppUser: getEnv('LUNAVERSE_APP_USER', ''),
  lunaverseAppPassword: getEnv('LUNAVERSE_APP_PASSWORD', ''),

  // Third-party Services
  githubToken: getEnv('GITHUB_TOKEN', ''),
  hfToken: getEnv('HF_TOKEN', ''),
  hfSshKeyFingerprint: getEnv('HF_SSH_KEY_FINGERPRINT', ''),
  doPgHost: getEnv('DO_PG_HOST', ''),
  doPgPort: getEnvNumber('DO_PG_PORT', 25060),
  doPgUser: getEnv('DO_PG_USER', ''),
  doPgPassword: getEnv('DO_PG_PASSWORD', ''),
  doPgSslMode: getEnv('DO_PG_SSLMODE', 'require'),
  doApiToken: getEnv('DO_API_TOKEN', ''),
  taskadeToken: getEnv('TASKADE_TOKEN', ''),
  namesiloApiKey: getEnv('NAMESILO_API_KEY', ''),
  namesiloAccountUrl: getEnv('NAMESILO_ACCOUNT_URL', ''),
  namesiloSiteBuilderUrl: getEnv('NAMESILO_SITE_BUILDER_URL', ''),

  // JWT / Authentication
  jwtSecret: getEnv('JWT_SECRET', 'your-secret-key-change-in-production'),
  jwtExpiresIn: getEnv('JWT_EXPIRES_IN', '7d'),

  // API Configuration
  // On Vercel, use VERCEL_URL if available, otherwise use API_URL or default
  apiPort: getEnvNumber('API_PORT', 3001),
  apiUrl: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : getEnv('API_URL', 'http://localhost:3001'),
  frontendUrl: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : getEnv('FRONTEND_URL', 'http://localhost:5173'),

  // Vercel (auto-provided, don't set manually)
  vercelUrl: process.env.VERCEL_URL,
  vercelEnv: process.env.VERCEL_ENV,
};
