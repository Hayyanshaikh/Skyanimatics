import { Metadata } from "next";
import React from "react";
import Hero from "./components/Sections/Hero";
import Brands from "./components/Sections/Brands";
import TrustedBy from "./components/Sections/Trustedby";
import StatsSection from "./components/Sections/Statssection";
import BoostSection from "./components/Sections/Boostsection";
import ServicesSection from "./components/Sections/Servicessection";
import VideoProcessSection from "./components/Sections/Videoprocesssection";
import ClientsSection from "./components/Sections/Clientssection";
import FaqSection from "./components/Sections/Faqsection";
import ConsultationSection from "./components/Sections/ConsultationSection";
import QuoteSection from "./components/Sections/Quotesection";
import Casestudiessectiom from "./components/Sections/Casestudiessectiom";
import IndustriesSection from "./components/Sections/Industriessection";

type Props = {};

export const metadata: Metadata = {
  title: "Skyanimatics | Digital Solutions & Software Development",
  description:
    "Skyanimatics builds scalable digital solutions, custom software, web applications, and innovative technology products that help businesses grow.",
};

const page = (props: Props) => {
  return (
    <>
      <Hero />
      <Brands />
      <StatsSection />
      <BoostSection />
      <TrustedBy />
      <ServicesSection />
      <IndustriesSection />
      <VideoProcessSection />
      <Casestudiessectiom />
      <ClientsSection />
      <QuoteSection />
      <FaqSection />
      <ConsultationSection />
    </>
  );
};

export default page;
