"use client";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState("");
  const router = useRouter();
  async function onSubmit(e: FormEvent) { e.preventDefault(); const supabase = createClient(); const { error } = await supabase.auth.signInWithPassword({ email, password }); if (error) return setError(error.message); router.push("/admin"); }
  return <main className="mx-auto max-w-md p-6"><form onSubmit={onSubmit} className="card space-y-3 p-6"><h1 className="text-2xl font-semibold">Admin Login</h1><input className="w-full rounded bg-white/10 p-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" /><input type="password" className="w-full rounded bg-white/10 p-2" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />{error && <p className="text-red-400">{error}</p>}<button className="w-full rounded bg-brand p-2">Login</button></form></main>;
}
