import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="bg-navy text-navy-foreground"><div className="px-6 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
        <Link to="/" className="flex items-center gap-3"><span className="grid size-9 place-items-center bg-primary font-serif text-lg text-primary-foreground">V</span><span className="leading-tight"><span className="block font-serif text-lg">Vantage Hall</span><span className="block text-[0.6rem] tracking-[0.3em] opacity-70">COUNSEL</span></span></Link>
        <Button size="icon" variant="outline" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="border-navy-foreground/30 bg-transparent text-navy-foreground lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        <nav aria-label="Main navigation" onClick={() => setOpen(false)} className={`${open ? "flex" : "hidden"} w-full flex-col gap-4 text-xs uppercase tracking-widest lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-5`}>
          <Link to="/">Home</Link><Link to="/practice-areas">Practice Areas</Link><Link to="/attorneys">Attorneys</Link><Link to="/our-firm">Our Firm</Link><Link to="/insights">Insights</Link><Link to="/pay-online">Pay Online</Link><Link to="/assess-matter">Assess Matter</Link><Link to="/contact">Contact</Link><Link to="/dashboard" className="bg-primary px-4 py-2 font-semibold text-primary-foreground">Client Portal</Link>
        </nav>
      </div></div>
      <div className="tricolor h-1" />
    </header>
    {children}
    <footer className="mt-20 bg-navy px-6 py-14 text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div><strong>VANTAGE HALLCOUNSEL</strong><p className="mt-4">Strategic legal counsel. A fictional firm demonstration.</p><p className="mt-4">Demonstration contact: inquiries@vantagehallcounsel.example<br />+1 (212) 555-0146<br />Demonstration office: New York, NY</p></div>
        <div><h2>Quick Links</h2><div className="mt-4 grid gap-2"><Link to="/our-firm">Our Firm</Link><Link to="/attorneys">Attorneys</Link><Link to="/insights">Insights</Link><Link to="/contact">Contact</Link></div></div>
        <div><h2>Practice Areas</h2><div className="mt-4 grid gap-2">{["corporate-business-law", "litigation-trials", "commercial-law", "private-equity", "intellectual-property", "mergers-acquisitions"].map(slug => <Link key={slug} to="/practice-areas/$slug" params={{ slug }}>{slug.replaceAll("-", " ")}</Link>)}</div></div>
        <div><h2>Client Services</h2><div className="mt-4 grid gap-2"><Link to="/dashboard">Client Portal</Link><Link to="/pay-online">Pay Online</Link><Link to="/consultation">Request Consultation</Link><Link to="/assess-matter">Assess Legal Matter</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-of-service">Terms of Service</Link><Link to="/legal-disclaimer">Legal Disclaimer</Link></div></div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm">© 2026 VANTAGE HALLCOUNSEL. All Rights Reserved. Fictional demonstration; not a real law firm.</p>
    </footer>
  </>;
}

export function Page({ title, intro, children }: { title: string; intro: string; children?: ReactNode }) {
  return <main className="mx-auto max-w-7xl px-6 py-14"><p className="eyebrow mb-4">VANTAGE HALLCOUNSEL · Fictional demonstration</p><h1 className="text-4xl md:text-5xl">{title}</h1><p className="mt-6 max-w-3xl text-lg">{intro}</p><div className="mt-10">{children}</div></main>;
}