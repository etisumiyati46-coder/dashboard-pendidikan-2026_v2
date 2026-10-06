// DATA CONTOH — ganti dengan data resmi Bappeda/Disdikbud. Anggaran dalam Rp juta.
const DATA = {
  judul: "Crosscutting Pendidikan Kabupaten Karawang",
  tahun: 2026,
  opd: {
    Disdikbud: "Dinas Pendidikan dan Kebudayaan",
    Dinkes: "Dinas Kesehatan",
    Dinsos: "Dinas Sosial",
    DP3A: "Dinas PPPA",
    Disnakertrans: "Dinas Tenaga Kerja dan Transmigrasi",
    DPUPR: "Dinas PUPR",
    Kominfo: "Dinas Komunikasi dan Informatika"
  },
  masalah: [
    { id: "P1", judul: "Anak tidak sekolah dan akses pendidikan menengah masih rendah",
      sasaran: "Meningkatnya akses pendidikan yang merata dan inklusif",
      indikator: [
        { n: "Angka Partisipasi Sekolah usia 16-18 tahun", b: 68, t: 74, s: "%" },
        { n: "Rata-rata lama sekolah", b: 8.2, t: 8.5, s: "tahun" }],
      aksi: [
        { n: "Pendataan dan penjaringan anak tidak sekolah", o: "Disdikbud", tg: "2.500 anak", a: 850 },
        { n: "Bantuan pendidikan keluarga miskin dan rentan", o: "Dinsos", tg: "3.000 siswa", a: 2400 },
        { n: "Pendampingan anak putus sekolah dan pekerja anak", o: "DP3A", tg: "400 anak", a: 300 }] },
    { id: "P2", judul: "Kemampuan literasi dan numerasi peserta didik belum optimal",
      sasaran: "Meningkatnya mutu pembelajaran dasar",
      indikator: [
        { n: "Capaian literasi (asesmen nasional)", b: 55, t: 62, s: "%" },
        { n: "Capaian numerasi (asesmen nasional)", b: 48, t: 56, s: "%" }],
      aksi: [
        { n: "Gerakan literasi sekolah dan perpustakaan desa", o: "Disdikbud", tg: "300 sekolah", a: 1200 },
        { n: "Platform belajar digital dan konten pembelajaran", o: "Kominfo", tg: "1 platform", a: 650 },
        { n: "Pemenuhan gizi anak sekolah dasar", o: "Dinkes", tg: "20.000 siswa", a: 1800 }] },
    { id: "P3", judul: "Kekurangan dan ketimpangan distribusi guru berkualitas",
      sasaran: "Meningkatnya kompetensi dan pemerataan pendidik",
      indikator: [
        { n: "Guru bersertifikat pendidik", b: 72, t: 80, s: "%" },
        { n: "Sekolah dengan guru sesuai rasio", b: 64, t: 75, s: "%" }],
      aksi: [
        { n: "Pelatihan guru dan komunitas belajar", o: "Disdikbud", tg: "2.000 guru", a: 1500 },
        { n: "Redistribusi guru antar wilayah", o: "Disdikbud", tg: "250 guru", a: 400 },
        { n: "Insentif guru di wilayah terpencil", o: "Disdikbud", tg: "600 guru", a: 2100 }] },
    { id: "P4", judul: "Sarana dan prasarana sekolah rusak serta belum ramah anak",
      sasaran: "Terpenuhinya sarpras pendidikan yang layak dan aman",
      indikator: [
        { n: "Ruang kelas dalam kondisi baik", b: 78, t: 85, s: "%" },
        { n: "Sekolah ramah anak", b: 35, t: 50, s: "%" }],
      aksi: [
        { n: "Rehabilitasi ruang kelas dan toilet sekolah", o: "DPUPR", tg: "180 ruang", a: 9200 },
        { n: "Pembangunan unit sekolah dan ruang kelas baru", o: "Disdikbud", tg: "40 ruang", a: 6800 },
        { n: "Penguatan sekolah ramah anak", o: "DP3A", tg: "60 sekolah", a: 350 }] },
    { id: "P5", judul: "Lulusan SMK belum terserap pasar kerja industri",
      sasaran: "Meningkatnya kesesuaian pendidikan vokasi dengan dunia kerja",
      indikator: [
        { n: "Lulusan SMK terserap kerja atau wirausaha", b: 58, t: 66, s: "%" },
        { n: "SMK bermitra dengan industri", b: 60, t: 80, s: "%" }],
      aksi: [
        { n: "Revitalisasi kurikulum dan kemitraan industri", o: "Disdikbud", tg: "40 SMK", a: 700 },
        { n: "Pelatihan kerja dan sertifikasi kompetensi", o: "Disnakertrans", tg: "1.500 peserta", a: 2600 },
        { n: "Bursa kerja khusus dan penelusuran lulusan", o: "Disnakertrans", tg: "40 sekolah", a: 450 }] }
  ]
};
