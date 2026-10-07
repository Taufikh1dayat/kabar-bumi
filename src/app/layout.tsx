import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { FloatingEmergencyButton } from "@/components/layout/FloatingEmergencyButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "KABAR BUMI | Keluarga Besar Buruh Migran Indonesia",
  description:
    "Organisasi buruh migran yang memperjuangkan perlindungan, hak, dan kesejahteraan pekerja migran Indonesia dan keluarganya. Akhiri Migrasi Paksa! Ciptakan Lapangan Kerja Layak di Indonesia.",
  keywords: [
    "KABAR BUMI",
    "buruh migran indonesia",
    "pekerja migran",
    "perlindungan buruh migran",
    "advokasi kasus buruh migran",
    "tppo",
    "bantuan hukum tki",
  ],
  authors: [{ name: "KABAR BUMI" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-kabar-navy selection:text-white">
        <EmergencyBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingEmergencyButton />
      </body>
    </html>
  );
}
