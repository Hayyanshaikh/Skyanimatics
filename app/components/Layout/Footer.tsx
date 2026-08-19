"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../Custom/Container";
import { ArrowUp } from "lucide-react";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About us", link: "#" },
      { label: "Team", link: "#" },
      { label: "Careers", link: "#" },
      { label: "Articles & News", link: "#" },
      { label: "Legal Notice", link: "#" },
      { label: "Flutter", link: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "3D Modeling", link: "#" },
      { label: "3D Animation", link: "#" },
      { label: "3D Rigging", link: "#" },
      { label: "NFT Art", link: "#" },
      { label: "AR/VR Modeling", link: "#" },
      { label: "Product Mockup", link: "#" },
    ],
  },
  {
    title: "Industries",
    grid: true,
    links: [
      { label: "Healthcare", link: "#" },
      { label: "Travel", link: "#" },
      { label: "Hospitality", link: "#" },
      { label: "Real estate", link: "#" },
      { label: "B2B", link: "#" },
      { label: "Fintech", link: "#" },
      { label: "Logistics", link: "#" },
      { label: "E-Learning", link: "#" },
      { label: "Consultant", link: "#" },
      { label: "E-Commerce", link: "#" },
      { label: "Legal", link: "#" },
      { label: "Small Businesses", link: "#" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", link: "#", icon: "/icons/facebook.svg" },
  { label: "LinkedIn", link: "#", icon: "/icons/linkedin.svg" },
  { label: "Twitter", link: "#", icon: "/icons/twitter.svg" },
];

const bottomLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sitemap", link: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(176.97deg,#01A5F0_11.89%,#C74BC8_133.4%,#162CB6_156.91%,#EC618D_220.61%)] pt-[60px] md:pt-[92px] text-white">
      {/* Background Logo */}
      <div className="absolute -bottom-10 -left-10 z-0 h-[280px] w-[220px] sm:h-[350px] sm:w-[280px] md:-bottom-10 md:left-0 md:h-142 md:w-100">
        <Image
          className="object-contain object-center"
          src="/icons/footer-logo.png"
          alt=""
          fill
        />
      </div>

      <Container className="relative z-10">
        {/* Back To Top */}
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute -top-6 right-4 cursor-pointer flex size-12.5 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 md:right-6"
        >
          <ArrowUp size={20} />
        </button>

        {/* Main Footer */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-42">
          {/* Logo */}
          <div className="flex shrink-0 gap-2">
            <Image
              src="/images/white-logo.svg"
              alt="Skyanimatics"
              width={270}
              height={56}
              className="h-auto w-[210px] sm:w-[240px] md:w-[270px]"
            />
          </div>

          {/* Footer Sections */}
          <div className="grid w-full gap-8 grid-cols-2 lg:flex lg:items-start lg:gap-24.5">
            {footerSections.map((section) => (
              <div
                key={section.title}
                className={section.grid ? "col-span-2 lg:col-span-1" : ""}
              >
                <h4 className="mb-5 inline-block border-b-2 border-white/60 pb-1 text-xl font-semibold sm:mb-7.5 sm:text-2xl">
                  {section.title}
                </h4>

                {section.grid ? (
                  <div className="grid grid-cols-2 gap-x-6 text-sm text-white/80 sm:gap-x-9">
                    <ul className="space-y-2">
                      {section.links.slice(0, 6).map((item) => (
                        <li key={item.label}>
                          <Link
                            className="text-sm transition-colors hover:text-white sm:text-base"
                            href={item.link}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <ul className="space-y-2">
                      {section.links.slice(6).map((item) => (
                        <li key={item.label}>
                          <Link
                            className="text-sm transition-colors hover:text-white sm:text-base"
                            href={item.link}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul className="space-y-2 text-sm text-white/80">
                    {section.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          className="text-sm transition-colors hover:text-white sm:text-base"
                          href={item.link}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social + Contact */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-7 md:flex-row">
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                aria-label={social.label}
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-white"
              >
                {/* Social Icon */}
                <div className="relative h-4 w-4">
                  <Image alt={social.label} src={social.icon} fill />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center text-sm md:text-left">
            <a
              href="tel:+9221123456789"
              className="block underline leading-5.5"
            >
              (021) 123456789
            </a>

            <a
              href="mailto:hello@skyanimatics.com"
              className="block break-all underline leading-5.5"
            >
              hello@skyanimatics.com
            </a>
          </div>
        </div>

        {/* Copyright + Bottom Links */}
        <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-white/20 py-5 text-xs text-white/70 md:flex-row">
          <p className="text-center md:text-left">
            © 2025 Skyanimatics. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {bottomLinks.map((item) => (
              <Link key={item.label} href={item.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
