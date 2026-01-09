# 🚀 Quick Add to Vercel RIGHT NOW

## ⚠️ Fix This First (You Already Have It, Just Fix the Value)

**JWT_EXPIRES_IN**
- Current value: `7` ❌
- Change to: `7d` ✅
- Click edit on this variable and change `7` to `7d`

---

## ✅ Add These 2 Variables Now

Click **"+ Add More"** and add these:

### 1. LOG_LEVEL
```
Key: LOG_LEVEL
Value: INFO
✅ Check: Production
✅ Check: Preview
```

### 2. API_PORT
```
Key: API_PORT
Value: 3001
✅ Check: Production
✅ Check: Preview
```

---

## 🎯 That's It! You Can Deploy Now

After adding those 2 variables and fixing `JWT_EXPIRES_IN`, click **"Deploy"**!

---

## 📝 After First Deploy (Come Back Here)

After your first successful deployment, add these 3 variables with your ACTUAL Vercel URL:

1. **API_URL** = `https://your-actual-vercel-url.vercel.app`
2. **FRONTEND_URL** = `https://your-actual-vercel-url.vercel.app`
3. **VITE_API_URL** = `https://your-actual-vercel-url.vercel.app/api`

Then redeploy.

---

## 📋 Complete List Available

See `VERCEL_ENV_VARIABLES_COMPLETE.md` for ALL possible variables (database, third-party services, etc.) if you need them later.
