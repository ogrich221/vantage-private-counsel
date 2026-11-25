import { createFileRoute } from "@tanstack/react-router";
import { PracticeDirectory } from "@/components/content-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/practice-areas")({
  head: () => siteMeta('Legal Services', 'Explore the VANTAGE HALLCOUNSEL corporate, transaction, litigation, and regulatory capabilities.'),
  component: PracticeDirectory,
});
