import { Navbar } from "@/components/layout/navbar";
import { createClient } from "@/lib/supabase-server";
import { PropertyCard } from "@/components/properties/property-card";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: featured } = await supabase.from("properties").select("*").eq("is_available", true).order("created_at", { ascending: false }).limit(6);
  return <main><Navbar /><section className="mx-auto max-w-6xl p-4 md:p-8"><div className="card p-8"><h1 className="text-4xl font-bold">Find Your Perfect Student Stay</h1><p className="mt-2 text-white/80">PGs, hostels, 1BHK, 2BHK, libraries, gyms, and emergency stays.</p></div><h2 className="mt-8 text-2xl font-semibold">Featured Properties</h2><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{featured?.map((p) => <PropertyCard key={p.id} property={p} />)}</div></section></main>;
}
