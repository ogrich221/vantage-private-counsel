import { createFileRoute, redirect } from "@tanstack/react-router";
import { PaymentPage } from "@/components/payment-page";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/pay-online")({
  beforeLoad: () => { throw redirect({ to: "/" }); },
  head: () => siteMeta('Client Payment Portal', 'Secure online client payment processing for retainers, invoices, and consultation fees.'),
  component: PaymentPage,
});
