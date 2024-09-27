"use client";

import Header from "@/components/Header";
import InfoCard from "@/components/InfoCard";
import { useParams } from "next/navigation";
import React from "react";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import ar from "../../../shared/ar/content.json";
import de from "../../../shared/de/content.json";
import Footer from "@/components/Footer";

export default function HomePage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
    lang === "en" ? en : lang === "tr" ? tr : lang === "ar" ? ar : de;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow  py-8 text-white bg-white">
        <InfoCard data={data.home} />
      </div>
      <Footer data={data.footer} />
    </div>
  );
}
