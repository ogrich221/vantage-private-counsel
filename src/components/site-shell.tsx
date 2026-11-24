import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10 text-navy-foreground transition-all">
      <div className="px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="grid size-9 place-items-center bg-primary font-serif text-lg text-primary-foreground rounded-xs shadow-sm group-hover:scale-105 transition-transform">V</span>
            <span className="leading-tight">
              <span className="block font-serif text-lg font-bold">Vantage Hall</span>
              <span className="block text-[0.6rem] tracking-[0.3em] opacity-80 font-medium">COUNSEL</span>
            </span>
          </Link>
          <Button size="icon" variant="outline" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="border-navy-foreground/30 bg-white/5 text-navy-foreground lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
          <nav aria-label="Main navigation" onClick={() => setOpen(false)} className={`${open ? "flex" : "hidden"} w-full flex-col gap-4 text-xs uppercase tracking-widest font-medium lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-6`}>
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <Link to="/practice-areas" className="hover:text-brand-green transition-colors">Practice Areas</Link>
            <Link to="/attorneys" className="hover:text-brand-green transition-colors">Attorneys</Link>
            <Link to="/our-firm" className="hover:text-brand-green transition-colors">Our Firm</Link>
            <Link to="/insights" className="hover:text-brand-green transition-colors">Insights</Link>
            <Link to="/pay-online" className="hover:text-brand-green transition-colors">Pay Online</Link>
            <Link to="/assess-matter" className="hover:text-brand-green transition-colors">Assess Matter</Link>
            <Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link>
            <Link to="/dashboard" className="glass-pill px-4 py-2 font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-xs shadow-sm transition-all">Client Portal</Link>
          </nav>
        </div>
      </div>
      <div className="tricolor h-0.5" />
    </header>
    {children}
    <footer className="mt-20 bg-navy px-6 py-16 text-navy-foreground border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <strong className="font-serif text-xl tracking-wide">VANTAGE HALLCOUNSEL</strong>
          <p className="mt-4 text-sm text-navy-foreground/80 leading-relaxed">Strategic legal counsel for enterprise leadership, private capital sponsors, and institutional clients navigating complex transactions and disputes.</p>
          <p className="mt-5 text-xs text-navy-foreground/70 leading-relaxed">
            Client Inquiries: inquiries@vantagehallcounsel.com<br />
            Telephone: +1 (212) 555-0146<br />
            Primary Chambers: 450 Lexington Avenue, New York, NY
          </p>
        </div>
        <div><h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green">Quick Links</h2><div className="mt-4 grid gap-2.5 text-sm text-navy-foreground/80"><Link to="/our-firm" className="hover:text-white transition-colors">Our Firm</Link><Link to="/attorneys" className="hover:text-white transition-colors">Attorneys</Link><Link to="/insights" className="hover:text-white transition-colors">Insights</Link><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></div></div>
        <div><h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green">Practice Areas</h2><div className="mt-4 grid gap-2.5 text-sm text-navy-foreground/80">{["corporate-business-law", "litigation-trials", "commercial-law", "private-equity", "intellectual-property", "mergers-acquisitions"].map(slug => <Link key={slug} to="/practice-areas/$slug" params={{ slug }} className="hover:text-white capitalize transition-colors">{slug.replaceAll("-", " ")}</Link>)}</div></div>
        <div><h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green">Client Services</h2><div className="mt-4 grid gap-2.5 text-sm text-navy-foreground/80"><Link to="/dashboard" className="hover:text-white transition-colors">Client Portal</Link><Link to="/pay-online" className="hover:text-white transition-colors">Pay Online</Link><Link to="/consultation" className="hover:text-white transition-colors">Request Consultation</Link><Link to="/assess-matter" className="hover:text-white transition-colors">Assess Legal Matter</Link><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link><Link to="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</Link></div></div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-foreground/60">
        <p>© 2026 VANTAGE HALLCOUNSEL. All Rights Reserved.</p>
        <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
      </div>
    </footer>
  </>;
}

export function Page({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return <main className="mx-auto max-w-7xl px-6 py-14"><p className="eyebrow mb-4">VANTAGE HALLCOUNSEL · STRATEGIC PRACTICE</p><h1 className="text-4xl md:text-5xl">{title}</h1><p className="mt-6 max-w-3xl text-lg">{intro}</p><div className="mt-10">{children}</div></main>;
}