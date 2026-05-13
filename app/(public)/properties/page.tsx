import { Navbar } from "@/components/layout/navbar";
import { createClient } from "@/lib/supabase-server";
import { RealtimeProperties } from "@/components/properties/realtime-properties";

export default async function PropertiesPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
  return <main><Navbar /><section className="mx-auto max-w-6xl p-4"><h1 className="text-3xl font-bold">All Properties</h1><RealtimeProperties initial={(data as any) ?? []} /></section></main>;
}
