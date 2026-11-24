import { useState, useEffect, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { recordDemoPayment } from "@/lib/legal.functions";
import { Page } from "./site-shell";
import { Button } from "./ui/button";
import { paymentSchema } from "@/lib/legal-validation";
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowLeft,
  Mail,
  CreditCard,
  Lock,
  Building2,
  FileCheck,
} from "lucide-react";

export interface LawyerTier {
  id: string;
  position: string;
  fee: number;
  feeFormatted: string;
  level: string;
  description: string;
  badge?: string;
  features: string[];
}

export const LAWYER_FEES: LawyerTier[] = [
  {
    id: "junior-associate",
    position: "Junior Associate Lawyer",
    fee: 500,
    feeFormatted: "$500",
    level: "Associate Level I",
    description: "Statutory legal research, factual discovery analysis, preliminary document review, and foundational brief preparation.",
    features: [
      "Statutory and case law research",
      "Pleadings and factual memoranda drafting",
      "Document indexing & discovery organization",
      "Supervised partner oversight",
    ],
  },
  {
    id: "associate",
    position: "Associate Lawyer",
    fee: 1000,
    feeFormatted: "$1,000",
    level: "Associate Level II",
    description: "Commercial contract review, standard motion practice, due diligence audit, and regulatory filing preparation.",
    features: [
      "Commercial agreement and NDA structuring",
      "Due diligence data room review",
      "Routine court appearance coordination",
      "Direct client intake communication",
    ],
  },
  {
    id: "senior-associate",
    position: "Senior Associate Lawyer",
    fee: 1500,
    feeFormatted: "$1,500",
    level: "Senior Associate",
    description: "Complex transactional covenants, contested hearing advocacy, witness depositions, and transaction closing management.",
    features: [
      "Cross-border contract negotiation",
      "Evidentiary hearing & deposition advocacy",
      "Lead coordinator for diligence teams",
      "Strategic litigation discovery management",
    ],
  },
  {
    id: "legal-consultant",
    position: "Legal Consultant",
    fee: 2000,
    feeFormatted: "$2,000",
    level: "Advisory Specialist",
    description: "Specialized regulatory compliance audits, jurisdictional risk evaluations, and cross-border commercial advisory.",
    features: [
      "Sector-specific regulatory audits",
      "Cross-border transaction risk assessment",
      "Corporate governance policy evaluation",
      "Independent statutory risk reporting",
    ],
  },
  {
    id: "senior-legal-counsel",
    position: "Senior Legal Counsel",
    fee: 2500,
    feeFormatted: "$2,500",
    level: "Senior Practice Counsel",
    description: "High-exposure corporate transactions, intellectual property portfolio defense, internal investigations, and executive counsel.",
    features: [
      "High-value transactional structuring",
      "Intellectual property & technology protection",
      "Internal investigation & compliance oversight",
      "Direct board and C-suite legal advisory",
    ],
  },
  {
    id: "partner-level-counsel",
    position: "Partner-Level Counsel",
    fee: 3000,
    feeFormatted: "$3,000",
    level: "Partner Leadership",
    badge: "Most Requested",
    description: "Lead trial advocacy, federal courtroom appearances, high-stakes M&A negotiations, and strategic crisis management.",
    features: [
      "Lead trial and federal appellate advocacy",
      "Multi-billion dollar transaction architecture",
      "Federal agency defense (SEC, DOJ, FTC)",
      "Direct senior partner strategy and access",
    ],
  },
  {
    id: "executive-legal-rep",
    position: "Executive Legal Representation",
    fee: 3500,
    feeFormatted: "$3,500",
    level: "Executive & Sovereign Tier",
    badge: "Premier Mandate",
    description: "Board-level crisis response, hostile takeover defense, emergency injunctive relief, and sovereign wealth representation.",
    features: [
      "Hostile takeover & shareholder defense",
      "Emergency TRO & injunction mobilization",
      "Sovereign entities & private fund counsel",
      "Dedicated multi-partner crisis strike team",
    ],
  },
];

type Receipt = { id: string; reference: string; description: string; amount_cents: number; created_at: string };

export function downloadReceipt(payment: Receipt) {
  const text = `VANTAGE HALLCOUNSEL\nPAYMENT RECEIPT\n\nTransaction: ${payment.id}\nReference: ${payment.reference}\nDescription: ${payment.description}\nAmount (USD): $${(payment.amount_cents / 100).toFixed(2)}\nDate: ${payment.created_at}\n\nThank you for choosing Vantage Hall Counsel.\n`;
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `VH-receipt-${payment.id}.txt`;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function PaymentPage() {
  const [selectedTier, setSelectedTier] = useState<LawyerTier | null>(null);
  const [showInvoiceSection, setShowInvoiceSection] = useState(false);

  // Existing invoice payment state
  const pay = useServerFn(recordDemoPayment);
  const queryClient = useQueryClient();
  const [signedIn, setSignedIn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [receipt, setReceipt] = useState<Receipt | null>(null);

  useEffect(() => {
    void supabase.auth.getUser().then(({ data }) => {
      setSignedIn(Boolean(data.user));
    });
  }, []);

  async function handleInvoiceSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const fields = new FormData(event.currentTarget);
    const parsed = paymentSchema.safeParse({
      reference: fields.get("reference"),
      description: fields.get("description"),
      amount_cents: Math.round(Number(fields.get("amount")) * 100),
    });
    if (!parsed.success) {
      setError("Please enter a valid invoice reference and positive amount.");
      return;
    }
    setBusy(true);
    try {
      const result = await pay({ data: parsed.data });
      setReceipt(result);
      await queryClient.invalidateQueries({ queryKey: ["client-dashboard"] });
    } catch (err) {
      setError(err instanceof Error ? err.message : "The payment record could not be processed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Page
      title="Pay Online — Lawyer Hiring Fees"
      intro="Review transparent lawyer engagement tiers, hiring fee schedules, and confidential matter onboarding."
    >
      <div className="space-y-12">
        {/* TRANSPARENT DEMONSTRATION NOTICE BANNER */}
        <div className="glass-pill rounded-xl p-5 border border-white/20 bg-white/[0.04] backdrop-blur-md flex items-start gap-4">
          <div className="p-2 rounded-lg bg-brand-green/20 text-brand-green shrink-0 mt-0.5">
            <Shield className="size-5" />
          </div>
          <div className="text-xs leading-relaxed text-slate-300">
            <strong className="text-white font-semibold block text-sm mb-1">
              Demonstration Pricing & Engagement Notice
            </strong>
            All fees displayed below represent standardized demonstration pricing schedules for initial scoping and retainer evaluation. Fees are not charged automatically on this website, and no attorney-client relationship or hiring is established until officially confirmed in writing by the firm following conflict verification.
          </div>
        </div>

        {/* VIEW 1: CONFIRMATION VIEW (When user clicks Proceed on an option) */}
        {selectedTier ? (
          <div className="glass-card-dark rounded-2xl p-8 md:p-12 border border-white/20 backdrop-blur-2xl shadow-2xl animate-in fade-in duration-300 max-w-3xl mx-auto">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center border border-brand-green/40">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] font-semibold text-brand-green block">
                    Selection Confirmation
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-white">
                    Selected Legal Representative
                  </h2>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTier(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                <ArrowLeft className="mr-1.5 size-3.5" /> Back to Tiers
              </Button>
            </div>

            {/* SELECTION SUMMARY CARD */}
            <div className="mt-8 rounded-xl glass-pill p-6 border border-white/15 bg-white/[0.03]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                    {selectedTier.level}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    {selectedTier.position}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 max-w-lg leading-relaxed">
                    {selectedTier.description}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block">Hiring Fee</span>
                  <span className="text-3xl font-serif font-bold text-brand-green">
                    {selectedTier.feeFormatted}
                  </span>
                  <span className="block text-[0.65rem] text-slate-400 mt-0.5">Demonstration Pricing</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Included Mandate Scope:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* REQUIRED EXACT FIRM MESSAGE */}
            <div className="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-6 backdrop-blur-md">
              <div className="flex items-start gap-3.5">
                <Sparkles className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="font-serif italic text-base leading-relaxed text-slate-100">
                  “Thank you for choosing VANTAGE HALLCOUNSEL. To proceed with your lawyer engagement, please contact our Support Team for assistance with the hiring process, payment instructions, and the next steps.”
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS: PROMINENT CONTACT SUPPORT BUTTON */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-white/10">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-6 text-sm uppercase tracking-wider rounded-md shadow-lg shadow-primary/25 border border-white/20 transition-all hover:scale-[1.02]"
              >
                <Link to="/contact">
                  <Mail className="mr-2 size-4" /> Contact Support Team
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setSelectedTier(null)}
                className="w-full sm:w-auto glass-pill border-white/20 text-slate-300 hover:text-white px-6 py-6 text-xs uppercase tracking-wider"
              >
                Change Selection
              </Button>
            </div>

            {/* TRANSPARENT COMPLIANCE FOOTER */}
            <p className="mt-8 text-[0.7rem] text-center text-slate-400 leading-relaxed">
              No automated charges have been made. Engagement contracts and secure payment instructions are delivered directly by Vantage Hall Counsel partner intake.
            </p>
          </div>
        ) : (
          /* VIEW 2: THE 7 PRICING OPTIONS GRID */
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-green block">
                  Select Legal Counsel Level
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
                  Standardized Engagement Tiers
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Choose the representation tier appropriate for your legal mandate. Click Proceed to review next steps.
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowInvoiceSection(!showInvoiceSection)}
                className="glass-pill border-white/20 text-slate-300 hover:text-white text-xs"
              >
                <CreditCard className="mr-1.5 size-3.5" />
                {showInvoiceSection ? "Hide Invoice Lookup" : "Have an Existing Invoice?"}
              </Button>
            </div>

            {/* 7 LAWYER HIRING FEE TIERS */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LAWYER_FEES.map((tier) => (
                <div
                  key={tier.id}
                  className={`group glass-card-dark relative flex flex-col justify-between rounded-xl border p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    tier.badge
                      ? "border-primary/50 shadow-primary/5 hover:border-primary"
                      : "border-white/15 hover:border-white/35"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-slate-400">
                        {tier.level}
                      </span>
                      {tier.badge && (
                        <span className="glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary border border-primary/30">
                          <Sparkles className="size-2.5" /> {tier.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-serif text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {tier.position}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl font-bold text-white">
                        {tier.feeFormatted}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-slate-400">/ hiring fee</span>
                    </div>

                    <span className="inline-block mt-1 text-[0.65rem] uppercase tracking-wider text-brand-green font-medium">
                      Demonstration Pricing
                    </span>

                    <p className="mt-4 text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                      {tier.description}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-3">
                      {tier.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => setSelectedTier(tier)}
                      className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-5 text-xs uppercase tracking-wider rounded-md shadow-md shadow-primary/20 transition-all hover:scale-[1.02]"
                    >
                      Proceed <ArrowRight className="ml-1.5 size-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OPTIONAL EXISTING INVOICE PAYMENT SECTION */}
        {showInvoiceSection && (
          <div className="mt-12 glass-card-dark rounded-xl p-8 border border-white/20 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <CreditCard className="size-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Pay Existing Invoice or Retainer</h3>
                <p className="text-xs text-slate-400">Enter your matter reference number to settle an issued legal invoice.</p>
              </div>
            </div>

            {!signedIn ? (
              <div className="p-6 rounded-lg glass-pill border border-white/10 text-center max-w-md mx-auto">
                <p className="text-sm text-slate-300 mb-4">
                  Please sign in to your client account to associate payments directly with your active matter file.
                </p>
                <Button asChild>
                  <Link to="/auth">Sign In to Client Portal</Link>
                </Button>
              </div>
            ) : receipt ? (
              <div className="p-6 rounded-xl glass-pill border border-white/20 max-w-lg mx-auto text-center">
                <CheckCircle2 className="size-10 text-brand-green mx-auto mb-3" />
                <h4 className="text-lg font-serif font-bold text-white">Payment Recorded</h4>
                <p className="mt-2 text-sm text-slate-300">
                  {receipt.description} — ${(receipt.amount_cents / 100).toFixed(2)} USD
                </p>
                <p className="text-xs text-slate-400 mt-1">Reference: {receipt.reference}</p>
                <div className="mt-6 flex justify-center gap-3">
                  <Button onClick={() => downloadReceipt(receipt)}>Download Receipt</Button>
                  <Button variant="outline" onClick={() => setReceipt(null)}>New Payment</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInvoiceSubmit} className="grid gap-5 max-w-xl mx-auto">
                <div>
                  <label className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                    Payment Description *
                  </label>
                  <select name="description" className="mt-1">
                    {["Consultation Fee", "Legal Services", "Invoice Payment", "Retainer", "Outstanding Balance"].map(
                      (item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                    Invoice or Reference Number *
                  </label>
                  <input
                    name="reference"
                    placeholder="e.g. VH-INV-2026-081"
                    required
                    minLength={3}
                    maxLength={100}
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase font-semibold tracking-wider text-slate-300">
                    Amount (USD) *
                  </label>
                  <input
                    name="amount"
                    type="number"
                    placeholder="0.00"
                    required
                    min="0.01"
                    max="1000000"
                    step="0.01"
                    className="mt-1"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-slate-300 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>I authorize this payment allocation to the specified invoice reference under firm terms.</span>
                </label>

                {error && <p role="alert" className="text-xs text-destructive font-medium">{error}</p>}

                <Button type="submit" disabled={busy} className="w-full py-5 text-xs uppercase tracking-wider font-semibold">
                  {busy ? "Processing..." : "Submit Payment Record"}
                </Button>
              </form>
            )}
          </div>
        )}
      </div>
    </Page>
  );
}
