import { Outlet } from "react-router-dom";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const PageLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[60] -translate-y-20 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-semibold text-primary-foreground transition focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay bg-[size:40px_40px] opacity-30" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-radial-fade" />
      <SiteHeader />
      <main id="main-content" className="relative flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default PageLayout;
