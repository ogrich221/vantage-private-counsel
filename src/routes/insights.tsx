import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/insight-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/insights")({
  head: () => siteMeta('Insights & Publications', 'Search sample legal perspectives on business, litigation, transactions, and regulation.'),
  component: InsightsPage,
});
