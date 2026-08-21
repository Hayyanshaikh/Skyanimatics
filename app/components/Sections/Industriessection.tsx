"use client";

import { Metadata } from "next";
import React, { useState } from "react";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";
import CustomButton from "../Custom/Custombutton";
import Image from "next/image";

type Props = {};

export const metadata: Metadata = {
  title: "Meta Title",
  description: "Meta Description",
};

type Industry = {
  title: string;
  description: string;
  image: string;
};

const IndustriesSection = (props: Props) => {
  const industries: Industry[] = [
    {
      title: "Healthcare",
      description:
        "We provide robust endpoints and secure access solutions for the healthcare industry, ensuring data protection, compliance adherence, and minimizing the risk of information breaches.",
      image: "/images/industries-1.png",
    },
    {
      title: "Travel",
      description:
        "We create secure and scalable digital solutions for the travel industry, helping businesses improve customer experiences and streamline their operations.",
      image: "/images/industries-1.png",
    },
    {
      title: "Hospitality",
      description:
        "Our hospitality solutions help businesses deliver seamless digital experiences while improving operational efficiency and customer satisfaction.",
      image: "/images/industries-1.png",
    },
    {
      title: "Real estate",
      description:
        "We build modern real estate solutions that simplify property management, customer interactions, and digital operations.",
      image: "/images/industries-1.png",
    },
    {
      title: "B2B",
      description:
        "We develop scalable B2B solutions that connect businesses, automate workflows, and improve productivity across organizations.",
      image: "/images/industries-1.png",
    },
    {
      title: "Fintech",
      description:
        "We deliver secure and reliable fintech solutions designed to protect sensitive financial data and support seamless digital transactions.",
      image: "/images/industries-1.png",
    },
    {
      title: "Logistics",
      description:
        "Our logistics solutions help businesses optimize supply chains, automate processes, and improve visibility across their operations.",
      image: "/images/industries-1.png",
    },
    {
      title: "E-learning",
      description:
        "We create engaging and scalable e-learning platforms that make education more accessible, interactive, and effective.",
      image: "/images/industries-1.png",
    },
    {
      title: "Consultant",
      description:
        "We provide digital solutions for consulting businesses that help manage clients, streamline workflows, and improve business performance.",
      image: "/images/industries-1.png",
    },
    {
      title: "E-Commerce",
      description:
        "We build high-performance e-commerce solutions focused on seamless shopping experiences, scalability, security, and conversions.",
      image: "/images/industries-1.png",
    },
    {
      title: "Legal",
      description:
        "We develop secure digital solutions for legal businesses, helping them manage information, workflows, and client interactions efficiently.",
      image: "/images/industries-1.png",
    },
    {
      title: "Small Businesses",
      description:
        "We help small businesses establish powerful digital platforms that simplify operations, attract customers, and support long-term growth.",
      image: "/images/industries-1.png",
    },
    {
      title: "Startup",
      description:
        "We work with startups to build scalable digital products that turn ideas into reliable solutions while keeping speed and flexibility in focus.",
      image: "/images/industries-1.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const activeIndustry = industries[activeIndex];
  const previousIndustry = industries[previousIndex];

  const handleIndustryChange = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? "up" : "down");
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <section className="relative overflow-hidden">
      {/* =================================
          DESKTOP CIRCLES + INDUSTRIES
      ================================== */}
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

          <IndustryList
            industries={industries}
            activeIndex={activeIndex}
            onSelect={handleIndustryChange}
          />
        </div>
      </div>

      {/* =================================
          MAIN CONTAINER
      ================================== */}
      <Container className="industry-container relative flex flex-col pt-12 pb-36 sm:pt-16 sm:pb-36 lg:min-h-285 lg:pt-16 lg:pb-46">
        {/* Blue Curve */}
        <div className="pointer-events-none absolute top-6 right-14 z-50 hidden h-21 aspect-square lg:block">
          <Image
            src="/icons/blue-3d-curve.png"
            alt=""
            fill
            className="rotate-120 object-contain"
          />
        </div>

        {/* Blue Octahedron */}
        <div className="pointer-events-none absolute bottom-0 left-1 z-50 hidden h-21 aspect-square lg:block">
          <Image
            src="/icons/blue-3d-octahedron.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <CustomHeading
          align="left"
          line1="Industries We Are"
          line2="Experts in"
          className="relative z-30"
        />

        {/* Mobile / Tablet Industries */}
        <div className="relative z-30 mt-8 lg:hidden">
          <IndustryList
            industries={industries}
            activeIndex={activeIndex}
            onSelect={handleIndustryChange}
            mobile
          />
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col gap-10 sm:mt-10 lg:mt-auto lg:max-w-[calc(100%-436px)] lg:flex-row lg:items-end lg:gap-0">
          {/* CTA + Description */}
          <div className="relative z-30 flex w-full flex-col gap-7 sm:flex-row sm:items-end lg:flex-1">
            <CustomButton className="w-fit shrink-0" variant="gradient">
              Get a Free Quote
            </CustomButton>

            <div className="space-y-2.5 sm:ml-8 lg:ml-18">
              <div
                key={`content-${activeIndex}`}
                className={
                  direction === "up"
                    ? "animate-industry-content-up"
                    : "animate-industry-content-down"
                }
              >
                <h2 className="text-[28px] font-bold leading-tight text-[#1A2937] sm:text-[32px] lg:text-[35px]">
                  {activeIndustry.title}
                </h2>

                <p className="max-w-114 text-sm leading-6 text-[#1A2937] opacity-70 sm:text-base">
                  {activeIndustry.description}
                </p>
              </div>
            </div>
          </div>

          {/* Dark Matte Spheres */}
          <div className="absolute top-0 left-1/2 z-50 hidden min-w-[450px] -translate-1/2 lg:block">
            <div className="pointer-events-none absolute top-20 right-5 z-50 h-[300px] w-[200px]">
              <Image
                src="/icons/dark-matte-sphere.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="pointer-events-none absolute top-50 -left-20 z-50 h-[300px] w-[200px]">
              <Image
                src="/icons/dark-matte-sphere.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="pointer-events-none absolute top-120 right-0 z-50 h-[300px] w-[200px]">
              <Image
                src="/icons/dark-matte-sphere.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Image Card */}
          <div className="relative z-20 mt-2 flex w-full flex-col justify-center border border-[#dddfe1] p-4 sm:p-5 lg:absolute lg:top-0 lg:right-5.5 lg:mt-0 lg:h-full lg:max-w-109 lg:border-x lg:border-y-0 lg:px-5 lg:py-0">
            {/* Inner Border */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[calc(100%-40px)] -translate-x-1/2 border-x border-[#dddfe1] lg:block" />

            {/* Number */}
            <div className="relative z-10 mb-4 h-11 overflow-hidden sm:h-12 lg:mb-3 lg:h-13">
              <div
                key={`number-${activeIndex}`}
                className={
                  direction === "up"
                    ? "animate-industry-number-up text-right"
                    : "animate-industry-number-down text-right"
                }
              >
                <h4 className="text-[28px] font-bold text-[#1A2937] sm:text-[32px] lg:text-[35px]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </h4>
              </div>
            </div>

            {/* Image Viewport */}
            <div className="relative z-10 h-105 w-full overflow-hidden rounded-2xl sm:h-125 md:h-140 lg:h-160.5">
              {/* Previous Image */}
              <div
                key={`previous-${previousIndex}-${activeIndex}`}
                className={`absolute inset-0 ${
                  direction === "up"
                    ? "animate-industry-old-up"
                    : "animate-industry-old-down"
                }`}
              >
                <Image
                  src={previousIndustry.image}
                  alt={`${previousIndustry.title} industry`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 436px"
                  className="object-cover"
                />
              </div>

              {/* New Image */}
              <div
                key={`active-${activeIndex}`}
                className={`absolute inset-0 ${
                  direction === "up"
                    ? "animate-industry-new-up"
                    : "animate-industry-new-down"
                }`}
              >
                <Image
                  src={activeIndustry.image}
                  alt={`${activeIndustry.title} industry`}
                  fill
                  priority={activeIndex === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 436px"
                  className="object-cover"
                />
              </div>
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
  industries: Industry[];
  activeIndex: number;
  onSelect: (index: number) => void;
  mobile?: boolean;
};

const IndustryList = ({
  industries,
  activeIndex,
  onSelect,
  mobile = false,
}: IndustryListProps) => {
  const centerIndex = Math.floor(industries.length / 2);

  return (
    <ul
      className={
        mobile
          ? "grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 md:grid-cols-4"
          : "absolute right-[10.8%] top-1/2 flex -translate-y-1/2 flex-col gap-2.5"
      }
    >
      {industries.map((industry, index) => {
        const isActive = index === activeIndex;

        if (mobile) {
          return (
            <li key={industry.title}>
              <button
                type="button"
                onClick={() => onSelect(index)}
                className={`text-left text-sm transition-all duration-300 sm:text-base ${
                  isActive ? "font-semibold text-[#01A3EF]" : "text-[#1A2937]"
                }`}
              >
                {industry.title}
              </button>
            </li>
          );
        }

        const distance = Math.abs(index - centerIndex);

        const marginLeft =
          distance <= 3 ? 38 - distance * 10 : 1 - (distance - 4) * 20;

        return (
          <li key={industry.title} style={{ marginLeft: `${marginLeft}px` }}>
            <button
              type="button"
              onClick={() => onSelect(index)}
              className={`cursor-pointer whitespace-nowrap text-left transition-all duration-300 ${
                isActive ? "font-semibold text-[#01A3EF]" : "text-[#1A2937]"
              }`}
            >
              {industry.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IndustriesSection;
