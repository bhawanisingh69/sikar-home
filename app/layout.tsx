import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Rentify", description: "Find PG, Hostel, student rooms and rentals" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
