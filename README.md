# Freshsmile Dental Hub — website

Next.js 14 (App Router) · Tailwind CSS · Framer Motion · React Three Fiber (3D tooth hero)

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in production (SEO, sitemap).

## Edit content
Everything — business info, services, blog posts, reviews, FAQs, packages, gallery, "doctor" — lives in `lib/data.ts`.

## Add your clinic photos
Drop images in `public/images/` and edit the `gallery` array (and `doctor.image`) in `lib/data.ts`.
Categories: Clinic Interior · Patient Smiles · Procedures.

## Booking
Every Book button uses `wa()` in `lib/data.ts` → `https://wa.me/2349136562143?text=…`.

## Routes
/ · /services · /services/[slug] · /about · /contact · /gallery · /blog · /blog/[slug] · /appointment · /privacy
