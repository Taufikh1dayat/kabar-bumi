import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  GraduationCap,
  Users2,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
  HeartHandshake,
  ExternalLink,
  PhoneCall,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden kabar-gradient-hero text-white pt-16 pb-20 lg:pt-24 lg:pb-32">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-red-200">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              Solidaritas Bersama Buruh Migran Indonesia
            </div>

            {/* Slogan Resmi */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Akhiri Migrasi Paksa! <br className="hidden sm:inline" />
              <span className="text-red-300">
                Ciptakan Lapangan Kerja Layak
              </span>{" "}
              di Indonesia.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              KABAR BUMI hadir memperjuangkan perlindungan, hak, dan keadilan
              bagi para buruh migran Indonesia beserta keluarganya dari berbagai
              bentuk ketidakadilan, kekerasan, dan eksploitasi kerja.
            </p>

            {/* Dual Primary Call-to-Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/pengaduan">
                <Button
                  variant="emergency"
                  size="lg"
                  className="w-full sm:w-auto gap-2.5 font-bold shadow-xl hover:shadow-red-500/30 text-base py-6 px-8"
                >
                  <AlertCircle className="w-5 h-5" />
                  Laporkan Kasus Sekarang
                </Button>
              </Link>
              <Link href="/edukasi">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 border-white/40 text-white hover:bg-white/10 hover:text-white text-base py-6 px-8"
                >
                  Kenali Hak & Bahaya TPPO
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Quick Status / Tracking Banner */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                900+ Anggota di 25 Desa (4 Provinsi)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Pendampingan Kasus Bebas Biaya
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Kerahasiaan Korban Terjamin
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TIGA PILAR FOKUS GERAKAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-kabar-navy bg-blue-50 px-3 py-1 rounded-full">
            Tiga Fokus KABAR BUMI
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fondasi Perjuangan Kami
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Setiap langkah dan program KABAR BUMI berporos pada tiga pilar utama
            demi kemandirian dan martabat buruh migran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1: Perlindungan */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-kabar-navy flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              <ShieldAlert className="w-7 h-7 text-kabar-navy" />
            </div>
            <div className="space-y-2">
              <span className="kabar-badge-protection">Pilar 1</span>
              <h3 className="text-xl font-bold text-slate-900">Perlindungan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Layanan pengaduan kasus, advokasi hukum ketenagakerjaan,
                pendampingan pemulangan korban, dan penanganan korban Tindak
                Pidana Perdagangan Orang (TPPO).
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/pengaduan"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-kabar-navy hover:text-blue-700"
              >
                Alur Pengaduan <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pilar 2: Edukasi */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-kabar-purple flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              <GraduationCap className="w-7 h-7 text-kabar-purple" />
            </div>
            <div className="space-y-2">
              <span className="kabar-badge-education">Pilar 2</span>
              <h3 className="text-xl font-bold text-slate-900">Edukasi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Penyadaran kritis hak-hak buruh migran, modus penipuan calo,
                tips sebelum berangkat, serta infografis hukum agar tidak
                terjebak perdagangan manusia.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/edukasi"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-kabar-purple hover:text-purple-700"
              >
                Materi Edukasi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pilar 3: Pemberdayaan */}
          <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
              <Users2 className="w-7 h-7 text-emerald-700" />
            </div>
            <div className="space-y-2">
              <span className="kabar-badge-empowerment">Pilar 3</span>
              <h3 className="text-xl font-bold text-slate-900">Pemberdayaan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pengorganisasian purna buruh migran, solidaritas kelompok tani
                di pedesaan, pendidikan keluarga, dan kemandirian ekonomi agar
                tidak terpaksa bermigrasi lagi.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/kegiatan"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900"
              >
                Kegiatan Komunitas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALUR PENGADUAN 4 LANGKAH (BLOCK KHUSUS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-kabar-navy text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="inline-block bg-red-600 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md">
              Layanan Utama
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Alur Pengaduan Kasus di KABAR BUMI
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Kami mendampingi kasus pemotongan gaji berlebih, penahanan paspor,
              kekerasan fisik/verbal, penipuan agensi, hingga indikasi TPPO
              secara transparan dan aman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Langkah 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-extrabold text-base">
                1
              </div>
              <h3 className="font-bold text-lg text-white">Isi Formulir</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Laporkan kronologi kasus, negara penempatan, dan unggah berkas
                bukti (perjanjian kerja, foto, tiket) melalui form online kami.
              </p>
            </div>

            {/* Langkah 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-extrabold text-base">
                2
              </div>
              <h3 className="font-bold text-lg text-white">Verifikasi Kasus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tim advokasi KABAR BUMI menghubungi korban/keluarga dalam kurun
                1x24 jam untuk klarifikasi dan analisis hukum awal.
              </p>
            </div>

            {/* Langkah 3 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-extrabold text-base">
                3
              </div>
              <h3 className="font-bold text-lg text-white">Pendampingan</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tindakan advokasi nyata: koordinasi KBRI/KJRI, mediasi agensi,
                pelaporan ke BP2MI/Kemenlu, atau evakuasi darurat.
              </p>
            </div>

            {/* Langkah 4 */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-extrabold text-base">
                4
              </div>
              <h3 className="font-bold text-lg text-white">Penyelesaian</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pemenuhan hak buruh (gaji cair, dokumen dikembalikan,
                pemulangan ke kampung halaman) serta pemantauan pemulihan.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
              <Clock className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span>
                Setiap laporan mendapatkan <strong>Kode Tiket Tracking</strong>{" "}
                untuk memeriksa status penanganan secara realtime.
              </span>
            </div>

            <Link href="/pengaduan" className="w-full sm:w-auto">
              <Button
                variant="emergency"
                size="lg"
                className="w-full sm:w-auto font-bold shadow-lg gap-2 text-sm"
              >
                <FileText className="w-4 h-4" />
                Mulai Buat Laporan Kasus
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BERITA TERBARU & ADVOKASI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-kabar-navy bg-blue-50 px-3 py-1 rounded-full">
              Kabar & Sikap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Suara & Kegiatan Terbaru
            </h2>
          </div>
          <Link
            href="/berita"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-kabar-navy hover:text-blue-700"
          >
            Lihat Semua Berita <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Berita 1: Advokasi Mary Jane */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="h-48 bg-slate-800 relative flex items-center justify-center p-6 text-center text-white">
              <span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                PERNYATAAN SIKAP
              </span>
              <p className="font-extrabold text-lg text-slate-100">
                16 Tahun Menanti Keadilan: Pembelaan Korban TPPO Mary Jane
                Veloso
              </p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-slate-600 line-clamp-3">
                KABAR BUMI terus mengawal dan mendesak pembebasan penuh bagi Mary
                Jane Veloso yang merupakan korban nyata dari kejahatan jaringan
                perdagangan manusia internasional.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Advokasi Kebijakan</span>
                <Link
                  href="/berita"
                  className="text-kabar-navy font-bold hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </article>

          {/* Berita 2: Hari Tani & Desa */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="h-48 bg-emerald-900 relative flex items-center justify-center p-6 text-center text-white">
              <span className="absolute top-4 left-4 bg-emerald-700 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                KEGIATAN DAERAH
              </span>
              <p className="font-extrabold text-lg text-emerald-100">
                Konsolidasi Hari Tani Nasional: Kedaulatan Tanah & Masa Depan
                Keluarga Buruh
              </p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-slate-600 line-clamp-3">
                Mengapa isu buruh migran terikat dengan nasib petani? Karena
                rusaknya lapangan kerja dan hilangnya lahan tani di desa yang
                mendorong migrasi paksa ke luar negeri.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Pemberdayaan Desa</span>
                <Link
                  href="/berita"
                  className="text-kabar-navy font-bold hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </article>

          {/* Berita 3: Edukasi TPPO */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="h-48 bg-purple-900 relative flex items-center justify-center p-6 text-center text-white">
              <span className="absolute top-4 left-4 bg-purple-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                EDUKASI
              </span>
              <p className="font-extrabold text-lg text-purple-100">
                Waspada Penipuan Kerja Online Scam & Modus TPPO Jalur Non-Resmi
              </p>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-slate-600 line-clamp-3">
                Mengenal ciri-ciri penipuan lowongan kerja ke negara ASEAN dan
                Timur Tengah dengan iming-iming gaji tinggi tanpa keterampilan.
                Simak tips perlindungan diri sebelum teken kontrak.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Literasi Pra-Berangkat</span>
                <Link
                  href="/berita"
                  className="text-kabar-navy font-bold hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 5. SOLIDARITAS & DONASI KEMANUSIAAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-100 px-3 py-1 rounded-full">
              <HeartHandshake className="w-4 h-4 text-red-600" />
              Solidaritas Bersama
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Dukung Pendampingan Hukum & Bantuan Kemanusiaan
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              KABAR BUMI adalah organisasi mandiri tanpa iklan komersial. Setiap
              donasi dipergunakan secara transparan untuk biaya advokasi kasus,
              rumah aman, dan pemulangan buruh migran yang tertimpa musibah.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href="/donasi" className="w-full sm:w-auto">
              <Button
                variant="default"
                size="lg"
                className="w-full font-bold text-base px-8 py-6 shadow-md"
              >
                Salurkan Donasi
              </Button>
            </Link>
            <Link href="/tentang" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full font-bold text-base px-8 py-6"
              >
                Transparansi Dana
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
