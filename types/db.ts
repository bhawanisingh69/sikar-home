export type Property = {
  id: string; title: string; description: string; price: number; city: string; address: string;
  property_type: string; amenities: string[]; map_embed_url: string | null; contact_number: string;
  whatsapp_number: string; is_available: boolean; category_id: string; created_at: string;
};
export type Category = { id: string; name: string; slug: string };
