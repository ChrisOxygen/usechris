"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/shared/constants/nav";

export default function NavMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
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

          {/* Desktop nav items — hidden on mobile */}
          <div className="hidden md:flex items-center h-5">
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

          {/* Mobile hamburger / X button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end w-8 h-8 gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px bg-accent transition-all duration-300 origin-center ${
                mobileOpen ? "w-5 rotate-45 translate-y-1.75" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-accent transition-all duration-300 ${
                mobileOpen ? "opacity-0 w-4.5" : "w-4.5"
              }`}
            />
            <span
              className={`block h-px bg-accent transition-all duration-300 origin-center ${
                mobileOpen ? "w-5 -rotate-45 -translate-y-1.75" : "w-3"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile sheet — only rendered below md */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred backdrop — clicking closes the sheet */}
        <div
          className="absolute inset-0 bg-background/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Sheet panel slides in from the right */}
        <div
          className={`absolute top-0 right-0 h-full w-[65%] bg-surface border-l border-surface flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="group text-center"
              >
                <p className="font-squada-one text-2xl text-foreground tracking-[0.12em] group-hover:text-accent transition-colors duration-200">
                  {item.label}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
