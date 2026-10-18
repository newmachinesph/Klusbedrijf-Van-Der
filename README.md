# Klusbedrijf Van Der Groef

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

Dutch-language one-page marketing site for a handyman and electrical company, focused on replacing meter cabinets (meterkast). It has sections for services, benefits and process, plus a contact form that sends requests by email. Contact details in this repository are placeholders.

## Stack

Next.js 16 (App Router), React 19, Tailwind CSS 4, Radix Slot / class-variance-authority, lucide-react, Nodemailer.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

### Environment variables

The contact form (`POST /api/contact/send`) needs SMTP settings in `.env.local`:

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_RECEIVER=
```

## Structure

```
src/app/            layout, page, global styles, contact API route
src/components/     Header, Hero, Diensten, Voordelen, Process, Contact, Footer, ui/
src/lib/            utilities
public/             images and icons
```

## License

[MIT](LICENSE) (c) 2026 New Machine
