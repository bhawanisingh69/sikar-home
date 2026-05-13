import Link from "next/link";
import { createClient } from "@/lib/supabase-server";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const [{ count }, { data: latest }] = await Promise.all([
    supabase.from("properties").select("*", { count: "exact", head: true }),
    supabase.from("properties").select("id,title,created_at").order("created_at", { ascending: false }).limit(5)
  ]);
  return <main className="mx-auto max-w-6xl p-4"><h1 className="text-3xl font-bold">Admin Dashboard</h1><div className="mt-4 grid gap-4 sm:grid-cols-3"><div className="card p-4"><p>Total Listings</p><p className="text-3xl">{count ?? 0}</p></div><Link href="/admin/properties/new" className="card p-4">Add Property</Link></div><div className="card mt-4 p-4"><h2>Latest Uploads</h2>{latest?.map((l)=><p key={l.id}>{l.title}</p>)}</div></main>;
}
