"use client";

import ThemeSwitch from "@/shared/components/ThemeSwitch";
import { SITE_NAV } from "@/shared/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className=" flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-20 py-4 lg:py-8 border-b-2 sm:border-b-3 border-black gap-4 lg:gap-0">
      <Link href={"/"} className="text-2xl font-bold">
        <h2 className=" text-3xl font-russo-one">CHRIS OKAFOR</h2>
      </Link>
      <div className=" flex lg:flex-row items-center gap-3 lg:gap-6">
        <menu className=" flex flex-wrap items-center justify-center gap-3 lg:gap-6">
          {SITE_NAV.map((item) => {
            const isActive = pathname === item.href;
            const isTestimonial = item.name.toLowerCase() === "testimonials";
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg lg:text-xl transition-all duration-300 hover:text-black ${
                  isActive
                    ? "font-bold text-black"
                    : "font-semibold text-gray-500"
                } ${isTestimonial ? "hidden lg:inline-block" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </menu>
        <ThemeSwitch />
      </div>
    </header>
  );
}

export default SiteHeader;
