import SiteHeader from "@/shared/components/SiteHeader";
import SiteFooter from "@/shared/components/SiteFooter";
import React from "react";

function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4 md:p-10 w-full min-h-screen relative bg-white dark:bg-black ">
      <div className="grid h-full grid-rows-[110px_1fr_auto] border-2 sm:border-3 border-black dark:border-white rounded-3xl overflow-hidden relative">
        <SiteHeader />
        <div className=" self-start">{children}</div>
        <SiteFooter />
      </div>
    </main>
  );
}

export default SiteRootLayout;
