# 🌸 Portal Web Rapor & LKPD Interaktif JP10 (Outsutsuki Kurasu)

Portal terpadu pemantauan hasil belajar, evaluasi formatif, dan Lembar Kerja Peserta Didik (LKPD) Bahasa Jepang berstandar CEFR / JF Standard & persiapan JFT-Basic / Tokutei Ginou (SSW) untuk LPK JP10 Outsutsuki Kurasu.

---

## 🚀 Fitur Unggulan Portal

### 1. 📊 Dashboard Kemajuan Siswa
- **Multilevel Rapor (A1, A2.1, A2.2):** Memuat data lengkap 28 siswa di setiap tingkatan belajar secara presisi dan terstruktur.
- **Visualisasi Kemajuan Belajar:**
  - *Distribusi Status:* Sangat Kompeten (A), Siap Ujian (B), Penguatan (C), Perlu Bimbingan (D).
  - *Radar Grafik 5 Aspek:* Huruf & Kosakata, Tata Bahasa, Membaca (Dokkai), Menyimak (Choukai), Keaktifan & Sikap.
  - *Race Track Kemajuan Siswa (Maskot Barongsai):* Visualisasi interaktif capaian siswa menuju garis kelulusan.
- **Portal Siswa Personal:** Siswa dapat melihat kartu rapor individual, unduh/cetak rapor PDF tanpa blank page, dan riwayat kemajuan nilai.

### 2. 📝 Hub LKPD Interaktif (All-in-One)
Seluruh materi lembar kerja digital terintegrasi dalam 1 portal tanpa perlu berpindah situs:
- **Bab 1 (A2.1):** `先週、日本に来たばかりです` (Perkenalan Diri & Tempat Kerja)
- **Bab 2 (A2.1):** `イベントのチラシ／私の町の施設` (Pamflet Event & Fasilitas Kota)
- **Bab 3 (A2.2):** `仕事と職場／毎日の生活` (Instruksi Kerja & Etika Lingkungan Kerja)
- **Bab 4 (A2.2):** `しょうゆをつけないで食べてください` (Kuliner, Bumbu & Etika Menyantap)
- **Bab 5 (A2.2):** `早く予約したほうがいいですよ` (Rekomendasi Destinasi Wisata & Pola Saran)

Setiap bab dilengkapi:
- 12 Tab Lengkap (Panduan, Materi, Moji, Kaiwa, Choukai, Dokkai, Kanji, Kosakata, Terjemahan, Bank Audio, Hasil & Nilai, Refleksi).
- Audio asli Irodori JF yang dapat diputar langsung di HP maupun laptop siswa.
- Tombol **Kirim Nilai ke Guru** otomatis ke Google Spreadsheet.
- Mode Guru terlindungi password SHA-256 (`sensei123`).
- Cetak / Simpan PDF dengan layout khusus anti-blank.

---

## 📂 Struktur Direktori Proyek

```text
rapor-jp10-outsutsuki/
├── index.html              # Dashboard Utama (Rapor & Hub LKPD)
├── assets/                 # Aset Logo LPK, Maskot Barongsai, Race Finish
│   ├── logo_outsutsuki.png
│   ├── maskot_barongsai.jpg
│   └── barongsai_race_finish.jpg
└── lkpd/                   # Seluruh Modul LKPD Lengkap + Bank Audio
    ├── bab1/
    ├── bab2/
    ├── bab3/
    ├── bab4/
    └── bab5/
```

---

## 🌐 Cara Mengaktifkan GitHub Pages (Hosting Gratis)

1. Buat repositori baru di GitHub dengan nama: `rapor-jp10-outsutsuki`
2. Push seluruh file di folder ini ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portal terpadu rapor dan lkpd jp10"
   git branch -M main
   git remote add origin https://github.com/nuriqbal10/rapor-jp10-outsutsuki.git
   git push -u origin main
   ```
3. Buka repositori di browser: **Settings** > **Pages**.
4. Pada bagian **Build and deployment > Branch**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu sekitar 1–2 menit, portal web Anda akan langsung aktif di URL:
   **`https://nuriqbal10.github.io/rapor-jp10-outsutsuki/`**

---

## 🔄 Pembaruan Data Rapor

Jika nilai siswa di Excel diperbarui oleh Sensei:
1. Buka folder `D:\RAPOR JP10 (OUTSUTSUKI)`
2. Jalankan `UPDATE_DASHBOARD.bat` (secara otomatis akan mengompilasi data terbaru ke `Dashboard_Kemajuan_Siswa_JP10.html` dan `rapor-jp10-outsutsuki/index.html`).
3. Jalankan `git push` untuk memperbarui situs online.
