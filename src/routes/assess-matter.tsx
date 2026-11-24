import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { InquiryForm } from "@/components/inquiry-form";
import { siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/assess-matter")({ head: () => siteMeta('Assess Your Legal Matter', 'A considered first step toward understanding your legal needs.'), component: InquiryPage });
function InquiryPage() { return <Page title={'Assess Your Legal Matter'} intro={'A considered first step toward understanding your legal needs.'}><div className="max-w-2xl"><InquiryForm kind="assessment" stepped={true} /></div></Page>; }
