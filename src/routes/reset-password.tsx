import { createFileRoute, redirect } from "@tanstack/react-router";
import { ResetPasswordPage } from "@/components/auth-page";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/reset-password")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
  head: () => siteMeta('Reset Client Password', 'Reset your VANTAGE HALLCOUNSEL client account password.'),
  component: ResetPasswordPage,
});
