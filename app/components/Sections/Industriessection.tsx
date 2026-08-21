import { Metadata } from "next";
import React from "react";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";
import CustomButton from "../Custom/Custombutton";
import Image from "next/image";

type Props = {};

export const metadata: Metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

const IndustriesSection = (props: Props) => {
  const industries = [
    "Healthcare",
    "Travel",
    "Hospitality",
    "Real estate",
    "B2B",
    "Fintech",
    "Logistics",
    "E-learning",
    "Consultant",
    "E-Commerce",
    "Legal",
    "Small Businesses",
    "Startup",
  ];

  const centerIndex = Math.floor(industries.length / 2);

  return (
    <section className="relative overflow-hidden">
      {/* ================================
          CIRCLES + INDUSTRIES
      ================================= */}
      <div className="absolute z-20 -left-105 top-26 hidden lg:block">
        <div className="relative aspect-square h-210 rounded-full bg-linear-to-b from-transparent via-[rgba(78,99,111,30%)] to-transparent p-px">
          {/* Outer Circle */}
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#fcfdfe]">
            {/* Middle Circle */}
            <div className="aspect-square h-101.5 rounded-full bg-linear-to-b from-transparent via-[#01A3EF] to-transparent p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f6fafd]">
                {/* Inner Circle */}
                <div className="aspect-square h-70.5 rounded-full bg-linear-to-b from-[#01A3EF] to-[#0F55C9]" />
              </div>
            </div>
          </div>

          {/* Desktop Industry List */}
          <IndustryList industries={industries} centerIndex={centerIndex} />
        </div>
      </div>

      {/* ================================
          MAIN CONTAINER
      ================================= */}
      <Container className="industry-container relative flex flex-col pt-12 pb-36 sm:pt-16 sm:pb-36 lg:min-h-285 lg:pt-16 lg:pb-46">
        {/* ================================
            BLUE CURVE - DESKTOP ONLY
        ================================= */}
        <div className="pointer-events-none absolute top-6 right-14 z-50 hidden h-21 aspect-square lg:block">
          <Image
            src="/icons/blue-3d-curve.png"
            alt=""
            fill
            className="rotate-120 object-contain"
          />
        </div>

        {/* ================================
            BLUE OCTAHEDRON - DESKTOP ONLY
        ================================= */}
        <div className="pointer-events-none absolute bottom-0 left-1 z-50 hidden h-21 aspect-square lg:block">
          <Image
            src="/icons/blue-3d-octahedron.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* ================================
            HEADING
        ================================= */}
        <CustomHeading
          align="left"
          line1="Industries We Are"
          line2="Experts in"
          className="relative z-30"
        />

        {/* ================================
            MOBILE / TABLET INDUSTRIES
        ================================= */}
        <div className="relative z-20 mt-8 lg:hidden">
          <IndustryList
            industries={industries}
            centerIndex={centerIndex}
            mobile
          />
        </div>

        {/* ================================
            CONTENT
        ================================= */}
        <div className="mt-10 flex flex-col gap-10 sm:mt-10 lg:mt-auto lg:max-w-[calc(100%-436px)] lg:flex-row lg:items-end lg:gap-0">
          {/* CTA + Description */}
          <div className="relative z-30 flex w-full flex-col gap-7 sm:flex-row sm:items-end lg:flex-1">
            <CustomButton className="w-fit shrink-0" variant="gradient">
              Get a Free Quote
            </CustomButton>

            <div className="space-y-2.5 sm:ml-8 lg:ml-18">
              <h2 className="text-[28px] font-bold leading-tight text-[#1A2937] sm:text-[32px] lg:text-[35px]">
                Healthcare
              </h2>

              <p className="max-w-114 text-sm leading-6 text-[#1A2937] opacity-70 sm:text-base">
                We provide robust endpoints and secure access solutions for the
                healthcare industry, ensuring data protection, compliance
                adherence, and minimizing the risk of information breaches
              </p>
            </div>
          </div>

          {/* ================================
              DARK MATTE SPHERES - DESKTOP ONLY
          ================================= */}
          <div className="absolute top-0 left-1/2 z-50 hidden min-w-[450px] -translate-1/2 lg:block">
            {/* Sphere 1 */}
            <div className="pointer-events-none absolute top-20 right-5 z-50 h-[300px] w-[200px]">
              <Image
                src="/icons/dark-matte-sphere.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Sphere 2 */}
            <div className="pointer-events-none absolute top-50 -left-20 z-50 h-[300px] w-[200px]">
              <Image
                src="/icons/dark-matte-sphere.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Sphere 3 */}
            <div className="pointer-events-none absolute top-120 right-0 z-50 h-[300px] w-[200px]">
              <Image
                src="/icons/dark-matte-sphere.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ================================
              IMAGE CARD
          ================================= */}
          <div className="relative z-20 mt-2 flex w-full flex-col justify-center border border-[#dddfe1] p-4 sm:p-5 lg:absolute lg:top-0 lg:right-5.5 lg:mt-0 lg:h-full lg:max-w-109 lg:border-x lg:border-y-0 lg:px-5 lg:py-0">
            {/* Inner Border */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[calc(100%-40px)] -translate-x-1/2 border-x border-[#dddfe1] lg:block" />

            {/* Number */}
            <h4 className="relative z-10 mb-4 text-right text-[28px] font-bold text-[#1A2937] sm:text-[32px] lg:mb-3 lg:text-[35px]">
              01
            </h4>

            {/* Image */}
            <div className="relative z-10 h-105 w-full overflow-hidden rounded-2xl sm:h-125 md:h-140 lg:h-160.5">
              <Image
                src="/images/industries-1.png"
                alt="Healthcare industry"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 436px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* =================================
   INDUSTRY LIST
================================= */

type IndustryListProps = {
  industries: string[];
  centerIndex: number;
  mobile?: boolean;
};

const IndustryList = ({
  industries,
  centerIndex,
  mobile = false,
}: IndustryListProps) => {
  return (
    <ul
      className={
        mobile
          ? "grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 md:grid-cols-4"
          : "absolute right-[10.8%] top-1/2 flex -translate-y-1/2 flex-col gap-2.5"
      }
    >
      {industries.map((industry, index) => {
        if (mobile) {
          return (
            <li
              key={industry}
              className={`text-sm text-[#1A2937] sm:text-base ${
                index === centerIndex ? "font-semibold text-[#01A3EF]" : ""
              }`}
            >
              {industry}
            </li>
          );
        }

        const distance = Math.abs(index - centerIndex);

        const marginLeft =
          distance <= 3 ? 38 - distance * 10 : 1 - (distance - 4) * 20;

        return (
          <li
            key={industry}
            className="text-[#1A2937]"
            style={{ marginLeft: `${marginLeft}px` }}
          >
            {industry}
          </li>
        );
      })}
    </ul>
  );
};

export default IndustriesSection;
