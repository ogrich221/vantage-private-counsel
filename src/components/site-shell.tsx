import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageProvider, LanguageSwitcher, useLanguage } from "@/lib/i18n";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SiteShellContent>{children}</SiteShellContent>
    </LanguageProvider>
  );
}

function SiteShellContent({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t, dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10 text-navy-foreground transition-all">
        <div className="px-6 py-3.5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
            {/* Top-Left Corner: Language Switcher and Logo */}
            <div className="flex items-center gap-3.5">
              <LanguageSwitcher />
              <div className="h-5 w-px bg-white/20 hidden sm:block" />
              <Link to="/" className="flex items-center gap-3 group">
                <span className="grid size-9 place-items-center bg-primary font-serif text-lg text-primary-foreground rounded-xs shadow-sm group-hover:scale-105 transition-transform">
                  V
                </span>
                <span className="leading-tight">
                  <span className="block font-serif text-lg font-bold tracking-tight">Vantage Hall</span>
                  <span className="block text-[0.6rem] tracking-[0.3em] opacity-80 font-medium">
                    {t("tagline.counsel")}
                  </span>
                </span>
              </Link>
            </div>

            <Button
              size="icon"
              variant="outline"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              className="border-navy-foreground/30 bg-white/5 text-navy-foreground lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </Button>

            <nav
              aria-label="Main navigation"
              onClick={() => setOpen(false)}
              className={`${open ? "flex" : "hidden"} w-full flex-col gap-4 text-xs uppercase tracking-widest font-medium lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-6`}
            >
              <Link to="/" className="hover:text-brand-green transition-colors">{t("nav.home")}</Link>
              <Link to="/practice-areas" className="hover:text-brand-green transition-colors">{t("nav.practiceAreas")}</Link>
              <Link to="/attorneys" className="hover:text-brand-green transition-colors">{t("nav.attorneys")}</Link>
              <Link to="/our-firm" className="hover:text-brand-green transition-colors">{t("nav.ourFirm")}</Link>
              <Link to="/insights" className="hover:text-brand-green transition-colors">{t("nav.insights")}</Link>
              <Link to="/pay-online" className="hover:text-brand-green transition-colors">{t("nav.payOnline")}</Link>
              <Link to="/assess-matter" className="hover:text-brand-green transition-colors">{t("nav.assessMatter")}</Link>
              <Link to="/contact" className="hover:text-brand-green transition-colors">{t("nav.contact")}</Link>
              <Link
                to="/dashboard"
                className="glass-pill px-4 py-2 font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-xs shadow-sm transition-all"
              >
                {t("nav.clientPortal")}
              </Link>
            </nav>
          </div>
        </div>
        <div className="tricolor h-0.5" />
      </header>

      <div className="flex-1">{children}</div>

      <footer className="mt-auto bg-navy px-6 py-16 text-navy-foreground border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <strong className="font-serif text-xl tracking-wide">VANTAGE HALLCOUNSEL</strong>
            <p className="mt-4 text-sm text-navy-foreground/80 leading-relaxed">
              {t("footer.desc")}
            </p>
            <p className="mt-5 text-xs text-navy-foreground/70 leading-relaxed">
              Client Inquiries: inquiries@vantagehallcounsel.com<br />
              Telephone: +1 (212) 555-0146<br />
              Primary Chambers: 450 Lexington Avenue, New York, NY
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green">{t("footer.quick")}</h2>
            <div className="mt-4 grid gap-2.5 text-sm text-navy-foreground/80">
              <Link to="/our-firm" className="hover:text-white transition-colors">{t("nav.ourFirm")}</Link>
              <Link to="/attorneys" className="hover:text-white transition-colors">{t("nav.attorneys")}</Link>
              <Link to="/insights" className="hover:text-white transition-colors">{t("nav.insights")}</Link>
              <Link to="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green">{t("footer.practices")}</h2>
            <div className="mt-4 grid gap-2.5 text-sm text-navy-foreground/80">
              {["corporate-business-law", "litigation-trials", "commercial-law", "private-equity", "intellectual-property", "mergers-acquisitions"].map(slug => (
                <Link key={slug} to="/practice-areas/$slug" params={{ slug }} className="hover:text-white capitalize transition-colors">
                  {slug.replaceAll("-", " ")}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green">{t("footer.services")}</h2>
            <div className="mt-4 grid gap-2.5 text-sm text-navy-foreground/80">
              <Link to="/dashboard" className="hover:text-white transition-colors">{t("nav.clientPortal")}</Link>
              <Link to="/pay-online" className="hover:text-white transition-colors">{t("nav.payOnline")}</Link>
              <Link to="/consultation" className="hover:text-white transition-colors">Request Consultation</Link>
              <Link to="/assess-matter" className="hover:text-white transition-colors">{t("nav.assessMatter")}</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-foreground/60">
          <p>{t("footer.rights")}</p>
          <p>{t("footer.disclaimer")}</p>
        </div>
      </footer>
    </div>
  );
}

export function Page({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-slate-950 text-slate-100 py-16 px-6 overflow-hidden">
      {/* Ambient background glow orbs for glass refraction */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 size-[550px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute top-1/2 -right-32 size-[500px] rounded-full bg-brand-green/12 blur-[170px]" />
        <div className="absolute -bottom-24 left-1/3 size-[600px] rounded-full bg-blue-700/10 blur-[180px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 rounded-full glass-pill px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-brand-green mb-4">
          <span className="size-1.5 rounded-full bg-brand-green" />
          <span>VANTAGE HALLCOUNSEL · STRATEGIC PRACTICE</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">{intro}</p>
        <div className="mt-10 glass-card-dark rounded-2xl p-8 md:p-12 border border-white/15 backdrop-blur-2xl shadow-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}