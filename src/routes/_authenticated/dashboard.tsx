import { createFileRoute, redirect } from "@tanstack/react-router";
import { ClientDashboard, dashboardOptions } from "@/components/client-dashboard";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/_authenticated/dashboard")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
  head: () => siteMeta("Client Dashboard", "Manage your private VANTAGE HALLCOUNSEL account, inquiries, documents, and simulated payments."),
  loader: ({ context }) => context.queryClient.ensureQueryData(dashboardOptions),
  component: ClientDashboard,
});
