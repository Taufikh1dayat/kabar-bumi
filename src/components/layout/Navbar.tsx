"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  Menu,
  X,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavGroup {
  label: string;
  items: { href: string; label: string }[];
}

// Pengelompokan menu resmi yang relevan dengan konten KABAR BUMI
const MENU_GROUPS: { [key: string]: NavGroup } = {
  tentang: {
    label: "Tentang Kami",
    items: [
      { href: "/tentang", label: "Profil Organisasi" },
      { href: "/tentang#sejarah", label: "Sejarah & Gerakan" },
      { href: "/tentang#struktur", label: "Struktur Pengurus" },
    ],
  },
  informasi: {
    label: "Edukasi & Berita",
    items: [
      { href: "/edukasi", label: "Bahaya TPPO & Hak Buruh" },
      { href: "/berita", label: "Berita & Pernyataan Sikap" },
      { href: "/kegiatan", label: "Kegiatan Lapangan" },
    ],
  },
  layanan: {
    label: "Layanan Pengaduan",
    items: [
      { href: "/pengaduan", label: "Alur Pendampingan Kasus" },
      { href: "/pengaduan/tracking", label: "Lacak Status Laporan" },
    ],
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean }>({});
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const toggleMobileGroup = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identitas Resmi */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-kabar-navy flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-kabar-red fill-kabar-red/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-kabar-navy leading-none">
                KABAR BUMI
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wide mt-1">
                Keluarga Besar Buruh Migran Indonesia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Pola Dropdown Ringkas) */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "bg-slate-100 text-kabar-navy font-bold"
                  : "text-slate-700 hover:text-kabar-navy hover:bg-slate-50"
              }`}
            >
              Beranda
            </Link>

            {/* Dropdown Groups Berdasarkan Konten KABAR BUMI */}
            {Object.entries(MENU_GROUPS).map(([key, group]) => {
              const isOpenMenu = activeDropdown === key;
              const hasActiveChild = group.items.some(
                (item) => pathname === item.href
              );

              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => toggleDropdown(key)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      isOpenMenu || hasActiveChild
                        ? "bg-slate-100 text-kabar-navy font-bold shadow-sm"
                        : "text-slate-700 hover:text-kabar-navy hover:bg-slate-50"
                    }`}
                    aria-expanded={isOpenMenu}
                  >
                    <span>{group.label}</span>
                    {isOpenMenu ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>

                  {/* Dropdown Menu Card */}
                  {isOpenMenu && (
                    <div className="absolute left-0 pt-2 w-64 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                      <div className="rounded-2xl bg-white p-2 shadow-2xl border border-slate-100 ring-1 ring-black/5">
                        {group.items.map((item) => {
                          const isCurrent = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                isCurrent
                                  ? "bg-blue-50 text-kabar-navy font-bold"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-kabar-navy"
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/donasi"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/donasi"
                  ? "bg-slate-100 text-kabar-navy font-bold"
                  : "text-slate-700 hover:text-kabar-navy hover:bg-slate-50"
              }`}
            >
              Donasi
            </Link>

            <Link
              href="/kontak"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === "/kontak"
                  ? "bg-slate-100 text-kabar-navy font-bold"
                  : "text-slate-700 hover:text-kabar-navy hover:bg-slate-50"
              }`}
            >
              Kontak
            </Link>
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

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/pengaduan" className="sm:hidden">
              <Button
                variant="emergency"
                size="sm"
                className="font-bold text-xs px-2.5"
              >
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

      {/* Mobile Drawer (Accordion) */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-medium ${
                pathname === "/"
                  ? "bg-slate-100 text-kabar-navy font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Beranda
            </Link>

            {Object.entries(MENU_GROUPS).map(([key, group]) => {
              const isGroupExpanded = mobileExpanded[key];
              return (
                <div key={key} className="border-b border-slate-100 pb-1">
                  <button
                    onClick={() => toggleMobileGroup(key)}
                    className="flex items-center justify-between w-full px-3.5 py-2.5 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-xl"
                  >
                    <span>{group.label}</span>
                    {isGroupExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>

                  {isGroupExpanded && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-xl mb-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-kabar-navy font-medium rounded-lg"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href="/donasi"
              onClick={() => setIsOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-medium ${
                pathname === "/donasi"
                  ? "bg-slate-100 text-kabar-navy font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Donasi
            </Link>

            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-base font-medium ${
                pathname === "/kontak"
                  ? "bg-slate-100 text-kabar-navy font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Kontak
            </Link>

            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link href="/pengaduan" onClick={() => setIsOpen(false)}>
                <Button
                  variant="emergency"
                  size="lg"
                  className="w-full gap-2 font-bold"
                >
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
