"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import CustomNavigationMenu from "../Custom/Customnavigationmenu";
import CustomButton from "../Custom/Custombutton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Company", href: "/company" },
  { label: "Clients", href: "/clients" },
  { label: "Learn", href: "/learn" },
];

export default function Header() {
  return (
    <header className="absolute w-full z-50">
      <div className="mx-3 mt-3 flex items-center justify-between rounded-[12px] border border-[#EDEDED] bg-white/60 px-4 py-3 backdrop-blur-md sm:mx-5">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Skyanimatics"
            width={270}
            height={57}
            priority
            className="h-auto w-45 sm:w-55 lg:w-67.5"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <CustomNavigationMenu links={navLinks} />
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <CustomButton
            variant="gradient"
            className="custom-button-gradient w-44"
          >
            Contact Us
          </CustomButton>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#EDEDED]"
                >
                  <Menu className="h-5 w-5" />
                </button>
              }
            />

            <SheetContent side="right" className="px-8">
              <nav className="mt-8 mb-6 flex h-full flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-[#1A2937]"
                  >
                    {link.label}
                  </Link>
                ))}

                <CustomButton
                  variant="gradient"
                  className="custom-button-gradient mt-auto w-full"
                >
                  Contact Us
                </CustomButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
