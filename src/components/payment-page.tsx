import { useEffect, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { recordDemoPayment } from "@/lib/legal.functions";
import { Page } from "./site-shell";
import { Button } from "./ui/button";
import { paymentSchema } from "@/lib/legal-validation";

type Receipt = { id: string; reference: string; description: string; amount_cents: number; created_at: string };
export function downloadReceipt(payment: Receipt) {
  const text = `VANTAGE HALLCOUNSEL\nDEMONSTRATION RECEIPT — NO MONEY CHARGED\n\nTransaction: ${payment.id}\nReference: ${payment.reference}\nDescription: ${payment.description}\nAmount (simulated USD): $${(payment.amount_cents / 100).toFixed(2)}\nDate: ${payment.created_at}\n\nThis transaction is a simulation, not proof of a real payment.\nNo client trust account is represented.\n`;
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" })); const anchor = document.createElement("a"); anchor.href = url; anchor.download = `VH-demo-receipt-${payment.id}.txt`; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function PaymentPage() {
  const pay = useServerFn(recordDemoPayment); const queryClient = useQueryClient();
  const [signedIn, setSignedIn] = useState(false); const [loading, setLoading] = useState(true); const [busy, setBusy] = useState(false); const [error, setError] = useState(""); const [receipt, setReceipt] = useState<Receipt | null>(null);
  useEffect(() => { void supabase.auth.getUser().then(({ data }) => { setSignedIn(Boolean(data.user)); setLoading(false); }); }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); const fields = new FormData(event.currentTarget);
    const parsed = paymentSchema.safeParse({ reference: fields.get("reference"), description: fields.get("description"), amount_cents: Math.round(Number(fields.get("amount")) * 100) });
    if (!parsed.success) { setError("Enter a valid reference and a positive amount."); return; }
    setBusy(true); try { const result = await pay({ data: parsed.data }); setReceipt(result); await queryClient.invalidateQueries({ queryKey: ["client-dashboard"] }); }
    catch (err) { setError(err instanceof Error ? err.message : "The simulated payment could not be recorded."); } finally { setBusy(false); }
  }
  return <Page title="Pay Online" intro="Client payments, clearly recorded."><div className="max-w-xl"><p>Demonstration payments only. No payment processor is connected, no money is charged, and no real client trust account exists. Do not enter card or banking details.</p>{loading ? <p className="mt-6">Checking your account…</p> : !signedIn ? <div className="mt-8"><p>Sign in to save a simulated payment and access its receipt in your account.</p><Button asChild className="mt-4"><Link to="/auth">Client Login</Link></Button></div> : receipt ? <section role="status" className="mt-8"><h2 className="text-2xl">Simulation recorded</h2><p className="mt-4">No money was charged.</p><p>{receipt.description} · ${(receipt.amount_cents / 100).toFixed(2)} USD (simulated)</p><p>Reference: {receipt.reference}</p><p>Transaction: {receipt.id}</p><p>Date: {new Date(receipt.created_at).toLocaleString()}</p><div className="mt-6 flex flex-wrap gap-3"><Button onClick={() => downloadReceipt(receipt)}>Download Demonstration Receipt</Button><Button variant="outline" onClick={() => setReceipt(null)}>New Simulation</Button><Button asChild variant="outline"><Link to="/dashboard">Payment History</Link></Button></div></section> : <form onSubmit={submit} className="mt-8 grid gap-5"><label>Payment description *<select name="description">{["Consultation Fee", "Legal Services", "Invoice Payment", "Retainer", "Outstanding Balance"].map(item => <option key={item}>{item}</option>)}</select></label><label>Invoice or reference number *<input name="reference" required minLength={3} maxLength={100} /></label><label>Simulated amount (USD) *<input name="amount" type="number" required min="0.01" max="1000000" step="0.01" /></label><label className="flex gap-3"><input type="checkbox" required />I understand this is a simulated transaction with no real charge.</label>{error && <p role="alert">{error}</p>}<Button disabled={busy}>{busy ? "Recording simulation…" : "Record Simulated Payment"}</Button></form>}</div></Page>;
}