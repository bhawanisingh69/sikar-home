import { Navbar } from "@/components/layout/navbar";
import { createClient } from "@/lib/supabase-server";

type PropertyDetailProps = {
  params: Promise<{ id: string }>;
};

export default async function PropertyDetail({ params }: PropertyDetailProps) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: property } = await supabase.from("properties").select("*").eq("id", id).single();
  const { data: images } = await supabase.from("property_images").select("*").eq("property_id", id);

  if (!property) return <div>Not found</div>;

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-5xl p-4">
        <h1 className="text-3xl font-bold">{property.title}</h1>
        <p>{property.description}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {images?.map((i) => (
            <img key={i.id} src={i.image_url} className="h-56 w-full rounded-xl object-cover" alt={property.title} />
          ))}
        </div>
        <a className="mt-4 inline-block rounded-xl bg-brand px-4 py-2" href={`https://wa.me/${property.whatsapp_number}`}>
          WhatsApp Inquiry
        </a>
      </section>
    </main>
  );
}
