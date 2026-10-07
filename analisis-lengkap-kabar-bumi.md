# Analisis Lengkap: Website KABAR BUMI

**Keluarga Besar Buruh Migran Indonesia (KABAR BUMI)**
Sumber: screenshot halaman Facebook (kabarbumipusat) dan slide "Apa sih?"
Desain beranda: https://claude.ai/artifact/1GFxQS57F6QeaqfJUaDtKW

---

## 1. Profil Organisasi

- Organisasi buruh migran yang memperjuangkan **perlindungan, hak, dan kesejahteraan** pekerja migran Indonesia dan keluarganya.
- Tiga fokus: **perlindungan, edukasi, pemberdayaan**.
- Facebook: ±6,9 rb pengikut, kategori Organisasi Komunitas, tidak menerima iklan komersial.
- Slogan: *"Akhiri Migrasi Paksa! Ciptakan Lapangan Kerja Layak di Indonesia."*
- Sudah punya website: **kabarbumi.or.id** (perlu dipastikan: buat baru atau desain ulang).
- Istilah resmi: **"buruh migran"**, bukan "imigran". Gunakan konsisten di seluruh website.

## 2. Jenis Konten di Facebook

| Kategori | Contoh |
|---|---|
| Edukasi/infografis | Apa itu TPPO, modus TPPO, siapa saja bisa jadi korban, bentuk eksploitasi |
| Layanan pengaduan kasus | Alur pengaduan, jenis kasus (kontrak kerja, gaji, kekerasan, dokumen, dll.), kontak |
| Pernyataan sikap & advokasi | Kasus Mary Jane Veloso (16 tahun berjuang) |
| Berita (label NEWS) | Kebebasan Mary Jane, kegiatan daerah |
| Kegiatan lapangan | Rapat persiapan Hari Tani Nasional bersama kelompok tani, HUT RI di Ponorogo |
| Galang donasi | Open donasi Flores, Pray for NTT |
| Ucapan/momen | HUT mitra, Dirgahayu Indonesia, Hari Tani Nasional |

Kegiatan lapangan berporos pada hak-hak buruh migran. Isu seperti Hari Tani Nasional masuk karena slogan mereka melihat migrasi paksa berakar pada sulitnya lapangan kerja dan kondisi desa.

## 3. Identitas Visual yang Ada

- **Logo:** biru tua, merah, putih; globe dan siluet buruh.
- **Poster edukasi:** latar gelap (hitam/marun), teks putih tebal.
- **Poster berita:** putih dan pink/magenta, label "NEWS".
- **Slide "Apa sih?":** putih bersih, aksen ungu-biru lembut.
- **Cover:** ilustrasi tangan (merah, kuning, biru) di atas tekstur kertas.
- **Tipografi:** sans-serif tebal huruf kapital untuk judul.
- **Nada bahasa:** tegas pada pernyataan sikap, ramah dan mengajak pada edukasi.

## 4. Fokus Organisasi → Isi Website

| Fokus | Isi di website |
|---|---|
| **Perlindungan** | Layanan pengaduan kasus, pendampingan, pernyataan sikap dan advokasi |
| **Edukasi** | Materi TPPO, hak buruh migran, tips sebelum berangkat, infografis |
| **Pemberdayaan** | Kegiatan komunitas, kerja bersama kelompok tani dan jaringan, pendidikan untuk keluarga buruh migran, aksi solidaritas/donasi |

Halaman **Kegiatan** dikelompokkan mengikuti tiga fokus ini, dan bisa dijadikan filter.

## 5. Catatan Penting

1. **Target pengunjung:** pekerja migran dan keluarganya, jejaring NGO/serikat, media, donatur. Bahasa sederhana, **mobile-first**.
2. **Fungsi utama:** pengaduan kasus. Buat form online yang mudah ditemukan; data korban sensitif sehingga keamanan dan privasi harus dipikirkan sejak awal.
3. **Konten tersebar** di infografis Facebook dan sulit dicari. Website merapikannya menjadi artikel yang bisa dicari dan diarsipkan.
4. **Interaksi Facebook rendah** (±2-6 like per postingan), sehingga website bisa jadi kanal utama yang lebih terstruktur.
5. **Donasi** perlu halaman khusus dengan transparansi penggunaan dana.

## 6. Struktur Halaman

1. Beranda
2. Tentang Kami (profil, visi-misi, struktur)
3. Layanan Pengaduan (alur + form)
4. Edukasi (TPPO, hak buruh migran, tips sebelum berangkat)
5. Berita & Pernyataan Sikap
6. Kegiatan (galeri, filter: Perlindungan / Edukasi / Pemberdayaan)
7. Donasi
8. Kontak

## 7. Arah Desain (Mockup Beranda)

Urutan beranda: hero dengan slogan, tiga fokus, layanan pengaduan (alur 4 langkah), kabar terbaru, donasi, footer.

- **Tegas tapi hangat:** dasar terang agar mudah dibaca, blok gelap (pengaduan dan footer) untuk keseimbangan dan kesan serius.
- **Tombol "Laporkan Kasus"** selalu terlihat di header dan hero.
- **Label berwarna di kartu berita** (pernyataan sikap, kegiatan, edukasi) membantu pengunjung menyaring konten.
- **Responsif:** layout menyesuaikan lebar layar karena pengunjung kebanyakan lewat HP.
- **Placeholder yang perlu diisi:** foto kegiatan, kontak pengaduan, alamat sekretariat, gambar kartu berita.

## 8. Palet Warna (Versi Dirapikan)

Palet awal terlalu ramai (merah, ungu, pink, kuning, biru muda sekaligus), sehingga terkesan seperti materi acara, bukan lembaga yang kredibel. Versi akhir dibatasi:

| Warna | Kode | Fungsi |
|---|---|---|
| Biru tua | `#1b2a6b` | Warna utama: judul, label, blok pengaduan |
| Merah | `#c8202f` | Hanya untuk tombol aksi (Laporkan Kasus, Isi Form Pengaduan) |
| Ungu lembut | `#4a3fb5` / `#e4e1fa` | Latar dan aksen kecil |
| Putih | `#ffffff` | Latar utama |

Catatan: label pink dengan teks putih kecil kontrasnya kurang baik, jadi diganti satu warna label (biru tua).

## 9. Rekomendasi Stack

**Next.js (App Router) + TypeScript + Tailwind CSS, dengan Prisma + PostgreSQL.**

| Kebutuhan | Pilihan |
|---|---|
| Frontend | Next.js + Tailwind. Cepat di HP dan bagus untuk SEO |
| Database | PostgreSQL + Prisma |
| Konten (berita, edukasi, kegiatan) | Payload CMS atau Sanity, supaya pengurus non-teknis bisa posting sendiri |
| Login admin | Auth.js |
| Form pengaduan | Validasi di server, rate limit, captcha, kolom sensitif dienkripsi |
| Hosting | VPS dengan backup rutin; untuk data korban lebih aman server yang dikendalikan sendiri |

**Alasan:** data pengaduan sangat sensitif (korban TPPO, kekerasan), sehingga perlu kontrol penuh atas akses data, HTTPS wajib, dan akses admin dibatasi per peran.

**Alternatif ringan: WordPress.** Lebih cepat jadi dan mudah dirawat pengurus (jika mereka sudah terbiasa), tapi kustomisasi alur pengaduan dan keamanan datanya lebih terbatas.

Pilihan: Next.js bila ingin hasil yang kuat sebagai karya teknis; WordPress bila prioritasnya cepat jadi dan mudah dikelola.

## 10. Materi yang Masih Dibutuhkan

- Slide lanjutan carousel "Apa sih?" (visi-misi, program, struktur)
- Screenshot bagian "Tentang" di Facebook (alamat, struktur organisasi)
- Kepastian status website lama (kabarbumi.or.id)
- Kontak pengaduan resmi dan foto kegiatan asli

## 11. Langkah Berikutnya

1. Desain halaman Pengaduan (form dan alur).
2. Skema database dan alur form pengaduan.
3. Halaman lain: Tentang, Edukasi, Berita, Kegiatan, Donasi.
