import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { InquiryForm } from "@/components/inquiry-form";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/consultation")({ head: () => siteMeta('Request a Consultation', 'Tell us about your objectives and the matter you would like to discuss.'), component: InquiryPage });
function InquiryPage() { return <Page title={'Request a Consultation'} intro={'Tell us about your objectives and the matter you would like to discuss.'}><div className="max-w-2xl"><InquiryForm kind="consultation" stepped={false} /></div></Page>; }
