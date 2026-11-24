import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-city.jpg";
import { siteMeta, attorneys, practices } from "@/lib/site-content";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  Building2,
  Landmark,
  ArrowRight,
  Lock,
  Clock,
  TrendingUp,
  Award,
  CheckCircle2,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () =>
    siteMeta(
      "Strategic Legal Counsel & Private Practice",
      "VANTAGE HALLCOUNSEL delivers strategic legal counsel, trial advocacy, and high-stakes corporate guidance for enterprises, funds, and leadership teams."
    ),
  component: Index,
});

export function Index() {
  // 4 Featured Hero Lawyers: 3 Male, 1 Female
  const heroAttorneys = attorneys.filter((a) =>
    ["alexander-bennett", "elizabeth-morgan", "daniel-chen", "julian-thorne"].includes(a.slug)
  );

  return (
    <main className="bg-background text-foreground">
      {/* HERO SECTION - Ultra-Modern Court Facility with Continuous Left-to-Right Panoramic Spin */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground border-b border-navy-foreground/15 min-h-[620px] lg:min-h-[720px] flex flex-col justify-center">
        {/* CONTINUOUS ROTATING / PANNING ULTRA-MODERN COURT FACILITY */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="animate-court-spin h-full flex">
            <div className="relative h-full w-1/2 shrink-0">
              <img
                src="/images/modern-court-facility.jpg"
                alt="Ultra-modern supreme court facility architectural hall"
                className="size-full object-cover object-center filter brightness-90 contrast-115 saturate-110"
              />
            </div>
            <div className="relative h-full w-1/2 shrink-0">
              <img
                src="/images/modern-court-facility.jpg"
                alt="Ultra-modern supreme court facility architectural hall"
                className="size-full object-cover object-center filter brightness-90 contrast-115 saturate-110"
              />
            </div>
          </div>
          {/* Architectural gradient overlays ensuring text clarity and dramatic depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/55 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-navy/80 backdrop-blur-md px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-navy-foreground/90 shadow-xs">
            <span className="size-2 rounded-full bg-brand-green animate-pulse" />
            VANTAGE HALL COUNSEL · ULTRA-MODERN JUDICIAL FACILITY
          </div>

          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.15] md:text-6xl lg:text-7xl">
            Decisive counsel for matters of enduring consequence.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-foreground/85">
            When enterprise stability, transformative transactions, or critical reputations hang in the balance, Vantage Hall delivers rigorous advocacy and discreet fiduciary counsel. We represent boards, private funds, and leadership teams with unyielding focus.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 py-6 text-base shadow-sm">
              <Link to="/assess-matter">
                Assess Your Legal Matter <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-foreground/30 bg-navy/40 backdrop-blur-sm uppercase tracking-wider text-xs text-navy-foreground hover:bg-navy-foreground/15 hover:text-navy-foreground px-6 py-6"
            >
              <Link to="/consultation">Request Confidential Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-navy-foreground/80 hover:text-navy-foreground hover:bg-white/10 uppercase tracking-wider text-xs px-5 py-6"
            >
              <Link to="/pay-online">Client Payment Portal</Link>
            </Button>
          </div>

          {/* KEY CREDIBILITY & BENCHMARK METRICS */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-navy-foreground/15 pt-10 sm:grid-cols-4">
            <div>
              <p className="font-serif text-3xl font-semibold text-navy-foreground md:text-4xl">$25B+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-foreground/70">Transaction & Advisory Volume</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-navy-foreground md:text-4xl">94%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-foreground/70">Favorable Trial & Dispute Record</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-navy-foreground md:text-4xl">35+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-foreground/70">Years Senior Partner Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-navy-foreground md:text-4xl">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-foreground/70">Partner-Led Direct Counsel</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 HERO LAWYERS SECTION: 3 MALE, 1 FEMALE WITH CONVINCING DETAILS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border">
          <div>
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">Senior Leadership & Trial Counsel</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl">Direct partner advocacy. Proven judgment.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-base leading-relaxed">
              We reject the volume-firm model of delegating critical decisions to junior associate pools. Every matter is personally strategized and executed by senior partners with battle-tested courtroom and boardroom records.
            </p>
          </div>
          <div>
            <Button asChild variant="outline" className="border-border hover:bg-muted font-medium">
              <Link to="/attorneys">
                View All Firm Attorneys <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 4 LAWYER CARDS (3 Male, 1 Female) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {heroAttorneys.map((lawyer) => (
            <article
              key={lawyer.slug}
              className="group flex flex-col justify-between rounded-sm border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div>
                {/* Real-world dignified photographic portrait with clean fallback */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={lawyer.image}
                    alt={`${lawyer.name} - ${lawyer.title}`}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="size-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.03] transition-all duration-300"
                    onError={(e) => {
                      // Fallback if image network fails
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block rounded-xs bg-navy/90 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider font-semibold text-brand-green border border-brand-green/30">
                      {lawyer.practice.split("&")[0]?.trim()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    <Link to="/attorneys/$slug" params={{ slug: lawyer.slug }}>
                      {lawyer.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {lawyer.title}
                  </p>

                  {/* SIMPLE AND CONVINCING DETAIL */}
                  <div className="mt-4 rounded-xs border-l-2 border-primary bg-muted/60 p-3 text-xs leading-relaxed text-foreground/90">
                    <span className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      Track Record Highlight
                    </span>
                    <p className="font-medium italic">"{lawyer.convincingDetail}"</p>
                  </div>

                  {/* Core competencies */}
                  <div className="mt-4 space-y-1.5">
                    {lawyer.experience.slice(0, 2).map((exp) => (
                      <div key={exp} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-green" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border/80 p-4 bg-muted/20 flex items-center justify-between">
                <Link
                  to="/attorneys/$slug"
                  params={{ slug: lawyer.slug }}
                  className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline inline-flex items-center gap-1"
                >
                  Full Profile <ArrowRight className="size-3" />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs text-muted-foreground hover:text-foreground font-medium"
                >
                  Direct Inquiry
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CORE PRACTICES - Substantive, Comprehensive & Professional */}
      <section className="bg-muted/30 border-y border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">Disciplined Legal Capabilities</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Comprehensive counsel across commercial disciplines</h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              We structure our practice around the critical lifecycle events of businesses, institutions, and family offices. Each practice area operates under senior partner direction with unified strategic oversight.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Building2,
                slug: "corporate-business-law",
                title: "Corporate & Business Law",
                description: "Executive board advisory, shareholder covenants, corporate governance, and complex multi-tier commercial structuring.",
                detail: "Ensuring structural integrity from seed funding through enterprise governance.",
              },
              {
                icon: Scale,
                slug: "litigation-trials",
                title: "Litigation & Federal Trials",
                description: "Aggressive, calculated representation in federal courtrooms, commercial arbitrations, and high-exposure shareholder disputes.",
                detail: "Focused on decisive resolution and preserving commercial viability under pressure.",
              },
              {
                icon: Briefcase,
                slug: "mergers-acquisitions",
                title: "Mergers & Acquisitions",
                description: "Full-lifecycle buy-side and sell-side transaction counsel, strategic due diligence, carve-outs, and cross-border integration.",
                detail: "Managing complex deal dynamics, antitrust scrutiny, and definitive negotiations.",
              },
              {
                icon: Landmark,
                slug: "government-regulatory",
                title: "Government & Regulatory Defense",
                description: "Proactive compliance frameworks, SEC/DOJ inquiry defense, internal investigations, and high-stakes crisis response.",
                detail: "Defending corporate integrity and neutralizing regulatory exposure before enforcement.",
              },
              {
                icon: TrendingUp,
                slug: "private-equity",
                title: "Private Equity & Capital Formation",
                description: "Fund formation, sponsor advisory, management incentive plans, debt facilities, and institutional equity deployment.",
                detail: "Aligning LP and GP interests with enduring value preservation structures.",
              },
              {
                icon: ShieldCheck,
                slug: "intellectual-property",
                title: "Intellectual Property & Technology",
                description: "Proprietary software licensing, trade secret protection, patent transaction diligence, and cross-border IP transfers.",
                detail: "Safeguarding core competitive innovations and strategic brand assets.",
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.slug}
                  className="rounded-sm border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/50 transition-colors"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xs bg-navy text-brand-green">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                    <p className="mt-4 text-xs font-medium text-foreground/80 border-t border-border/60 pt-3">
                      {p.detail}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/practice-areas/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                    >
                      Explore Practice Scope <ArrowRight className="ml-1 size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/practice-areas">Browse All 10 Practice Disciplines →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* THE VANTAGE STANDARD - FIRM PHILOSOPHY & DISTINCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">The Vantage Standard</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Why leadership trusts our counsel when everything is on the line.
            </h2>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed">
              In high-stakes legal matters, conventional firm incentives often lead to bloated teams and generic memorandums. Vantage Hall operates under an uncompromising boutique model built for velocity, clarity, and accountability.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1 text-primary">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Direct Senior Oversight</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Your primary contact is the partner authoring your strategy, not an intermediary.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1 text-primary">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Commercially Grounded Legal Strategy</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">We align legal defense with enterprise balance sheets and commercial timelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-1 text-primary">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Absolute Institutional Discretion</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Stringent information barriers and confidential handling for reputation-sensitive matters.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
              <Lock className="size-6 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-bold">Fiduciary Rigor</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                We approach every engagement with strict fiduciary loyalty. We deliver candid assessments early, advising clients when to litigate fiercely and when to execute surgical settlements.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
              <Clock className="size-6 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-bold">Rapid Response Agility</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Critical situations do not observe business hours. When temporary restraining orders, regulatory subpoenas, or hostile moves emerge, our response team is deployed within hours.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
              <Award className="size-6 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-bold">Trial-Ready Leverage</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Opponents negotiate differently when they know counsel is fully prepared to take the matter through verdict. Our courtroom readiness delivers tangible settlement leverage.
              </p>
            </div>
            <div className="rounded-sm border border-border bg-card p-6 shadow-xs">
              <FileText className="size-6 text-primary" />
              <h3 className="mt-4 font-serif text-lg font-bold">Transparent Billing</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                No opaque billing or surprise allocations. We offer structured phase estimates, fixed-scope matter evaluations, and regular fiduciary accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPRESENTATIVE IMPACT / CLIENT PERSPECTIVES */}
      <section className="bg-navy text-navy-foreground py-20 border-t border-navy-foreground/15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-green">Client Trust & Advisory Impact</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-navy-foreground">
              Trusted by corporate boards, fund managers, and private clients
            </h2>
            <p className="mt-4 text-sm text-navy-foreground/80">
              Representative feedback illustrating our approach to complex corporate crises and high-exposure engagements.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-sm border border-navy-foreground/15 bg-navy-foreground/5 p-8 flex flex-col justify-between">
              <p className="font-serif italic text-base leading-relaxed text-navy-foreground/90">
                "When a sudden shareholder derivative suit threatened our planned merger, Elizabeth Morgan took charge of the litigation strategy. Her courtroom composure secured dismissal with prejudice in 60 days."
              </p>
              <div className="mt-6 border-t border-navy-foreground/10 pt-4">
                <p className="font-semibold text-sm text-navy-foreground">Chief Legal Officer</p>
                <p className="text-xs text-navy-foreground/60">Multinational Technology Group</p>
              </div>
            </div>

            <div className="rounded-sm border border-navy-foreground/15 bg-navy-foreground/5 p-8 flex flex-col justify-between">
              <p className="font-serif italic text-base leading-relaxed text-navy-foreground/90">
                "Alexander Bennett brings a rare equilibrium of ruthless legal analysis and sharp commercial acumen. His guidance during our $420M cross-border carve-out was indispensable."
              </p>
              <div className="mt-6 border-t border-navy-foreground/10 pt-4">
                <p className="font-semibold text-sm text-navy-foreground">Managing Partner</p>
                <p className="text-xs text-navy-foreground/60">Transatlantic Private Capital Fund</p>
              </div>
            </div>

            <div className="rounded-sm border border-navy-foreground/15 bg-navy-foreground/5 p-8 flex flex-col justify-between">
              <p className="font-serif italic text-base leading-relaxed text-navy-foreground/90">
                "Julian Thorne’s regulatory insight defused what could have been a devastating federal enforcement proceeding into an orderly, closed inquiry without public penalty."
              </p>
              <div className="mt-6 border-t border-navy-foreground/10 pt-4">
                <p className="font-semibold text-sm text-navy-foreground">Audit Committee Chair</p>
                <p className="text-xs text-navy-foreground/60">Financial Services Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATTER ASSESSMENT & ENGAGEMENT CALL TO ACTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="rounded-sm border border-border bg-card p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-primary">Confidential Consultation</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold">
              When the stakes require experienced counsel.
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Whether you are preparing for a transformative transaction, confronting complex litigation, or conducting an internal inquiry, our partners are ready to evaluate your objectives under strict confidentiality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button asChild size="lg" className="px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <Link to="/assess-matter">
                Assess Your Matter <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-sm font-semibold uppercase tracking-wider">
              <Link to="/contact">Speak With a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
