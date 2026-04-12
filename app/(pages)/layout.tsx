import React from "react";
import NavMenu from "@/shared/components/NavMenu";

function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
}

export default SiteRootLayout;
