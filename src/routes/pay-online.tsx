import { createFileRoute } from "@tanstack/react-router";
import { PaymentPage } from "@/components/payment-page";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/pay-online")({
  head: () => siteMeta('Client Payment Portal', 'Secure online client payment processing for retainers, invoices, and consultation fees.'),
  component: PaymentPage,
});
