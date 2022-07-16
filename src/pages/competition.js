import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/components/Halaman-Competition";
export default function competition() {
  return (
    <>
      <Navbar />
      <Competition
        judulCompe="Application Development"
        deskripsiLomba=" Application Development adalah lomba pengembangan aplikasi untuk siswa
        SMA/SMK/Sederajat dan mahasiswa dalam mengembangkan ide kreatif untuk
        menyelesaikan masalah di Indonesia dalam bentuk aplikasi mobile, web
        dan desktop."
        deskripsiKategori="Terbuka untuk siswa/i SMA/SMK/sederajat & Mahasiswa/i aktif program D3/D4/S1
        Kelompok (1 sampai 3 orang)"
        contactPerson="082 237 826 662 :)"
      />
    </>
  );
}
