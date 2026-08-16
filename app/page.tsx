import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

const page = (props: Props) => {
  return <div>page</div>;
};

export default page;
