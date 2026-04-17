# Foundry AI — Landing Page

Next.js landing page for foundryai.com

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel (first time — takes 5 minutes)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/foundryai.git
git push -u origin main
```

### Step 2 — Connect Vercel
1. Go to https://vercel.com
2. Click "Sign up" → "Continue with GitHub"
3. Click "Add New Project"
4. Select your "foundryai" repository
5. Click "Deploy" — Vercel auto-detects Next.js, zero config needed
6. Done. Your site is live at a vercel.app URL in ~60 seconds.

### Step 3 — Connect your custom domain (foundryai.com)
1. In Vercel dashboard → your project → "Settings" → "Domains"
2. Type: foundryai.com → Add
3. Vercel shows you two DNS records to add
4. Go to Spaceship.com → your domain → DNS settings
5. Add the records Vercel shows you (takes 5–30 min to propagate)
6. Done — foundryai.com is live with HTTPS automatically

---

## Email collection

Emails are saved to `emails.json` in your project root on Vercel.
To read them: Vercel dashboard → your project → "Logs" → or use Vercel CLI:

```bash
npm i -g vercel
vercel env pull
```

For a future upgrade, swap the API route for Resend or Mailchimp (both free tiers available).

---

## Brand colors

| Name        | Hex       | Use                  |
|-------------|-----------|----------------------|
| Forge Black | #0D0D0D   | Background           |
| Carbon      | #161612   | Cards, nav           |
| Ember       | #E8622A   | Accent, CTA, logo    |
| Ash White   | #F5F5F3   | Headings, text       |
| Muted       | #555551   | Body text            |
