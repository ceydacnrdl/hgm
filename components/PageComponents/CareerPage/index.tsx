"use client";

import React from "react";
import Header from "../../Header";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import ar from "../../../shared/ar/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";
import CareerCard from "@/components/CareerCard";
import Footer from "@/components/Footer";

export default function CareerPage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
    lang === "en" ? en : lang === "tr" ? tr : lang === "ar" ? ar : de;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow  py-8 text-black mt-20 bg-white">
        <CareerCard data={data.career} lang={lang} />
      </div>
      <Footer data={data.footer} />
    </div>
  );
}
