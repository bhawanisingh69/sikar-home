create extension if not exists "pgcrypto";

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz default now()
);

create table if not exists admins (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  created_at timestamptz default now()
);

create table if not exists properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  price numeric not null,
  property_type text not null,
  city text not null,
  address text not null,
  amenities text[] default '{}',
  map_embed_url text,
  is_available boolean default true,
  contact_number text not null,
  whatsapp_number text not null,
  video_url text,
  category_id uuid references categories(id) on delete set null,
  created_by uuid references admins(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  image_url text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

alter publication supabase_realtime add table properties;

alter table properties enable row level security;
alter table property_images enable row level security;
create policy "public read properties" on properties for select using (true);
create policy "public read images" on property_images for select using (true);
