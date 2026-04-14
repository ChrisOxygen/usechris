"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/shared/constants/nav";

export default function NavMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 px-10 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-surface"
          : "border-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-source-code-pro text-md text-muted hover:text-foreground transition-colors duration-200"
        >
          <span className="text-accent">{"<"}</span>
          <span className="text-foreground">Chris Okafor</span>
          <span className="text-accent/60"> /</span>
          <span className="text-accent">{">"}</span>
        </Link>

        {/* Nav items */}
        <div className="flex items-center h-5">
          {NAV_ITEMS.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && <div className="w-px h-2 bg-accent/40 mx-5" />}
              <Link
                href={item.href}
                className="font-squada-one text-sm text-muted uppercase tracking-[0.16em] hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
}
