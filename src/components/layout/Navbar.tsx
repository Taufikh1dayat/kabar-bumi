"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/pengaduan", label: "Layanan Pengaduan" },
  { href: "/edukasi", label: "Edukasi & TPPO" },
  { href: "/berita", label: "Berita & Sikap" },
  { href: "/kegiatan", label: "Kegiatan" },
  { href: "/donasi", label: "Donasi" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-kabar-navy flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-kabar-red fill-kabar-red/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-kabar-navy leading-none">
                KABAR BUMI
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-1">
                Keluarga Besar Buruh Migran Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-kabar-navy bg-blue-50 font-bold"
                      : "text-slate-600 hover:text-kabar-navy hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/pengaduan">
              <Button
                variant="emergency"
                size="default"
                className="gap-2 font-bold shadow-md"
              >
                <AlertCircle className="w-4 h-4" />
                Laporkan Kasus
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/pengaduan" className="sm:hidden">
              <Button variant="emergency" size="sm" className="font-bold text-xs px-2.5">
                Lapor
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive
                      ? "bg-blue-50 text-kabar-navy font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-kabar-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              <Link href="/pengaduan" onClick={() => setIsOpen(false)}>
                <Button variant="emergency" size="lg" className="w-full gap-2 font-bold">
                  <AlertCircle className="w-5 h-5" />
                  Laporkan Kasus Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
