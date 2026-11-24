import { createFileRoute } from "@tanstack/react-router";
import { FirmPage } from "@/components/content-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/our-firm")({
  head: () => siteMeta('Our Firm', 'Explore the mission, vision, values, and approach of VANTAGE HALLCOUNSEL, a fictional law firm.'),
  component: FirmPage,
});
