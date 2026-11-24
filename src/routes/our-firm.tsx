import { createFileRoute } from "@tanstack/react-router";
import { FirmPage } from "@/components/content-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/our-firm")({
  head: () => siteMeta('Our Firm', 'Explore the mission, vision, values, and strategic counsel approach of VANTAGE HALLCOUNSEL.'),
  component: FirmPage,
});
