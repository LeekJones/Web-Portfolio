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
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-muted-foreground/70">
        404
      </span>
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
          Lost in the telemetry stream
        </h1>
        <p className="max-w-xl text-base text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s reconnect and
          explore the portfolio instead.
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:border-primary/60 hover:bg-primary/30"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
};

export default NotFound;
