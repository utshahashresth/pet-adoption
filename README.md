# CuddlePaws – Pet Adoption Website

A pet adoption website concept built with **Next.js 15**, **React 19** and **TypeScript**. Visitors browse dogs available for adoption and can reach out through a contact form.

> **Status:** work in progress. The landing page, navigation and contact form are in place; the adoption listing page is still a placeholder.

## Features

- Landing page with a featured set of adoptable dogs (name, age, gender, description, photo)
- Shared navigation bar and footer across pages
- Contact form (name, email, phone number) built with controlled React inputs
- Responsive layout with Tailwind CSS and shadcn/ui components

## Tech Stack

- Next.js 15 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS, shadcn/ui, Radix UI, lucide-react

## Getting Started

```bash
git clone https://github.com/utshahashresth/pet-adoption.git
cd pet-adoption
npm install
npm run dev
```

Open <http://localhost:3000>.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  page.tsx          # Landing page and featured dogs
  adoption/         # Adoption listing (placeholder)
  contact/          # Contact form
components/         # Navbar, Footer, Goal, Adopt, shadcn/ui primitives
public/Images/      # Pet photos
```

## Roadmap

- Build out the adoption listing with filters (age, gender)
- Store pets and enquiries in a database and submit the contact form to an API
- Form validation and success / error feedback
- Individual pet detail pages
