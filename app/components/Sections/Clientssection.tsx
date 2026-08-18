"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CustomHeading from "../Custom/CustomHeading";
import Container from "../Custom/Container";
import CustomAvatar from "../Custom/Customavatar";
import CustomCarousel from "../Custom/Customcarousel";

const clients = [
  {
    name: "Hour Work",
    logo: "/images/client-1.svg",
    image: "/images/client-card-image.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    person: "Ronald Richards",
    role: "CEO of Headspace",
    avatar: "/images/avatar.png",
    rating: 3,
  },
  {
    name: "Qualtrics",
    logo: "/images/client-2.svg",
    image: "/images/client-card-image.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    person: "Ronald Richards",
    role: "CEO of Headspace",
    avatar: "/images/avatar.png",
    rating: 4,
  },
  {
    name: "Remote",
    logo: "/images/client-3.svg",
    image: "/images/client-card-image.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    person: "Ronald Richards",
    role: "CEO of Headspace",
    avatar: "/images/avatar.png",
    rating: 5,
  },
  {
    name: "Algolia",
    logo: "/images/client-4.svg",
    image: "/images/client-card-image.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    person: "Ronald Richards",
    role: "CEO of Headspace",
    avatar: "/images/avatar.png",
    rating: 4,
  },
  {
    name: "Headspace",
    logo: "/images/client-5.svg",
    image: "/images/client-card-image.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    person: "Ronald Richards",
    role: "CEO of Headspace",
    avatar: "/images/avatar.png",
    rating: 3,
  },
  {
    name: "Klenico",
    logo: "/images/client-6.svg",
    image: "/images/client-card-image.png",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    person: "Ronald Richards",
    role: "CEO of Headspace",
    avatar: "/images/avatar.png",
    rating: 5,
  },
];

export default function ClientsSection() {
  const [active, setActive] = useState(4);
  const client = clients[active];

  return (
    <section className="relative py-10 sm:py-12 md:py-16 overflow-x-clip">
      {/* Background Blurs */}
      <div className="absolute -z-50 top-0 -right-25 sm:-right-12.5 md:right-20 h-80 sm:h-100 md:h-150 aspect-square rounded-full bg-[#EED9FB] blur-[120px] sm:blur-[160px] md:blur-[200px]" />

      <div className="absolute -z-50 top-0 -left-25 sm:-left-12.5 md:left-20 h-80 sm:h-100 md:h-150 aspect-square rounded-full bg-[#C9EEFB] blur-[120px] sm:blur-[160px] md:blur-[200px]" />

      <Image
        src="/icons/client-bg-icon.png"
        alt="Background"
        fill
        className="absolute top-6! left-0 -z-20!
    h-28! w-20!
    sm:top-8 sm:h-36! sm:w-24!
    md:top-10 md:h-44! md:w-28!
    lg:h-50! lg:w-35!
    object-contain"
      />
      <Container className="relative z-10 px-4 sm:px-6">
        <CustomHeading
          reverse
          line2="Our Clients are special & so"
          line1="is the work we do for them"
          description="Bring your vision to life with captivating animated videos designed to engage, explain, and inspire your audience."
        />

        {/* Client Logos */}
        <div className="mt-6 sm:mt-8">
          <CustomCarousel
            items={clients.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "flex h-[70px] sm:h-[82px] w-full items-center justify-center gap-2 rounded-[12px] bg-white px-4 sm:px-6 border-2 transition",
                  active === i ? "border-blue-400" : "border-transparent",
                )}
              >
                <div className="relative h-8 sm:h-11 w-[100px] sm:w-[120px]">
                  <Image
                    className="object-contain mix-blend-multiply"
                    src={c.logo}
                    alt={c.name}
                    fill
                  />
                </div>
              </button>
            ))}
            showControls={false}
            itemClassName="basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/6 mb-4"
          />
        </div>

        {/* Client Review */}
        <div className="mt-2 flex flex-col overflow-hidden rounded-[20px] lg:flex-row">
          {/* Image */}
          <div className="relative min-h-[240px] w-full overflow-hidden rounded-t-[20px] border border-[#EDEDED] sm:min-h-[320px] lg:min-h-[398px] lg:w-160 lg:shrink-0 lg:rounded-r-none lg:rounded-[20px]">
            <Image
              src={client.image}
              alt={client.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between rounded-b-[20px] border border-t-0 border-[#01A3EF] bg-blue-50 px-5 py-6 sm:px-7 sm:py-8 md:px-11 md:py-9.5 lg:rounded-l-none lg:rounded-[20px] lg:border-l-0 lg:border-t">
            <div>
              {/* Logo + Rating */}
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative h-9 w-[110px] sm:h-11 sm:w-[130px]">
                  <Image
                    className="object-contain object-left mix-blend-multiply"
                    src={client.logo}
                    alt={client.name}
                    fill
                  />
                </div>

                <div className="flex gap-1.5 sm:gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image
                      key={i}
                      src="/icons/star.svg"
                      alt={i < client.rating ? "Filled star" : "Empty star"}
                      width={20}
                      height={20}
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="text-sm leading-6 text-[#1A2937] opacity-70 sm:text-base sm:leading-7">
                {client.review}
              </p>
            </div>

            {/* Person */}
            <div className="mt-8 flex items-center gap-3 sm:mt-6">
              <CustomAvatar
                className="h-12 w-12 shrink-0 bg-[#00a6f0] sm:h-14.5 sm:w-14.5"
                src={client.avatar}
                name={client.person}
              />

              <div className="min-w-0">
                <p className="text-lg font-medium text-[#1A2937] sm:text-xl md:text-2xl">
                  {client.person}
                </p>

                <p className="text-sm text-[#1A2937] opacity-70 sm:text-base">
                  {client.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
