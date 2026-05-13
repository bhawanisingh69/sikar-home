"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import { Property } from "@/types/db";
import { PropertyCard } from "@/components/properties/property-card";

export function RealtimeProperties({ initial }: { initial: Property[] }) {
  const [properties, setProperties] = useState(initial);
  useEffect(() => {
    const supabase = createClient();
    const ch = supabase.channel("properties-feed").on("postgres_changes", { event: "*", schema: "public", table: "properties" }, async () => {
      const { data } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
      setProperties((data as Property[]) ?? []);
    }).subscribe();
    return () => { void supabase.removeChannel(ch); };
  }, []);
  return <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{properties.map((p) => <PropertyCard key={p.id} property={p} />)}</div>;
}
