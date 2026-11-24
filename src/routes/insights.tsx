import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/insight-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/insights")({
  head: () => siteMeta('Insights & Publications', 'Strategic legal perspectives and analysis on corporate governance, litigation, M&A transactions, and regulatory developments.'),
  component: InsightsPage,
});
