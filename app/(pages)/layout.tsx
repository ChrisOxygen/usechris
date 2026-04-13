import React from "react";
import NavMenu from "@/shared/components/NavMenu";

function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-background/40">
      <NavMenu />
      {children}
    </div>
  );
}

export default SiteRootLayout;
