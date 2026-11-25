import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { InquiryForm } from "@/components/inquiry-form";
import { siteMeta, FIRM_EMAIL, FIRM_ADDRESS, FIRM_WEBMAIL_URL } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink, ShieldCheck, Clock, Copy, Check, MessageSquare } from "lucide-react";
import { openLiveChat } from "@/components/live-chat";

export const Route = createFileRoute("/contact")({
  head: () =>
    siteMeta(
      'Contact Our Legal Team',
      'Start a conversation with VANTAGE HALLCOUNSEL. Submit your confidential inquiry to arrange a direct consultation with our senior legal team.'
    ),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(FIRM_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Page
      title="Contact Our Legal Team"
      intro="Connect directly with our senior managing partners and practice chairs. Transmit your confidential matter inquiry or communicate directly through our official webmail."
    >
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Formal Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-green block">
              Direct Matter Submission
            </span>
            <h2 className="text-2xl font-serif font-bold text-white mt-1">
              Confidential Intake Form
            </h2>
            <p className="text-slate-400 text-xs mt-1">
              All submissions are encrypted and routed directly to our conflict-clearance committee.
            </p>
          </div>
          <InquiryForm kind="general" stepped={false} />
        </div>

        {/* Right Column: Official Webmail & Chamber Communications */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card-dark rounded-xl p-6 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
              <div className="p-2 rounded-lg bg-brand-green/20 text-brand-green">
                <Mail className="size-5" />
              </div>
              <div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-brand-green block">
                  Official Webmail & Inquiries
                </span>
                <h3 className="text-lg font-serif font-bold text-white">
                  Direct Electronic Mail
                </h3>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-300 leading-relaxed">
              Clients and corporate counsel may correspond directly with our chambers via our dedicated domain webmail address:
            </p>

            {/* Email Address Display Box */}
            <div className="mt-4 p-3.5 rounded-lg bg-white/[0.04] border border-white/15 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[0.65rem] uppercase tracking-wider text-slate-400 block">Chambers Webmail</span>
                <a
                  href={`mailto:${FIRM_EMAIL}?subject=Confidential%20Legal%20Matter%20Inquiry%20-%20Vantage%20Hall%20Counsel`}
                  className="text-xs sm:text-sm font-mono font-semibold text-brand-green hover:underline truncate block"
                  title={FIRM_EMAIL}
                >
                  {FIRM_EMAIL}
                </a>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyEmail}
                className="size-8 shrink-0 text-slate-300 hover:text-white hover:bg-white/10"
                title="Copy email address"
              >
                {copied ? <Check className="size-4 text-brand-green" /> : <Copy className="size-4" />}
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90 font-semibold text-xs uppercase tracking-wider rounded-md shadow-md shadow-primary/20"
              >
                <a href={`mailto:${FIRM_EMAIL}?subject=Confidential%20Legal%20Matter%20Inquiry%20-%20Vantage%20Hall%20Counsel`}>
                  <Mail className="mr-1.5 size-3.5" /> Email
                </a>
              </Button>

              <Button
                type="button"
                onClick={openLiveChat}
                className="bg-brand-green/20 text-brand-green hover:bg-brand-green/30 border border-brand-green/40 font-semibold text-xs uppercase tracking-wider rounded-md shadow-sm transition-all"
              >
                <MessageSquare className="mr-1.5 size-3.5" /> Live Chat
              </Button>

              <Button
                asChild
                variant="outline"
                className="glass-pill border-white/20 text-slate-200 hover:text-white text-xs uppercase tracking-wider"
              >
                <a href={FIRM_WEBMAIL_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 size-3.5" /> Webmail
                </a>
              </Button>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-green shrink-0" />
                <span>End-to-end encrypted TLS communications</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-brand-green shrink-0" />
                <span>Monitored 24/7 for emergency injunctions & counsel</span>
              </div>
            </div>
          </div>

          {/* Chamber Headquarters Card */}
          <div className="glass-card-dark rounded-xl p-6 border border-white/20 backdrop-blur-xl space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
              Chambers Headquarters
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Primary Office</strong>
                  <span>{FIRM_ADDRESS}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
