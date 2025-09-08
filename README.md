---

# 📒 Aplikasi Catatan Pribadi

Proyek ini adalah aplikasi catatan sederhana berbasis **React + Vite + TailwindCSS**.
Aplikasi ini memungkinkan pengguna untuk membuat, mencari, menghapus, serta mengarsipkan catatan secara interaktif.

## ✨ Fitur Utama

* **Menampilkan Daftar Catatan**

  * Catatan ditampilkan berdasarkan data awal (initial notes).
  * Menggunakan state untuk menyimpan catatan di memori.
  * Jika daftar kosong, muncul pesan *“Tidak ada catatan”*.

* **Menambahkan Catatan**

  * Form input dengan *controlled component*.
  * Batas judul maksimal 50 karakter dengan indikator sisa karakter.
  * Data catatan baru langsung ditambahkan ke daftar.

* **Menghapus Catatan**

  * Tombol *Delete* untuk menghapus catatan dari daftar.

* **Mengarsipkan / Memindahkan Catatan**

  * Tombol *Arsipkan* untuk memindahkan catatan ke bagian Arsip.
  * Tombol *Pindahkan* untuk mengembalikan catatan dari Arsip ke daftar aktif.

* **Pencarian Catatan**

  * Kolom pencarian yang bisa memfilter catatan berdasarkan judul.
  * Jika kolom pencarian kosong, semua catatan ditampilkan kembali.

## 📂 Struktur Proyek

```
src/
├── App.jsx              # Komponen utama
├── components/
│   ├── NoteInput.jsx    # Form tambah catatan
│   ├── NoteList.jsx     # Daftar catatan
│   ├── NoteItem.jsx     # Item catatan
│   └── SearchBar.jsx    # Pencarian catatan
└── main.jsx             # Entry point React
```

## 🚀 Teknologi

* [React](https://react.dev/) – library UI berbasis komponen.
* [Vite](https://vitejs.dev/) – bundler cepat dengan HMR.
* [TailwindCSS](https://tailwindcss.com/) – styling utility-first.

## ▶️ Cara Menjalankan

1. Clone repo ini

   ```bash
   git clone <url-repo-kamu>
   cd <folder-proyek>
   ```
2. Install dependencies

   ```bash
   npm install
   ```
3. Jalankan aplikasi

   ```bash
   npm run dev
   ```
4. Akses di browser

   ```
   http://localhost:5173
   ```

---
