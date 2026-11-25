import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { InquiryForm } from "@/components/inquiry-form";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/contact")({ head: () => siteMeta('Contact Our Legal Team', 'Start a conversation with VANTAGE HALLCOUNSEL. Submit your confidential inquiry to arrange a direct consultation with our senior legal team.'), component: InquiryPage });
function InquiryPage() { return <Page title={'Contact Our Legal Team'} intro={'Start a conversation with VANTAGE HALLCOUNSEL. Submit your confidential inquiry to arrange a direct consultation with our senior legal team.'}><div className="max-w-2xl"><InquiryForm kind="general" stepped={false} /></div></Page>; }
