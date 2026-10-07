"useclient";

import React from "react";
import { AlertTriangle, PhoneCall } from "lucide-react";
import Link from "next/link";

export function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-700 via-kabar-red to-red-700 text-white text-xs sm:text-sm font-medium py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            LAYANAN DARURAT BURUH MIGRAN:
          </span>
          <span className="text-red-100 hidden md:inline">
            Butuh bantuan mendesak, kekerasan, atau tertahan di luar negeri?
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6281930131498?text=Halo%20KABAR%20BUMI,%20saya%20membutuhkan%20bantuan%20darurat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold underline hover:text-red-100 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Hotline WhatsApp: +62 819-3013-1498
          </a>
          <span className="hidden sm:inline text-red-300">|</span>
          <Link
            href="/pengaduan"
            className="hidden sm:inline bg-white text-kabar-red px-2.5 py-0.5 rounded text-xs font-bold hover:bg-red-50 transition-colors"
          >
            Form Online
          </Link>
        </div>
      </div>
    </div>
  );
}
