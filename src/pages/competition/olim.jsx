import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/layout/CompetitionPageLayout";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/data/CompetitionData";
import { DataTimelineProxy } from "@/data/DataTimelineProxy";
import Seo from "@/components/Seo";
import { dataProxy } from "@/data/DataFAQ";
export default function competition() {
  return (
    <>
      <Seo templateTitle="Olimpiade" />
      <Navbar />
      <Competition
        gambar={CompetitionData[3].image}
        judulCompe={CompetitionData[3].title}
        deskripsiLomba={CompetitionData[3].data}
        deskripsiKategori={CompetitionData[3].kategori}
        contactPerson={CompetitionData[3].kontak}
        timeLinePercobaan={DataTimelineProxy}
        guidebook={CompetitionData[3].guidebook}
        faq={dataProxy}
      />
      <Footer />
    </>
  );
}
