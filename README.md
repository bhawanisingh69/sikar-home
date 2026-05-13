# Rentify (Next.js + Supabase)

## Setup
1. Copy envs: `cp .env.example .env.local`
2. Install deps: `npm install`
3. Run DB schema in Supabase SQL editor using `sql/schema.sql`.
4. Create storage bucket: `property-media` (public).
5. Run app: `npm run dev`

## Features
- Supabase Auth admin login (`/login`)
- Protected `/admin` routes via middleware
- Dynamic home, properties, and details pages
- Admin create listing flow
- Realtime property updates via Supabase Realtime
- SEO metadata in app layout

## Folder structure
- `app/(public)`: Home + public listing pages
- `app/admin`: Protected admin dashboard and forms
- `components`: UI and domain components
- `lib`: Supabase clients and utilities
- `sql`: PostgreSQL schema and policies
