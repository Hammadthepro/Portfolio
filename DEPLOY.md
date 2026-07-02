# Deployment Guide

## Quick start

```bash
npm install
npm run dev       # http://localhost:8080
npm run build     # production build
```

## Deploying via Lovable (recommended)

Click **Publish** in the Lovable editor. Lovable's hosting runs this project's TanStack Start build directly, handles SSR + static assets, and gives you an instant `*.lovable.app` URL. Custom domains available from Project Settings.

## Deploying to Cloudflare Pages

TanStack Start is the framework used here (Vite + React + TypeScript with file-based routing). The build outputs to `dist/`.

Cloudflare Pages settings:

- **Framework preset:** `Vite`
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** `20` (set env var `NODE_VERSION=20`)

> This project uses TanStack Start server routes (e.g. `/sitemap.xml`). If you need pure static output for Cloudflare Pages without a Worker, remove the `src/routes/sitemap[.]xml.ts` server route or migrate it to a build-time generator. For most deploys, publishing via Lovable or Cloudflare Workers (which TanStack Start targets by default) is the smoother path.

## Contact form

The contact form posts JSON to a form endpoint you own. Set an env var:

```
VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
```

### Web3Forms (recommended, free)

1. Get a free Access Key at https://web3forms.com
2. Set `VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit`
3. Add your access key to the JSON payload by editing `src/routes/contact.tsx` — inside `onSubmit`, add `access_key: "YOUR_KEY"` to the body, or (better) put the key in `VITE_WEB3FORMS_KEY` and reference it.

### Formspree

1. Create a form at https://formspree.io — copy the endpoint (e.g. `https://formspree.io/f/xxxx`)
2. Set `VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/xxxx`
3. No code change needed — the form already POSTs JSON with the correct headers.

### Local development

If `VITE_CONTACT_FORM_ENDPOINT` is not set, the form simulates success so you can test the flow locally.

## Environment variables

| Name | Purpose |
| ---- | ------- |
| `VITE_CONTACT_FORM_ENDPOINT` | URL that receives the contact form POST (Web3Forms / Formspree). |

## Adding a new project

Edit `src/data/projects.ts` — add a new object to the `projects` array. The card, filters, case-study page, and sitemap update automatically.

## Adding a new category

Edit `src/data/categories.ts` — add a new entry to the `categories` array and add its id to the `ProjectCategory` union at the top of the file. A new filter tab and badge style appear automatically.

## Adding a new service

Edit `src/data/services.ts` — add an object to the `services` array.
