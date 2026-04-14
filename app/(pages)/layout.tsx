import React from "react";
import NavMenu from "@/shared/components/NavMenu";
import SiteFooter from "@/shared/components/SiteFooter";

function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-background/40">
      <NavMenu />
      {children}
      <SiteFooter />
    </div>
  );
}

export default SiteRootLayout;
