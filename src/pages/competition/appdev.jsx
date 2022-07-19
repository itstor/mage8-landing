import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/layout/CompetitionPageLayout";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/data/CompetitionData";
import { DevcomTimeline } from "@/data/DataTimelineDevcom";
import Seo from "@/components/Seo";
import { dataAppdev } from "@/data/DataFAQ";
export default function competition() {
  return (
    <>
      <Seo templateTitle="App Development" />
      <Navbar />
      <Competition
        gambar={CompetitionData[0].image}
        judulCompe={CompetitionData[0].title}
        deskripsiLomba={CompetitionData[0].data}
        deskripsiKategori={CompetitionData[0].kategori}
        contactPerson={CompetitionData[0].kontak}
        timeLinePercobaan={DevcomTimeline}
        guidebook={CompetitionData[0].guidebook}
        faq={dataAppdev}
      />
      <Footer />
    </>
  );
}
