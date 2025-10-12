import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="flex flex-col items-center gap-8 px-6 py-32 text-center">
      <div className="rounded-3xl border border-white/10 bg-[#1b0f2b]/80 p-8 shadow-card">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          <span>404.log</span>
          <span className="text-accent">missing</span>
        </div>
        <div className="mt-6 space-y-4">
          <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
            Lost in the telemetry stream
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            The command you issued points to a route that doesn&apos;t exist. Return to
            the portfolio root and continue the session.
          </p>
        </div>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent transition hover:border-accent/60 hover:bg-accent/20"
        >
          <ArrowLeft className="h-4 w-4" />
          back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
