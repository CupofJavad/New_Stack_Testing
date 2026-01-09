# React + Node.js + TypeScript Full-Stack Application

A production-ready full-stack application built with React (frontend), Node.js + TypeScript (backend), configured for Vercel deployment.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Deployment**: Vercel
- **Database**: PostgreSQL (configurable)

## Project Structure

```
/
├── frontend/          # React + TypeScript frontend
├── backend/           # Node.js + TypeScript backend
├── .env.example       # Environment variable template
└── vercel.json        # Vercel deployment configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL (if using local database)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```

3. Set up environment variables:
   ```bash
   npm run setup:env
   ```
   This creates `.env.example`. Then:
   - Copy `.env.example` to `.env.local`: `cp .env.example .env.local`
   - Replace all `YOUR_*` placeholders with your actual values
   
   See [SETUP.md](./SETUP.md) for detailed environment variable setup instructions.

4. Start development servers:
   ```bash
   npm run dev
   ```

   This will start:
   - Backend API server on `http://localhost:3001`
   - Frontend development server on `http://localhost:5173`

### Individual Workspace Commands

**Backend:**
```bash
cd backend
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

**Frontend:**
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Environment Variables

All environment variables are defined in `.env.example`. Copy this file to `.env.local` and replace the placeholders with your actual values.

Key variables:
- Database configuration (PostgreSQL)
- Authentication secrets (JWT)
- Third-party API keys (GitHub, Hugging Face, etc.)
- Server configuration

## Deployment

### Vercel

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy - Vercel will automatically detect and build the project

The `vercel.json` file is configured to:
- Build both frontend and backend
- Route API requests to backend serverless functions
- Serve frontend static files

## Development

- Backend API runs on port `3001`
- Frontend runs on port `5173` (Vite default)
- Hot reload is enabled for both frontend and backend
- TypeScript type checking is enabled

## License

MIT
