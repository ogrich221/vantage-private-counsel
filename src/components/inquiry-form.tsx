import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { inquirySchema, matterCategories } from "@/lib/legal-validation";

export function InquiryForm({ kind = "consultation", stepped = false }: { kind?: "consultation" | "assessment" | "general" | "attorney"; stepped?: boolean }) {
  const [step, setStep] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (stepped && step < 3) { setStep(step + 1); return; }
    const fields = new FormData(form);
    const result = inquirySchema.safeParse({ full_name: fields.get("full_name"), email: fields.get("email"), phone: fields.get("phone"), category: fields.get("category"), subject: fields.get("subject"), message: fields.get("message"), kind, acknowledgment: fields.get("acknowledgment") === "on" });
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Please check the required fields."); return; }
    setBusy(true); setError("");
    try {
      const { data: session } = await supabase.auth.getSession();
      const id = crypto.randomUUID();
      const response = await supabase.from("inquiries").insert({ ...result.data, id, user_id: session.session?.user.id ?? null });
      if (response.error) throw new Error("Your inquiry could not be saved. Please try again.");
      setConfirmation(id.slice(0, 8).toUpperCase());
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong. Please try again."); }
    finally { setBusy(false); }
  }
  if (confirmation) return <section role="status"><h2>Inquiry received</h2><p>Your reference is VH-{confirmation}. Your demonstration inquiry has been saved; it has not been sent to a practicing attorney. Submitting this inquiry does not establish an attorney-client relationship.</p></section>;
  return <form onSubmit={submit} className="grid gap-5">
    {stepped && <p>Step {step} of 3 — {step === 1 ? "Your matter" : step === 2 ? "Your details" : "Review and submit"}</p>}
    <fieldset hidden={stepped && step !== 1} disabled={false} className="grid gap-4">
      <label>Legal matter category *<select name="category" required disabled={stepped && step > 1 ? false : undefined}>{matterCategories.map(category => <option key={category}>{category}</option>)}</select></label>
      <label>Subject *<input name="subject" required minLength={3} maxLength={200} /></label>
      <label>Detailed message *<textarea name="message" required minLength={20} maxLength={5000} rows={6} /></label>
    </fieldset>
    <fieldset hidden={stepped && step !== 2} className="grid gap-4">
      <label>Full name *<input name="full_name" required={!stepped || step >= 2} minLength={2} maxLength={120} autoComplete="name" /></label>
      <label>Email address *<input name="email" type="email" required={!stepped || step >= 2} autoComplete="email" /></label>
      <label>Phone number *<input name="phone" type="tel" required={!stepped || step >= 2} minLength={7} maxLength={40} autoComplete="tel" /></label>
    </fieldset>
    <div hidden={stepped && step !== 3}>
      <p>Do not submit confidential or sensitive information. This demonstration form does not establish an attorney-client relationship, and confidentiality is not promised.</p>
      <label className="flex items-start gap-3"><input type="checkbox" name="acknowledgment" required={!stepped || step === 3} />I understand that this is a demonstration inquiry, not an agreement for legal representation. *</label>
    </div>
    {error && <p role="alert">{error}</p>}
    <div className="flex gap-3">{stepped && step > 1 && <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}<Button type="submit" disabled={busy}>{busy ? "Saving inquiry…" : stepped && step < 3 ? "Continue" : "Submit Inquiry"}</Button></div>
  </form>;
}