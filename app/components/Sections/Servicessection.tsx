"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";
import CustomSlider from "../Custom/CustomSlider";
import PlayButton from "../Custom/PlayButton";

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
  const serviceCards = services.map((service, i) => {
    const isPurple = i % 4 >= 2;

    return (
      <div
        key={i}
        className="rounded-[12px] overflow-hidden border border-gray-100 bg-white"
      >
        {/* Image */}
        <div className="relative w-full h-40 sm:h-52 lg:h-63.5 rounded-[16px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 230px, (max-width: 1024px) 250px, 285px"
            className="object-cover rounded-b-[16px]"
          />

          <PlayButton size={95} color={isPurple ? "#5454d4" : "#FEDC5A"} />
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
    );
  });

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white">
      <Container>
        <CustomHeading
          reverse
          line2="Premier Animated"
          line1="Video Services"
          description="Bring your vision to life with captivating animated video designed to engage, explain, and inspire your audience."
        />

        <div className="mt-8 sm:mt-10 relative">
          {/* Left Fade */}
          <span className="hidden md:block absolute h-full w-80 bg-linear-to-r from-white to-transparent top-0 left-0 z-50 pointer-events-none" />

          {/* Right Fade */}
          <span className="hidden md:block absolute h-full w-80 bg-linear-to-l from-white to-transparent top-0 right-0 z-50 pointer-events-none" />

          <CustomSlider
            items={serviceCards}
            itemClassName="max-w-[230px] sm:max-w-[250px] lg:max-w-[285px]"
            spaceBetween={24}
            autoplay
            autoplayDelay={3000}
            centeredSlides
          />
        </div>
      </Container>
    </section>
  );
}
