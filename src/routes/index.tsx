import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-city.jpg";
import { siteMeta } from "@/lib/site-content";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => siteMeta("Strategic Legal Counsel", "VANTAGE HALLCOUNSEL delivers strategic legal counsel and sophisticated representation. A fictional law firm demonstration."),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={heroImg} alt="New York skyline at dusk" width={1920} height={1088} className="absolute inset-0 size-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="eyebrow">VANTAGE HALLCOUNSEL · Fictional demonstration</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-tight md:text-7xl">Counsel for the matters that matter most.</h1>
          <p className="mt-8 max-w-2xl text-lg opacity-85">Strategic legal counsel, sophisticated representation, and trusted guidance for businesses, institutions, and individuals navigating complex legal matters.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg"><Link to="/assess-matter">Assess your legal matter →</Link></Button>
            <Button asChild size="lg" className="uppercase tracking-widest"><Link to="/consultation">Request a consultation →</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-brand-green bg-transparent uppercase tracking-widest text-navy-foreground hover:bg-brand-green/20 hover:text-navy-foreground"><Link to="/pay-online">Client payment portal</Link></Button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="eyebrow">Our Practices</p>
        <h2 className="mt-3 text-3xl md:text-4xl">Counsel across disciplines</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">From consequential transactions to complex business disputes, our illustrative practices bring a coordinated legal and commercial perspective.</p>
        <div className="mt-8 flex flex-wrap gap-6 font-medium text-primary"><Link to="/practice-areas">Explore practice areas →</Link><Link to="/attorneys">Meet our attorneys →</Link><Link to="/insights">Read our insights →</Link></div>
      </section>
    </main>
  );
}
