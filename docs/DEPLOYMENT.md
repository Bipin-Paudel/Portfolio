# Portfolio Deployment Guide

This guide covers deploying the Next.js portfolio to Vercel and configuring domains.

## Prerequisites
- A GitHub account.
- A Vercel account (free).
- A purchased domain (e.g., `bipinpaudel.com`).

---

## 1. Local Setup
Ensure everything is working locally and pushed to GitHub:
```bash
npm run build
npm start
git add .
git commit -m "feat: portfolio ready for deployment"
git push origin main
```

---

## 2. Deploy to Vercel (Main App)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** > **Project**.
3. Import your GitHub repository (`My-portfolio`).
4. Keep all default configurations (Framework Preset: Next.js).
5. Add any Environment Variables (if implementing Real Email Contact Form APIs).
6. Click **Deploy**.

---

## 3. Custom Domain Setup
1. In the Vercel dashboard, go to your project.
2. Navigate to **Settings** > **Domains**.
3. Enter your domain: `bipinpaudel.com` and click **Add**.
4. Vercel will provide DNS records (A and CNAME).

### Configure DNS in your Registrar (e.g., Namecheap, GoDaddy, Cloudflare)
1. Log into your domain registrar.
2. Go to DNS Management.
3. Add an **A Record**:
   - Host: `@`
   - Value: `76.76.21.21`
4. Add a **CNAME Record**:
   - Host: `www`
   - Value: `cname.vercel-dns.com`
5. Save changes. SSL will automatically generate via Vercel.

---

## 4. Subdomains Support (e.g., `projects.bipinpaudel.com`)
Vercel allows multiple domains/subdomains per project.

### Approach 1: Routing via Hostname (Advanced Next.js Middleware)
You can use Next.js middleware to rewrite requests based on the host. If a user visits `projects.bipinpaudel.com`, wrap `/projects` content dynamically.

### Approach 2: Separate App (Simpler)
1. Create a new Next.js app specifically for projects.
2. Deploy it as a **NEW Project** in Vercel.
3. Go to Settings > Domains of the *new* project.
4. Add: `projects.bipinpaudel.com`
5. Go to your domain DNS registrar and add a new CNAME:
   - Host: `projects`
   - Value: `cname.vercel-dns.com`

*Repeat Approach 2 for `blog.bipinpaudel.com` if you separate the micro-apps.*

---

## 5. SEO Best Practices
This project already sets up:
1. Meta tags in `layout.tsx`.
2. OpenGraph configurations.
3. Accessible UI with semantic HTML.
4. Fast load times thanks to Next.js App Router and static rendering.
