import React from "react";
import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Heart, AlertCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-kabar-navy text-slate-200 pt-16 pb-8 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kolom 1: Profil & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Shield className="w-6 h-6 text-kabar-red fill-kabar-red/20" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                KABAR BUMI
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Keluarga Besar Buruh Migran Indonesia. Organisasi massa yang
              memperjuangkan hak, perlindungan, dan martabat buruh migran
              Indonesia beserta keluarganya.
            </p>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs italic text-red-200 font-semibold">
                &ldquo;Akhiri Migrasi Paksa! Ciptakan Lapangan Kerja Layak di
                Indonesia.&rdquo;
              </p>
            </div>
          </div>

          {/* Kolom 2: 3 Fokus Utama */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-wide uppercase text-sm border-b border-white/10 pb-2">
              Fokus Gerakan
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">
                    Perlindungan
                  </strong>
                  <span className="text-xs text-slate-300">
                    Advokasi hukum, pendampingan kasus, penanganan TPPO.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">
                    Edukasi
                  </strong>
                  <span className="text-xs text-slate-300">
                    Pembekalan pra-keberangkatan, literasi kontrak, hak buruh.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-semibold">
                    Pemberdayaan
                  </strong>
                  <span className="text-xs text-slate-300">
                    Solidaritas keluarga buruh migran, jejaring kelompok tani.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Tautan Cepat */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-wide uppercase text-sm border-b border-white/10 pb-2">
              Akses Layanan
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pengaduan"
                  className="inline-flex items-center gap-1.5 text-red-300 hover:text-white font-bold transition-colors"
                >
                  <AlertCircle className="w-4 h-4 text-kabar-red" />
                  Form Layanan Pengaduan Kasus
                </Link>
              </li>
              <li>
                <Link
                  href="/edukasi"
                  className="hover:text-white transition-colors"
                >
                  Modul Edukasi & Bahaya TPPO
                </Link>
              </li>
              <li>
                <Link
                  href="/berita"
                  className="hover:text-white transition-colors"
                >
                  Pernyataan Sikap & Advokasi
                </Link>
              </li>
              <li>
                <Link
                  href="/donasi"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-red-400" />
                  Solidaritas & Donasi Kemanusiaan
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="hover:text-white transition-colors"
                >
                  Profil & Struktur Organisasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Sekretariat */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white tracking-wide uppercase text-sm border-b border-white/10 pb-2">
              Sekretariat & Hotline
            </h3>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-xs leading-relaxed">
                  <strong>Sekretariat Nasional:</strong> VIVAT-Indonesia, Jl.
                  Matraman Raya No. 119, Palmeriam, Matraman, Jakarta Timur
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6281930131498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-red-300 transition-colors"
                >
                  +62 819-3013-1498 (Hotline)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:kabarbumipusat@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  kabarbumipusat@gmail.com
                </a>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs text-slate-400 space-y-1">
                <p>
                  <strong>Cabang:</strong> Cilacap • Ponorogo • Bawean • Lombok
                  Timur • Sumbawa Barat • Kupang NTT
                </p>
                <p className="text-[11px] text-slate-400">
                  SK Kemenkumham: AHU-0078842.AH.01.07.2016
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} KABAR BUMI. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">IG & X: @kabarbumipusat</span>
            <span>•</span>
            <span className="text-slate-400">YT: @KABARBUMIOFFICIAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
