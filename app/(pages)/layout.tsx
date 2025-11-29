import SiteHeader from "@/shared/components/SiteHeader";
import React from "react";

function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4 md:p-10 w-full min-h-screen relative">
      <div className="border-3 grid h-full grid-rows-[110px_1fr_200px]  border-black rounded-3xl overflow-hidden relative">
        <SiteHeader />
        <div className=" self-start">{children}</div>
        <footer className="">footer</footer>
      </div>
    </main>
  );
}

export default SiteRootLayout;
