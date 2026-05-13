import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

async function createProperty(formData: FormData) {
  "use server";
  const supabase = await createClient();
  await supabase.from("properties").insert({
    title: formData.get("title"), description: formData.get("description"), price: Number(formData.get("price")), city: formData.get("city"),
    address: formData.get("address"), property_type: formData.get("property_type"), amenities: String(formData.get("amenities") || "").split(",").map(s => s.trim()),
    map_embed_url: formData.get("map_embed_url"), contact_number: formData.get("contact_number"), whatsapp_number: formData.get("whatsapp_number"), is_available: formData.get("is_available") === "on"
  });
  redirect("/admin");
}

export default function NewPropertyPage() {
  return <main className="mx-auto max-w-2xl p-4"><form action={createProperty} className="card grid gap-2 p-4">{["title","description","price","city","address","property_type","amenities","map_embed_url","contact_number","whatsapp_number"].map((f)=><input key={f} name={f} placeholder={f} className="rounded bg-white/10 p-2" />)}<label><input type="checkbox" name="is_available" defaultChecked /> Available</label><button className="rounded bg-brand p-2">Create Property</button></form></main>;
}
