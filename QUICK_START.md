# 🚀 Quick Start - Test Deployment

## What You Need to Do Right Now

### 1. Update JWT_SECRET in Vercel

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Find `JWT_SECRET` and update it to:
```
EwN6bM/3BtX8rUO/xYAf3WzF9/EsGLTjThoHiyBlBNU=
```

### 2. Deploy

Click **"Deploy"** button in Vercel.

### 3. After Deploy Succeeds

Add these 3 variables with your actual Vercel URL:
- `API_URL` = `https://your-actual-url.vercel.app`
- `FRONTEND_URL` = `https://your-actual-url.vercel.app`
- `VITE_API_URL` = `https://your-actual-url.vercel.app/api`

Then redeploy.

## That's It! 🎉

Your app should be live. Test it:
- Frontend: `https://your-url.vercel.app`
- API Health: `https://your-url.vercel.app/api/health`

## Need More Details?

See `TEST_DEPLOYMENT_COMPLETE.md` for full guide.
