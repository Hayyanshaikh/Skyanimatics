"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";
import CustomSlider from "../Custom/CustomSlider";

const services = [
  {
    image: "/images/animated-explainer.png",
    title: "Animated Explainer",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/corporate-explainer.png",
    title: "Corporate Explainer",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/internal-training.png",
    title: "Internal Training",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/motion-graphics.png",
    title: "Motion Graphics",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/animated-explainer.png",
    title: "Animated Explainer",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/corporate-explainer.png",
    title: "Corporate Explainer",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/internal-training.png",
    title: "Internal Training",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
  {
    image: "/images/motion-graphics.png",
    title: "Motion Graphics",
    description:
      "Build brand trust with professional, polished, and business-focused explainers.",
  },
];

export default function ServicesSection() {
  const serviceCards = services.map((service, i) => (
    <div
      key={i}
      className="rounded-[12px] overflow-hidden border border-gray-100"
    >
      {/* Image */}
      <div className="relative w-full h-40 sm:h-52 lg:h-63.5 rounded-[16px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover rounded-b-[16px]"
        />

        {/* Play Button */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-23 lg:h-23 bg-[#FEDC5A]/5 rounded-full" />
          <div className="absolute w-15 h-15 sm:w-18 sm:h-18 lg:w-21 lg:h-21 bg-[#FEDC5A]/10 rounded-full" />
          <div className="absolute w-14 h-14 sm:w-16 sm:h-16 lg:w-19 lg:h-19 bg-[#FEDC5A]/30 rounded-full" />
          <div className="absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 bg-[#FEDC5A]/50 rounded-full" />

          <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-15 lg:w-15 bg-[#FEDC5A]/50 rounded-full flex items-center justify-center">
            <Play
              fill="white"
              stroke="white"
              size={16}
              className="sm:w-4.5 sm:h-4.5 lg:w-5.5 lg:h-5.5"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-2 pb-4 pt-8 sm:px-4 sm:pb-5 sm:pt-10 lg:pt-12.5 text-center">
        <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-900">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-55 mx-auto">
          {service.description}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white">
      <CustomHeading
        reverse
        line2="Premier Animated"
        line1="Video Services"
        description="Bring your vision to life with captivating animated video designed to engage, explain, and inspire your audience."
      />

      <div className="mt-8 sm:mt-10">
        <CustomSlider
          items={serviceCards}
          itemClassName="max-w-[230px] sm:max-w-[250px] lg:max-w-[285px]"
          spaceBetween={24}
          autoplay
          autoplayDelay={3000}
          loop
          centeredSlides
        />
      </div>
    </section>
  );
}
