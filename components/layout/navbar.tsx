import Link from "next/link";
export function Navbar() {
  return <nav className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between p-4"><Link href="/" className="text-2xl font-bold text-brand">Rentify</Link><div className="flex gap-4"><Link href="/properties">Properties</Link><Link href="/login">Admin</Link></div></div></nav>;
}
