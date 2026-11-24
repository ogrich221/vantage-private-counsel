import { createFileRoute } from "@tanstack/react-router";
import { PaymentPage } from "@/components/payment-page";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/pay-online")({
  head: () => siteMeta('Online Payment Demonstration', 'Record simulated invoice, consultation, legal service, and retainer payments. No money is charged.'),
  component: PaymentPage,
});
