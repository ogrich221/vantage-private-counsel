import { createFileRoute } from "@tanstack/react-router";
import { PracticeDirectory } from "@/components/content-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/practice-areas")({
  head: () => siteMeta('Practice Areas', 'Explore the VANTAGE HALLCOUNSEL corporate, transaction, litigation, and regulatory practices.'),
  component: PracticeDirectory,
});
