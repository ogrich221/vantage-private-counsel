import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthPage } from "@/components/auth-page";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/auth")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
  head: () => siteMeta('Client Login & Registration', 'Create an email-verified account or securely sign in to the VANTAGE HALLCOUNSEL client portal.'),
  component: AuthPage,
});
