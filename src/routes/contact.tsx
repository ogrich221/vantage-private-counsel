import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { InquiryForm } from "@/components/inquiry-form";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/contact")({ head: () => siteMeta('Contact Our Legal Team', 'Start a conversation with VANTAGE HALLCOUNSEL. This demonstration form saves your inquiry but does not contact a practicing lawyer.'), component: InquiryPage });
function InquiryPage() { return <Page title={'Contact Our Legal Team'} intro={'Start a conversation with VANTAGE HALLCOUNSEL. This demonstration form saves your inquiry but does not contact a practicing lawyer.'}><div className="max-w-2xl"><InquiryForm kind="general" stepped={false} /></div></Page>; }
