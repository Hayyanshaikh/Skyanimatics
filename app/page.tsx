import { Metadata } from "next";
import React from "react";
import Hero from "./components/Sections/Hero";

type Props = {};

export const metadata: Metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

const page = (props: Props) => {
  return (
    <>
      <Hero />
    </>
  );
};

export default page;
