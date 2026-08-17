import { Metadata } from "next";
import React from "react";
import Hero from "./components/Sections/Hero";
import Brands from "./components/Sections/Brands";

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
    </>
  );
};

export default page;
