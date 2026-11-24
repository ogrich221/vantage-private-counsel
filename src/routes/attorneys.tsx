import { createFileRoute } from "@tanstack/react-router";
import { AttorneyDirectory } from "@/components/content-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/attorneys")({
  head: () => siteMeta('Attorneys', 'Meet the senior partners and trial counsel of VANTAGE HALLCOUNSEL.'),
  component: AttorneyDirectory,
});
