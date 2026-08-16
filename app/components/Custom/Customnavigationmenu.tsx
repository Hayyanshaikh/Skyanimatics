"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

interface NavLink {
  label: string;
  href: string;
}

interface CustomNavigationMenuProps {
  links: NavLink[];
}

export default function CustomNavigationMenu({
  links,
}: CustomNavigationMenuProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-7.5">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                href={link.href}
                className={`nav-link p-0 text-base font-medium hover:bg-transparent hover:text-primary ${isActive ? "nav-link-active text-primary" : "text-[#1A2937]"}`}
              >
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
