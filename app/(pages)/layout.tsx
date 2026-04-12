import React from "react";

// Layout stripped for "Coming Soon" mode.
// To restore: re-add SiteHeader, SiteFooter, and the grid wrapper.
function SiteRootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default SiteRootLayout;
