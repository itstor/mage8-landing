import React from "react";
import Image from "next/image";
import TitleSubbab from "@/components/Title";
import Guidebook from "@/components/Guidebook";
import { Collapse, Text } from "@nextui-org/react";
import Link from "next/link";
export default function index(props) {
  return (
    <>
      <div className="flex-col mt-28 flex items-center justify-center">
        <h1 className="text-center font-bold  text-xl sm:text-4xl  leading-tight">
          {"About " + "" + props.judulCompe + " Competition"}
        </h1>
        <Image
          src={`/${props.gambar}`}
          alt={props.judulCompe}
          height={400}
          width={400}
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="mr-2 sm:mr-4 lg:mr-10 mt-4 text-white sm:text-lg sm:leading-7 font-medium primary px-2 py-2 sm:px-2 sm:py-4 rounded-full   ">
          <Link href="/dashboard">Daftar Sekarang</Link>
        </div>
        <a
          className="mt-4  text-white  sm:text-lg sm:leading-7 font-medium primary px-1 py-2   sm:px-3 sm:py-4  rounded-full  "
          href={props.guidebook}
        >
          {" "}
          Download Guidebook
        </a>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab={`About ${props.judulCompe}`} />
        <h2 className="text-lg"> {props.deskripsiLomba}</h2>
      </div>

      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab="Kategori Lomba" />
        <h2 className="text-lg"> {props.deskripsiKategori}</h2>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab="Timeline Perlombaan" />
        <h1 className="text-2xl">
          {props.timeLinePercobaan.map((item, index) => {
            return (
              <div key={index}>
                {item.judul}: {item.tanggal}
              </div>
            );
          })}
        </h1>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab="FAQ" />
        <Collapse.Group shadow className="mt-8">
          {props.faq.map((item, index) => {
            return (
              <Collapse key={item[0]} title={item.pertanyaan}>
                <Text>{item.jawaban}</Text>
              </Collapse>
            );
          })}
        </Collapse.Group>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="text-2xl" />
        <TitleSubbab subbab="Contact Person" />
        {props.contactPerson}
      </div>
      <Guidebook href={props.guidebook} />
    </>
  );
}
