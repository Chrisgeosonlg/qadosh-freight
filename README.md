# Qadosh Freight Solutions — Corporate Website

A modern, responsive, multipage website for **Qadosh Freight Solutions Limited**, a
freight forwarding and customs clearing company based in Dar es Salaam, Tanzania.

Built with **React + Vite** and plain CSS (no UI framework). Fonts are **Inter**
(headings, stats, CTAs) and **Open Sans** (body, UI). The brand palette — logistics
blue `#0566A2`, corporate red `#B3140B`, white and light neutrals — is drawn from
the company profile, along with its signature angled/triangular image treatment.

---

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/customs-clearing` | Customs Clearing Services |
| `/services/transportation` | Transportation Services |
| `/services/freight-forwarding` | Freight Forwarding |
| `/services/air-freight` | Air Freight |
| `/services/warehousing` | Warehousing |
| `/contact` | Contact Us (with quotation form) |
| `*` | 404 Not Found |

---

## 1. Run the website locally

**Requirements:** Node.js 18+ and npm.

### One-click preview on Windows

Double-click **`OPEN WEBSITE.vbs`** in the project folder. It starts the development server in a minimized window and opens the website in your default browser automatically. You can also use **`Preview Website.bat`** if you want to see the server messages.

```bash
npm install     # install dependencies (first time only)
npm run dev     # start the dev server
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build     # outputs a static site to ./dist
npm run preview   # locally preview the production build
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare
Pages, GitHub Pages, or your own server).

**Single-page-app routing:** because the site uses clean URLs, configure your host
to serve `index.html` for unknown paths:

- **Netlify** — handled by `public/_redirects` (already included).
- **Vercel** — handled by `vercel.json` (already included).
- **Apache** — add a `.htaccess` rewrite to `index.html`.
- **Nginx** — `try_files $uri /index.html;`

---

## 3. Where to replace images

All photography URLs live in **`src/data/images.js`**. They currently point to
royalty-free logistics photos on the Unsplash CDN.

To use the company's own licensed photos:

1. Drop image files into **`public/images/`** (e.g. `hero.jpg`).
2. In `src/data/images.js`, replace the relevant URL with the local path, e.g.
   `heroHome: '/images/hero.jpg'`.

Every photo sits on a branded blue gradient, so if an image is ever missing the
layout still looks intentional rather than broken.

**Logo:** the header/footer use `public/images/logo-mark.png` (the globe mark,
extracted from the profile) with a typeset wordmark. `public/images/logo-full.png`
is the complete logo. Replace either file with the official brand asset — keep the
same filename and it will appear everywhere automatically.

---

## 4. Connect the quotation form

The contact/quote form is in **`src/components/ContactForm.jsx`**. Out of the box it
validates input and then hands the details to the visitor's email app via a
`mailto:` link — it never pretends to send a message it hasn't actually sent.

To enable real submissions, set the `FORM_ENDPOINT` constant near the top of that
file:

**Option A — Formspree (no backend needed):**

1. Create a form at [formspree.io](https://formspree.io) and copy its endpoint.
2. Set `const FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxx'`.

The existing `fetch` POST will then deliver submissions and show the success state.

**Option B — EmailJS:** install `@emailjs/browser`, then replace the `fetch` block
in `handleSubmit` with an `emailjs.send(...)` call using your service/template IDs.

**Option C — your own API:** point `FORM_ENDPOINT` at any URL that accepts a JSON
`POST` with the form fields.

---

## 5. Update company contact details

All company information — phone numbers, emails, address, coverage countries, core
values, mission/vision, client figures — lives in **`src/data/site.js`**. Edit it
once and every page updates. Service copy lives in **`src/data/services.js`**.

Current details in place:

- **Phone:** +255 22 2127326 · +255 766 775 255 · +255 717 039 133
- **Email:** info@qadoshfreight.co.tz · pmasatu1974@gmail.com
- **Address:** Twiga House, Room No. 303, Plot No. 230/59, Block 291/59,
  Samora Avenue, Dar es Salaam, Tanzania
- **Website:** www.qadoshfreight.co.tz

Phone numbers use `tel:` links and emails use `mailto:` links, so they are tappable
on mobile.

The footer copyright year updates automatically.

---

## Project structure

```
qadosh-freight/
├─ public/
│  ├─ images/            # logo-mark.png, logo-full.png (+ your photos)
│  ├─ _redirects        # Netlify SPA fallback
│  ├─ robots.txt
│  └─ sitemap.xml
├─ src/
│  ├─ components/        # Header, Footer, Brand, ServiceCard, PageHero,
│  │                     # QuoteCTA, ContactForm, Media, Reveal, Counter,
│  │                     # Icon, Seo, ScrollToTop
│  ├─ data/             # site.js, services.js, images.js  ← edit content here
│  ├─ pages/            # Home, About, Services, ServiceDetail, Contact, NotFound
│  ├─ styles/index.css  # design system (tokens, layout, components)
│  ├─ App.jsx           # routes + layout
│  └─ main.jsx          # entry point
├─ index.html
├─ vite.config.js
├─ vercel.json
└─ package.json
```

---

## Notes on content & accuracy

- All copy is rewritten from the company profile for clarity and correct grammar
  (e.g. "Fright" → "Freight", "custonms boarders" → "customs borders") while
  preserving the original meaning.
- Only figures supported by the profile are shown (80 one-time customers,
  20 premium customers). No testimonials, certifications, awards, partnerships,
  staff profiles, extra office branches or shipment volumes have been invented.
- Regional coverage (Tanzania, Uganda, DR Congo, Zambia, Malawi, Rwanda, Burundi)
  is presented as **service coverage** — the only physical office is in Dar es Salaam.
- Social media links in the footer are placeholders (`#`); replace them in
  `src/data/site.js` once official profiles are confirmed.

---

## Accessibility & SEO

- Semantic HTML, keyboard-navigable menus, visible focus states, a skip-to-content
  link, and `prefers-reduced-motion` support.
- Unique `<title>`, meta description, canonical URL and Open Graph tags per page
  (via `react-helmet-async`), plus `robots.txt` and `sitemap.xml`.
- Descriptive `alt` text on imagery and lazy-loaded images.
```
