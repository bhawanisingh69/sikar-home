import Link from "next/link";
import { Property } from "@/types/db";

export function PropertyCard({ property }: { property: Property }) {
  return <Link href={`/properties/${property.id}`} className="card block p-4 transition hover:-translate-y-1 hover:border-brand"><p className="text-sm text-brand">{property.property_type} • {property.city}</p><h3 className="text-xl font-semibold">{property.title}</h3><p className="line-clamp-2 text-white/70">{property.description}</p><p className="mt-2 text-lg font-bold">₹{property.price.toLocaleString("en-IN")}</p><p className={property.is_available ? "text-emerald-400" : "text-red-400"}>{property.is_available ? "Available" : "Unavailable"}</p></Link>;
}
