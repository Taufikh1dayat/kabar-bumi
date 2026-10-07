"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, AlertCircle, X, MessageCircle } from "lucide-react";

export function FloatingEmergencyButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside
      aria-label="Aksi Darurat & Pengaduan Cepat"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 mb-2 w-72 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
            <span className="font-bold text-sm text-kabar-navy flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-kabar-red" />
              Bantuan Mendesak
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Pekerja migran dalam bahaya atau butuh pendampingan kasus hukum?
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/6281930131498?text=Halo%20KABAR%20BUMI,%20saya%20membutuhkan%20bantuan%20darurat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 w-full bg-emerald-600 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>Chat WhatsApp Pendamping</span>
            </a>

            <Link
              href="/pengaduan"
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-2.5 w-full bg-kabar-red text-white px-3.5 py-2.5 rounded-xl font-bold text-xs hover:bg-red-700 transition-colors shadow-sm"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Isi Form Pengaduan Online</span>
            </Link>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group flex items-center gap-2.5 bg-gradient-to-r from-red-600 to-kabar-red text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-red-200"
        aria-label="Buka menu bantuan darurat"
      >
        <div className="relative">
          <PhoneCall className="w-5 h-5 text-white animate-bounce" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400"></span>
          </span>
        </div>
        <span className="font-bold text-sm tracking-wide hidden sm:inline">
          Bantuan Darurat
        </span>
      </button>
    </aside>
  );
}
