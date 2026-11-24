import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { siteMeta, attorneys } from "@/lib/site-content";
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
  Sparkles,
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
  // 4 Featured Hero Lawyers: 3 Male, 1 Female (Realistic Editorial Photography)
  const heroAttorneys = attorneys.filter((a) =>
    ["alexander-bennett", "elizabeth-morgan", "daniel-chen", "julian-thorne"].includes(a.slug)
  );

  return (
    <main className="relative bg-slate-950 text-slate-100 overflow-hidden selection:bg-primary selection:text-white">
      {/* AMBIENT GLOW ORBS FOR GLASSMORPHIC REFRACTION */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 size-[650px] rounded-full bg-primary/15 blur-[160px]" />
        <div className="absolute top-[35%] -right-40 size-[600px] rounded-full bg-brand-green/12 blur-[170px]" />
        <div className="absolute top-[65%] -left-32 size-[700px] rounded-full bg-blue-700/12 blur-[180px]" />
        <div className="absolute -bottom-20 right-1/4 size-[550px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      {/* HERO SECTION - Ultra-Modern Court Facility with Continuous Left-to-Right Spin + Glass Styling */}
      <section className="relative z-10 overflow-hidden border-b border-white/10 min-h-[640px] lg:min-h-[760px] flex flex-col justify-center">
        {/* CONTINUOUS ROTATING / PANNING ULTRA-MODERN COURT FACILITY */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="animate-court-spin h-full flex">
            <div className="relative h-full w-1/2 shrink-0">
              <img
                src="/images/modern-court-facility.jpg"
                alt="Ultra-modern court facility architectural judicial hall"
                className="size-full object-cover object-center filter brightness-95 contrast-110"
              />
            </div>
            <div className="relative h-full w-1/2 shrink-0">
              <img
                src="/images/modern-court-facility.jpg"
                alt="Ultra-modern court facility architectural judicial hall"
                className="size-full object-cover object-center filter brightness-95 contrast-110"
              />
            </div>
          </div>
          {/* Layered Glassmorphic Vignettes & Atmospheric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36 w-full">
          {/* Glass Floating Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full glass-pill px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-slate-200 shadow-lg">
            <span className="size-2 rounded-full bg-brand-green animate-pulse" />
            <span>VANTAGE HALL COUNSEL · HIGH-STAKES ADVOCACY</span>
          </div>

          <h1 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.12] md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-sm">
            Decisive counsel for matters of enduring consequence.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 drop-shadow-xs">
            When enterprise stability, transformative transactions, or critical reputations hang in the balance, Vantage Hall delivers rigorous advocacy and discreet fiduciary counsel. We represent boards, private funds, and leadership teams with unyielding focus.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-medium px-7 py-6 text-base rounded-md shadow-lg shadow-primary/25 border border-white/20 transition-all hover:scale-[1.02]"
            >
              <Link to="/assess-matter">
                Assess Your Legal Matter <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass-pill border-white/25 text-white hover:bg-white/15 uppercase tracking-wider text-xs px-6 py-6 rounded-md transition-all hover:scale-[1.02]"
            >
              <Link to="/consultation">Request Confidential Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10 uppercase tracking-wider text-xs px-5 py-6 rounded-md transition-all"
            >
              <Link to="/pay-online">Client Payment Portal</Link>
            </Button>
          </div>

          {/* KEY CREDIBILITY & BENCHMARK METRICS IN A FLOATING FROSTED GLASS SHELF */}
          <div className="mt-16 glass-card-dark rounded-xl p-8 border border-white/15 backdrop-blur-2xl shadow-2xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="border-r border-white/10 last:border-r-0 pr-4">
                <p className="font-serif text-3xl font-bold text-white md:text-4xl">$25B+</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider font-medium text-slate-400">Transaction & Advisory Volume</p>
              </div>
              <div className="border-r border-white/10 last:border-r-0 pr-4">
                <p className="font-serif text-3xl font-bold text-brand-green md:text-4xl">94%</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider font-medium text-slate-400">Favorable Trial & Dispute Record</p>
              </div>
              <div className="border-r border-white/10 last:border-r-0 pr-4">
                <p className="font-serif text-3xl font-bold text-white md:text-4xl">35+</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider font-medium text-slate-400">Years Senior Partner Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-white md:text-4xl">100%</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider font-medium text-slate-400">Partner-Led Direct Counsel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 HERO LAWYERS SECTION: 3 MALE, 1 FEMALE WITH GLASS CARDS & AUTHENTIC PORTRAITS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.25em] text-brand-green">
              <Sparkles className="size-3.5" />
              <span>Senior Leadership & Trial Counsel</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Direct partner advocacy. Proven judgment.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400 text-base leading-relaxed">
              We reject the volume-firm model of delegating critical decisions to junior associate pools. Every matter is personally strategized and executed by senior partners with battle-tested courtroom and boardroom records.
            </p>
          </div>
          <div>
            <Button asChild variant="outline" className="glass-pill border-white/20 text-white hover:bg-white/15 font-medium px-5 py-5 rounded-md">
              <Link to="/attorneys">
                View All Firm Attorneys <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 4 FROSTED GLASS LAWYER CARDS (3 Male, 1 Female) */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {heroAttorneys.map((lawyer) => (
            <article
              key={lawyer.slug}
              className="group glass-card-dark relative flex flex-col justify-between rounded-xl border border-white/15 hover:border-primary/50 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Real-world dignified photographic portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900 border-b border-white/10">
                  <img
                    src={lawyer.image}
                    alt={`${lawyer.name} - ${lawyer.title}`}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="size-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="glass-pill inline-block rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-wider font-semibold text-brand-green border border-brand-green/30">
                      {lawyer.practice.split("&")[0].trim()}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                    <Link to="/attorneys/$slug" params={{ slug: lawyer.slug }}>
                      {lawyer.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {lawyer.title}
                  </p>

                  {/* SIMPLE AND CONVINCING DETAIL IN FROSTED GLASS CALLOUT */}
                  <div className="mt-4 rounded-lg glass-pill border-l-2 border-primary p-3.5 text-xs leading-relaxed text-slate-200">
                    <span className="mb-1 block font-mono text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                      Track Record Highlight
                    </span>
                    <p className="font-medium italic text-slate-100">"{lawyer.convincingDetail}"</p>
                  </div>

                  {/* Core competencies */}
                  <div className="mt-4 space-y-2">
                    {lawyer.experience.slice(0, 2).map((exp) => (
                      <div key={exp} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-green" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 p-4 bg-white/[0.02] flex items-center justify-between">
                <Link
                  to="/attorneys/$slug"
                  params={{ slug: lawyer.slug }}
                  className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
                >
                  Full Profile <ArrowRight className="size-3" />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs text-slate-400 hover:text-white font-medium transition-colors"
                >
                  Direct Inquiry
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CORE PRACTICES - Frosted Glass Grid */}
      <section className="relative z-10 border-y border-white/10 py-24 lg:py-32 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-green">Disciplined Legal Capabilities</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">Comprehensive counsel across commercial disciplines</h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
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
                  className="glass-card-dark rounded-xl p-8 border border-white/15 backdrop-blur-xl flex flex-col justify-between hover:border-brand-green/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-green/5"
                >
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-lg glass-pill text-brand-green border border-brand-green/30 shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">{p.description}</p>
                    <p className="mt-4 text-xs font-medium text-slate-400 border-t border-white/10 pt-3">
                      {p.detail}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/practice-areas/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                    >
                      Explore Practice Scope <ArrowRight className="ml-1.5 size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="glass-pill border-white/20 text-white hover:bg-white/15 px-8 py-6 rounded-md">
              <Link to="/practice-areas">Browse All 10 Practice Disciplines →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* THE VANTAGE STANDARD - FIRM PILLARS WITH FROSTED GLASS PANELS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-green">The Vantage Standard</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Why leadership trusts our counsel when everything is on the line.
            </h2>
            <p className="mt-6 text-slate-300 text-base leading-relaxed">
              In high-stakes legal matters, conventional firm incentives often lead to bloated teams and generic memorandums. Vantage Hall operates under an uncompromising boutique model built for velocity, clarity, and accountability.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3.5 glass-pill p-3.5 rounded-lg border border-white/10">
                <div className="mt-0.5 rounded-full bg-brand-green/20 p-1 text-brand-green shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Direct Senior Oversight</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Your primary contact is the partner authoring your strategy, not an intermediary.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 glass-pill p-3.5 rounded-lg border border-white/10">
                <div className="mt-0.5 rounded-full bg-brand-green/20 p-1 text-brand-green shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Commercially Grounded Legal Strategy</h4>
                  <p className="text-xs text-slate-400 mt-0.5">We align legal defense with enterprise balance sheets and commercial timelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 glass-pill p-3.5 rounded-lg border border-white/10">
                <div className="mt-0.5 rounded-full bg-brand-green/20 p-1 text-brand-green shrink-0">
                  <CheckCircle2 className="size-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Absolute Institutional Discretion</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Stringent information barriers and confidential handling for reputation-sensitive matters.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="glass-card-dark rounded-xl border border-white/15 p-6 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="size-10 rounded-lg glass-pill flex items-center justify-center text-primary border border-primary/30">
                <Lock className="size-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-white">Fiduciary Rigor</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                We approach every engagement with strict fiduciary loyalty. We deliver candid assessments early, advising clients when to litigate fiercely and when to execute surgical settlements.
              </p>
            </div>
            <div className="glass-card-dark rounded-xl border border-white/15 p-6 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="size-10 rounded-lg glass-pill flex items-center justify-center text-primary border border-primary/30">
                <Clock className="size-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-white">Rapid Response Agility</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Critical situations do not observe business hours. When temporary restraining orders, regulatory subpoenas, or hostile moves emerge, our response team is deployed within hours.
              </p>
            </div>
            <div className="glass-card-dark rounded-xl border border-white/15 p-6 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="size-10 rounded-lg glass-pill flex items-center justify-center text-primary border border-primary/30">
                <Award className="size-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-white">Trial-Ready Leverage</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Opponents negotiate differently when they know counsel is fully prepared to take the matter through verdict. Our courtroom readiness delivers tangible settlement leverage.
              </p>
            </div>
            <div className="glass-card-dark rounded-xl border border-white/15 p-6 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform">
              <div className="size-10 rounded-lg glass-pill flex items-center justify-center text-primary border border-primary/30">
                <FileText className="size-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-white">Transparent Billing</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                No opaque billing or surprise allocations. We offer structured phase estimates, fixed-scope matter evaluations, and regular fiduciary accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPRESENTATIVE IMPACT / CLIENT PERSPECTIVES IN FROSTED GLASS */}
      <section className="relative z-10 border-t border-white/10 py-24 bg-slate-950/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-green">Client Trust & Advisory Impact</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Trusted by corporate boards, fund managers, and private clients
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Representative feedback from leadership teams and institutional general counsels.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="glass-card-dark rounded-xl border border-white/15 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
              <p className="font-serif italic text-base leading-relaxed text-slate-200">
                "When a sudden shareholder derivative suit threatened our planned merger, Elizabeth Morgan took charge of the litigation strategy. Her courtroom composure secured dismissal with prejudice in 60 days."
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-sm text-white">Chief Legal Officer</p>
                <p className="text-xs text-slate-400">Multinational Technology Group</p>
              </div>
            </div>

            <div className="glass-card-dark rounded-xl border border-white/15 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
              <p className="font-serif italic text-base leading-relaxed text-slate-200">
                "Alexander Bennett brings a rare equilibrium of ruthless legal analysis and sharp commercial acumen. His guidance during our $420M cross-border carve-out was indispensable."
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-sm text-white">Managing Partner</p>
                <p className="text-xs text-slate-400">Transatlantic Private Capital Fund</p>
              </div>
            </div>

            <div className="glass-card-dark rounded-xl border border-white/15 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
              <p className="font-serif italic text-base leading-relaxed text-slate-200">
                "Julian Thorne’s regulatory insight defused what could have been a devastating federal enforcement proceeding into an orderly, closed inquiry without public penalty."
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-sm text-white">Audit Committee Chair</p>
                <p className="text-xs text-slate-400">Financial Services Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATTER ASSESSMENT & ENGAGEMENT CALL TO ACTION - Grand Glass Container */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="glass-card-dark rounded-2xl p-10 md:p-16 border border-white/20 backdrop-blur-3xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.25em] text-brand-green mb-2">
              <Sparkles className="size-3.5" />
              <span>Confidential Consultation</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              When the stakes require experienced counsel.
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              Whether you are preparing for a transformative transaction, confronting complex litigation, or conducting an internal inquiry, our partners are ready to evaluate your objectives under strict confidentiality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-sm font-semibold uppercase tracking-wider rounded-md shadow-lg shadow-primary/25 border border-white/20 transition-all hover:scale-[1.02]">
              <Link to="/assess-matter">
                Assess Your Matter <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass-pill border-white/25 text-white hover:bg-white/15 px-8 py-6 text-sm font-semibold uppercase tracking-wider rounded-md transition-all hover:scale-[1.02]">
              <Link to="/contact">Speak With a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
