# ECS — Excellence Code Solution

A complete corporate website built with **Next.js 14 (App Router)** and
**Bootstrap 5**, with a working backend, an admin dashboard and a blog.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # optional for local development
npm run dev
```

Open <http://localhost:3000>.

**No database or email account is needed to run it locally.** Contact-form
submissions are written to `data/contacts.json` until you configure MongoDB,
and emails are skipped until you configure SMTP.

> **In production you must set `MONGODB_URI`.** Serverless hosts such as
> Netlify and Vercel give each function a read-only filesystem, so the JSON
> fallback cannot save anything there.

---

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, stats, service cards, CTA |
| `/about` | Mission & vision, stats, 5-step process, why-us |
| `/services` | All services, process, CTA |
| `/services/[slug]` | Per-service detail — offerings, use cases, tech stack, FAQs |
| `/portfolio` | Filterable project grid with live demo & source links |
| `/trainings` | Three bootcamps with syllabus, pricing and enrolment status |
| `/blog` | Filterable article listing with a featured lead post |
| `/blog/[slug]` | Article with structured content blocks and JSON-LD |
| `/team` | Leadership card plus the team grid |
| `/contact` | Validated form, contact details, map |
| `/privacy-policy` | Privacy policy with sticky contents |
| `/terms` | Terms of service |
| `/admin` | **Password-protected** enquiry dashboard |
| `/llms.txt` | Company summary for AI assistants, generated from site data |

Plus a styled `404`, `sitemap.xml` and `robots.txt`.

The **AI & Machine Learning** service page is the most detailed one — it has
its own offerings, process, FAQ and technology sections, and is featured in
the Services dropdown in the navbar.

---

## Admin dashboard

Visit `/admin`. Sign in with `ADMIN_PASSWORD`, and you get every contact
enquiry from the database:

- Counters for total / new / replied / archived
- Filter by status and search across name, email, subject and message
- Expand a row for the full message, phone, timestamp and IP
- One-click **Reply** (opens your mail client), status changes and delete
- **Export CSV** of whatever is currently filtered

It is excluded from `robots.txt` and carries `noindex`.

### Setting it up

```bash
ADMIN_PASSWORD=choose-a-strong-password
ADMIN_SESSION_SECRET=$(openssl rand -hex 32)
```

The session is a signed, HTTP-only cookie that expires after 8 hours. Login
attempts are rate-limited to 8 per IP per 15 minutes.

---

## API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/contact` | Submit the contact form |
| `GET` | `/api/contact` | List enquiries — needs `Authorization: Bearer <ADMIN_API_TOKEN>` |
| `PATCH` | `/api/admin/contacts/:id` | Change an enquiry's status (admin cookie) |
| `DELETE` | `/api/admin/contacts/:id` | Delete an enquiry (admin cookie) |
| `POST` | `/api/admin/login` | Exchange the password for a session cookie |
| `POST` | `/api/admin/logout` | Clear the session |
| `GET` | `/api/services` | All services, or one with `?slug=` |
| `GET` | `/api/projects` | All projects; `?category=`, `?slug=`, `?limit=` |
| `GET` | `/api/stats` | Company counters and process steps |
| `GET` | `/llms.txt` | Plain-text company summary for LLMs |

### `POST /api/contact`

What it does, in order:

1. **Rate limit** — 5 submissions per IP per 10 minutes (`429` beyond that)
2. **Honeypot** — a hidden `company` field; if filled, silently accepted and dropped
3. **Validation** — server-side, independent of the browser (`422` with per-field errors)
4. **Store** — MongoDB when `MONGODB_URI` is set, otherwise `data/contacts.json`
5. **Email** — notification to you plus an auto-reply to the sender

A mail failure never loses the enquiry.

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Ali","email":"ali@example.com","subject":"Web Development","message":"Need a website for my shop."}'
```

---

## Making it yours

Everything editable lives in `src/data/`. No component changes needed.

| Change | File |
| --- | --- |
| Company name, email, phone, address, socials | `src/data/site.js` |
| Navbar and footer links, dropdown items | `src/data/site.js` |
| Services, their detail pages and FAQs | `src/data/services.js` |
| Portfolio projects **and their demo links** | `src/data/projects.js` |
| Blog posts | `src/data/blog.js` |
| Team members **and their photos** | `src/data/team.js` |
| Bootcamps, syllabus and pricing | `src/data/trainings.js` |
| Stats counters and process steps | `src/data/stats.js` |
| **Colours, spacing, shadows** | `src/app/globals.css` (`:root`) |
| Logo artwork | `public/logo.png`, `public/logo-mark.png` |
| Favicon / app icon | `src/app/icon.png`, `src/app/apple-icon.png` |

### Project demo links

In `src/data/projects.js`, each project takes two optional URLs:

```js
demo:   "https://your-project.vercel.app",   // shows a "Live Demo" button
source: "https://github.com/you/repo",       // shows a "Source" button
```

Leave either as `null` and that button is not rendered.

### Team photos

In `src/data/team.js`, each member takes a `photo`:

```js
photo: "data:image/jpeg;base64,/9j/4AAQ..."   // base64, no extra file
photo: "/team/ceo.jpg"                        // or a file in /public/team/
photo: null                                   // draws a lettered avatar
```

### Adding a blog post

Copy an entry in `src/data/blog.js`, give it a unique `slug`, and write the
body as blocks:

```js
{ type: "p",     text: "A paragraph." }
{ type: "h2",    text: "A heading" }
{ type: "list",  items: ["one", "two"] }
{ type: "quote", text: "A pull quote", cite: "Someone" }
{ type: "code",  lang: "js", text: "const x = 1;" }
```

### Colours

The whole palette is CSS variables at the top of `globals.css` — change
`--ecs-primary` and the gradient, and the entire site follows:

```css
--ecs-primary: #8159af;   /* sampled from the logo */
--ecs-gradient: linear-gradient(135deg, #74489f 0%, #8a63b4 100%);
```

Icons are [Bootstrap Icons](https://icons.getbootstrap.com) — swap any `bi-*`
class in the data files.

---

## Configuration

Everything lives in `.env.local` (see `.env.example`).

```bash
NEXT_PUBLIC_SITE_URL=https://yoursite.com

# Database — required in production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net
MONGODB_DB=ecs

# Admin dashboard
ADMIN_PASSWORD=your-admin-password
ADMIN_SESSION_SECRET=generate-with-openssl-rand-hex-32
ADMIN_API_TOKEN=optional-token-for-the-contact-api

# Email — optional; enquiries are still saved without it
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=you@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=you@gmail.com
MAIL_TO=hello@excellencecodesolution.com
```

> **Gmail:** use an [App Password](https://support.google.com/accounts/answer/185833),
> not your normal password.

---

## Project structure

```
src/
├── app/
│   ├── layout.js              root layout — fonts, chrome
│   ├── globals.css            design tokens + all component styles
│   ├── page.js                home
│   ├── about|services|portfolio|contact|team|trainings|blog/
│   ├── services/[slug]/       per-service detail pages
│   ├── blog/[slug]/           article pages
│   ├── privacy-policy|terms/  legal pages
│   ├── admin/                 password-protected dashboard
│   ├── llms.txt/route.js      plain-text company summary
│   ├── not-found.js           404
│   ├── sitemap.js robots.js   SEO
│   └── api/
│       ├── contact/           POST + protected GET
│       ├── admin/             login, logout, per-enquiry actions
│       └── services|projects|stats/
├── components/
│   ├── Navbar.js              dropdowns, mobile drawer
│   ├── Footer.js              link columns, legal, llms.txt
│   ├── admin/                 login + dashboard
│   └── …                      cards, grids, form, SVG artwork
├── data/                      ← edit these
├── lib/                       mongodb, store, contacts, mailer, auth, rateLimit, validate
└── models/Contact.js          mongoose schema
```

---

## Deploy

### Netlify

`netlify.toml` is included and sets the build command, publish directory and
the Next.js runtime plugin. Push to GitHub, connect the repo, then add your
environment variables under **Site configuration → Environment variables**
and trigger a redeploy.

Make sure **Base directory** is empty if `package.json` sits at the repo root.

### Vercel

```bash
npm i -g vercel
vercel
```

Add the environment variables in the dashboard.

### Any Node host

```bash
npm run build
npm start        # serves on port 3000
```

> The in-memory rate limiter counts per Node process. On serverless, swap the
> `Map` in `src/lib/rateLimit.js` for Redis/Upstash — the signature stays the
> same.

---

## Tech

Next.js 14 · React 18 · Bootstrap 5.3 · Bootstrap Icons · Mongoose · Nodemailer
