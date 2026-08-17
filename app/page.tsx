import { Metadata } from "next";
import React from "react";
import Hero from "./components/Sections/Hero";
import Brands from "./components/Sections/Brands";
import TrustedBy from "./components/Sections/Trustedby";
import StatsSection from "./components/Sections/Statssection";

type Props = {};

export const metadata: Metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

const page = (props: Props) => {
  return (
    <>
      <Hero />
      <Brands />
      <TrustedBy />
      <StatsSection />
    </>
  );
};

export default page;
