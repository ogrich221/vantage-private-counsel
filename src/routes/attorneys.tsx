import { createFileRoute } from "@tanstack/react-router";
import { AttorneyDirectory } from "@/components/content-pages";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/attorneys")({
  head: () => siteMeta('Attorneys', 'Meet the clearly fictional demonstration attorneys of VANTAGE HALLCOUNSEL.'),
  component: AttorneyDirectory,
});
