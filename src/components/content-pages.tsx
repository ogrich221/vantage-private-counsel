import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Page } from "./site-shell";
import { practices, attorneys } from "@/lib/site-content";

export function PracticeDirectory() { return <Page title="Legal Services" intro="A considered perspective. Comprehensive counsel across corporate and commercial disciplines."><div className="grid gap-8 md:grid-cols-2">{practices.map(p => <article key={p.slug} className="border-b border-border pb-6"><h2 className="text-2xl">{p.name}</h2><p className="my-4">{p.intro}</p><Button asChild variant="outline"><Link to="/practice-areas/$slug" params={{ slug: p.slug }}>Explore Services</Link></Button></article>)}</div></Page>; }
export function PracticeDetail({ slug }: { slug: string }) {
  const p = practices.find(item => item.slug === slug);
  if (!p) return null;
  return <Page title={p.name} intro={p.intro}><div className="max-w-3xl"><h2 className="text-2xl">Focused on your objectives</h2><p className="mt-4">Our {p.name.toLowerCase()} group brings together rigorous legal analysis, deep commercial understanding, and strategic execution. Every engagement begins with understanding the client's commercial objectives and the nuances of the matter.</p><h2 className="mt-8 text-2xl">Services and specializations</h2><ul className="mt-4 grid gap-3">{p.services.map(service => <li key={service}>— {service}</li>)}</ul><h2 className="mt-8 text-2xl">Why clients choose this approach</h2><p className="mt-4">Clear communication, practical options, and careful attention to the decisions that matter. We aim to present a coordinated perspective rather than advice in isolation. Every engagement is tailored to our clients' strategic priorities and risk parameters.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild><Link to="/consultation">Request a Consultation</Link></Button><Button asChild variant="outline"><Link to="/contact">Contact the Legal Team</Link></Button></div></div></Page>;
}
export function AttorneyDirectory() {
  return (
    <Page
      title="Our Attorneys"
      intro="Senior partner leadership. Direct counsel. A steadfast commitment to strategic advocacy."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {attorneys.filter((a) => a.slug !== "sophia-reynolds").map((a) => (
          <article
            key={a.slug}
            className="flex flex-col sm:flex-row gap-6 rounded-sm border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-xs"
          >
            {a.image && (
              <div className="w-full sm:w-40 shrink-0 aspect-[4/5] rounded-xs overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={a.name}
                  width={200}
                  height={250}
                  loading="lazy"
                  className="size-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-all duration-300"
                />
              </div>
            )}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-primary block">
                  {a.practice}
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground mt-1">
                  <Link to="/attorneys/$slug" params={{ slug: a.slug }} className="hover:text-primary transition-colors">
                    {a.name}
                  </Link>
                </h2>
                <p className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {a.title}
                </p>

                {a.convincingDetail && (
                  <div className="mt-3 rounded-xs border-l-2 border-primary bg-muted/60 p-2.5 text-xs text-foreground/90 font-medium italic">
                    "{a.convincingDetail}"
                  </div>
                )}

                <p className="my-3 text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 border-t border-border/60">
                <Button asChild size="sm" variant="outline">
                  <Link to="/attorneys/$slug" params={{ slug: a.slug }}>
                    View Full Profile
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link to="/contact">Contact Attorney</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

export function AttorneyDetail({ slug }: { slug: string }) {
  const a = attorneys.find((item) => item.slug === slug);
  if (!a) return null;
  return (
    <Page title={a.name} intro={`${a.title} · ${a.practice}`}>
      <div className="grid gap-10 md:grid-cols-12 max-w-5xl">
        {a.image && (
          <div className="md:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-xs border border-border bg-muted">
              <img
                src={a.image}
                alt={a.name}
                width={400}
                height={500}
                className="size-full object-cover object-top"
              />
            </div>
            {a.convincingDetail && (
              <div className="mt-4 rounded-xs border-l-2 border-primary bg-muted/60 p-3 text-xs leading-relaxed text-foreground/90">
                <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-primary mb-1">
                  Track Record Highlight
                </span>
                <p className="font-medium italic">"{a.convincingDetail}"</p>
              </div>
            )}
          </div>
        )}
        <div className={a.image ? "md:col-span-8" : "md:col-span-12"}>
          <h2 className="text-2xl font-serif font-bold">Biography & Legal Focus</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">{a.bio}</p>

          <h2 className="mt-8 text-2xl font-serif font-bold">Key Areas of Expertise & Experience</h2>
          <ul className="mt-4 grid gap-2.5">
            {a.experience.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-border">
            <Button asChild size="lg">
              <Link to="/consultation">Schedule Consultation with {a.name.split(" ")[0]}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Direct Office Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}
export function FirmPage() {
  return (
    <Page title="Our Firm" intro="Thoughtful counsel. Strategic perspective. A commitment to what matters.">
      <div className="max-w-3xl grid gap-8">
        <section>
          <h2 className="text-2xl font-serif font-bold">VANTAGE HALLCOUNSEL</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            VANTAGE HALLCOUNSEL is a premier corporate law firm built around an uncompromising philosophy: legal counsel should connect sound legal analysis with the commercial realities of our clients' world. Our multidisciplinary legal team brings together corporate transactions, high-stakes dispute resolution, and regulatory strategy.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Delivering thoughtful, strategic, and dependable legal guidance with direct senior partner engagement across every mandate.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold">Our Vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Building an enduring legal institution recognized for professional excellence, relentless advocacy, and client-focused representation.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold">Our Core Values</h2>
          <ul className="mt-4 grid gap-3">
            {["Integrity & Fiduciary Loyalty", "Professional Excellence", "Absolute Confidentiality", "Accountability & Transparency", "Strategic Commercial Thinking", "Direct Senior Partner Advocacy"].map((value) => (
              <li key={value} className="flex items-center gap-2 text-sm text-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-serif font-bold">Our Approach</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We combine rigorous legal acumen, commercial awareness, and strategic foresight to resolve complicated matters. The process begins with listening, continues through exhaustive analysis, and centers on decisive options that protect enterprise value and executive reputations.
          </p>
        </section>
      </div>
    </Page>
  );
}