# ECS — Excellence Code Solution

A complete 5-page corporate website built with **Next.js 14 (App Router)** and
**Bootstrap 5**, with a working backend for contact enquiries.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # optional — the site runs without it
npm run dev
```

Open <http://localhost:3000>.

**No database or email account is needed to run it.** Contact-form
submissions are written to `data/contacts.json` until you configure MongoDB,
and emails are skipped until you configure SMTP.

---

## Pages

| Route        | What's on it                                                              |
| ------------ | ------------------------------------------------------------------------- |
| `/`          | Hero, stats bar, 8 service cards, CTA banner                               |
| `/about`     | Intro, mission & vision, stats, 5-step process, why-us cards               |
| `/services`  | All 8 services with details and "Learn More" links, process, CTA           |
| `/portfolio` | Filterable project grid (8 case studies, 6 categories), CTA                |
| `/contact`   | Validated contact form, contact details, embedded map, CTA                 |

Plus a styled `404` page, `sitemap.xml` and `robots.txt`.

---

## API

| Method | Endpoint        | Purpose                                                    |
| ------ | --------------- | ---------------------------------------------------------- |
| `POST` | `/api/contact`  | Submit the contact form                                    |
| `GET`  | `/api/contact`  | List enquiries — **requires** `Authorization: Bearer <token>` |
| `GET`  | `/api/services` | All services, or one with `?slug=web-development`          |
| `GET`  | `/api/projects` | All projects; `?category=`, `?slug=`, `?limit=` supported   |
| `GET`  | `/api/stats`    | Company counters, process steps and contact details        |

### `POST /api/contact`

```json
{
  "name": "Ali Raza",
  "email": "ali@example.com",
  "phone": "+92 300 1234567",
  "subject": "Web Development",
  "message": "I need an e-commerce site for my store."
}
```

What it does, in order:

1. **Rate limit** — 5 submissions per IP per 10 minutes (`429` beyond that).
2. **Honeypot** — a hidden `company` field; if it's filled, the request is
   silently accepted and dropped.
3. **Validation** — server-side, independent of the browser (`422` with a
   per-field `errors` object).
4. **Store** — MongoDB when `MONGODB_URI` is set, otherwise
   `data/contacts.json`.
5. **Email** — a notification to your inbox plus an auto-reply to the sender.
   A mail failure never loses the enquiry.

Try it:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Ali","email":"ali@example.com","subject":"Web Development","message":"Need a website for my shop."}'
```

Read them back:

```bash
curl http://localhost:3000/api/contact -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

---

## Configuration

Everything lives in `.env.local` (see `.env.example`) and every key is optional.

```bash
# Database — leave empty to use the JSON file store
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net
MONGODB_DB=ecs

# Email — leave empty to skip sending
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=you@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=you@gmail.com
MAIL_TO=hello@excellencecodesolution.com

# Admin token for GET /api/contact
ADMIN_API_TOKEN=generate-with-openssl-rand-hex-32
```

> **Gmail:** use an [App Password](https://support.google.com/accounts/answer/185833),
> not your normal password.

---

## Making it yours

| Change                       | File                                            |
| ---------------------------- | ----------------------------------------------- |
| Company name, email, phone, address, socials | `src/data/site.js`              |
| Services (titles, icons, copy)               | `src/data/services.js`          |
| Portfolio projects and categories            | `src/data/projects.js`          |
| Stats counters and process steps             | `src/data/stats.js`             |
| **Colours, spacing, shadows**                | `src/app/globals.css` (`:root`) |
| Logo artwork                                 | `public/logo.png` (lockup), `public/logo-mark.png` (mark only) |
| Favicon / app icon                           | `src/app/icon.png`, `src/app/apple-icon.png` |

The whole palette is CSS variables at the top of `globals.css` — change
`--ecs-primary` and the gradient and the entire site follows:

```css
--ecs-primary: #6d28d9;
--ecs-gradient: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
```

Icons are [Bootstrap Icons](https://icons.getbootstrap.com) — swap any
`bi-*` class in the data files for another one.

---

## Project structure

```
src/
├── app/
│   ├── layout.js            root layout — fonts, navbar, footer
│   ├── globals.css          design tokens + all component styles
│   ├── page.js              home
│   ├── about|services|portfolio|contact/page.js
│   ├── not-found.js         404
│   ├── sitemap.js robots.js SEO
│   └── api/
│       ├── contact/route.js  POST + protected GET
│       ├── services/route.js
│       ├── projects/route.js
│       └── stats/route.js
├── components/              Navbar, Footer, Logo, cards, form, SVG artwork
├── data/                    site, services, projects, stats  ← edit these
├── lib/                     mongodb, store, mailer, rateLimit, validate
└── models/Contact.js        mongoose schema
```

---

## Deploy

**Vercel** (easiest):

```bash
npm i -g vercel
vercel
```

Then add your environment variables in the Vercel dashboard under
Settings → Environment Variables.

**Any Node host:**

```bash
npm run build
npm start        # serves on port 3000
```

> The in-memory rate limiter counts per Node process. On serverless, swap the
> `Map` in `src/lib/rateLimit.js` for Redis/Upstash — the function signature
> stays the same.

---

## Tech

Next.js 14 · React 18 · Bootstrap 5.3 · Bootstrap Icons · Mongoose · Nodemailer
