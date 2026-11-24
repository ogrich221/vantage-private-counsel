import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Page } from "@/components/site-shell";
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
    <Page title="Counsel for the Matters That Matter Most." intro="VANTAGE HALLCOUNSEL delivers strategic legal counsel, sophisticated representation, and trusted guidance for businesses, institutions, and individuals navigating complex legal matters.">
      <div className="flex flex-wrap gap-4"><Button asChild><Link to="/consultation">Request a Consultation</Link></Button><Button asChild variant="outline"><Link to="/assess-matter">Assess Your Legal Matter</Link></Button><Button asChild variant="outline"><Link to="/dashboard">Client Portal</Link></Button></div>
      <section className="mt-16"><h2 className="text-2xl">Counsel across disciplines</h2><p className="mt-4 max-w-2xl">From consequential transactions to complex business disputes, our illustrative practices bring a coordinated legal and commercial perspective.</p><div className="mt-6 flex flex-wrap gap-6"><Link to="/practice-areas">Explore Practice Areas</Link><Link to="/attorneys">Meet Our Attorneys</Link><Link to="/insights">Read Our Insights</Link></div></section>
    </Page>
  );
}
