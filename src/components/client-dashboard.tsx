import { useEffect, useRef, useState, type FormEvent } from "react";
import { queryOptions, useQuery, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { getClientDashboard, saveProfile } from "@/lib/legal.functions";
import { ownsDocument, validateDocument } from "@/lib/legal-validation";
import { Page } from "./site-shell";
import { Button } from "./ui/button";
import { downloadReceipt } from "./payment-page";

export const dashboardOptions = queryOptions({ queryKey: ["client-dashboard"], queryFn: () => getClientDashboard(), staleTime: 15000 });

export function ClientDashboard() {
  const { data } = useSuspenseQuery(dashboardOptions);
  const queryClient = useQueryClient(); const save = useServerFn(saveProfile);
  const [tab, setTab] = useState("Overview"); const [error, setError] = useState(""); const [message, setMessage] = useState(""); const [busy, setBusy] = useState(false);
  const [identity, setIdentity] = useState({ name: data.profile?.full_name ?? "", phone: data.profile?.phone ?? "", email: "" });
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const documents = useQuery({ queryKey: ["client-documents", data.userId], queryFn: async () => {
    const result = await supabase.storage.from("client-documents").list(data.userId, { limit: 100, sortBy: { column: "created_at", order: "desc" } });
    if (result.error) throw result.error; return result.data.filter(file => !file.name.startsWith("avatar_"));
  } });
  useEffect(() => {
    void supabase.auth.getUser().then(({ data: auth }) => {
      setIdentity({ name: data.profile?.full_name || String(auth.user?.user_metadata["full_name"] ?? ""), phone: data.profile?.phone || String(auth.user?.user_metadata["phone"] ?? ""), email: auth.user?.email ?? "" });
    });
    if (data.profile?.avatar_path) void supabase.storage.from("client-documents").createSignedUrl(data.profile.avatar_path, 300).then(result => setAvatar(result.data?.signedUrl ?? null));
  }, [data.profile]);
  async function upload(file: File, asAvatar = false) {
    setError(""); setMessage("");
    const validation = validateDocument(file); if (validation) { setError(validation); return; }
    if (asAvatar && !["image/png", "image/jpeg"].includes(file.type)) { setError("Choose a JPG or PNG profile photograph."); return; }
    setBusy(true);
    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${data.userId}/${asAvatar ? "avatar_" : ""}${crypto.randomUUID()}_${safeName}`;
      const result = await supabase.storage.from("client-documents").upload(path, file); if (result.error) throw result.error;
      if (asAvatar) { await save({ data: { full_name: identity.name || "Client", phone: identity.phone || "Not provided", avatar_path: path } }); await queryClient.invalidateQueries({ queryKey: ["client-dashboard"] }); }
      else await documents.refetch();
      setMessage(asAvatar ? "Profile photograph updated." : "Document uploaded to your private account.");
    } catch (err) { setError(err instanceof Error ? err.message : "The upload failed."); }
    finally { setBusy(false); if (fileInput.current) fileInput.current.value = ""; }
  }
  async function openDocument(name: string, download: boolean) {
    setError(""); const path = `${data.userId}/${name}`;
    if (!ownsDocument(data.userId, path)) { setError("You cannot access this document."); return; }
    const result = await supabase.storage.from("client-documents").createSignedUrl(path, 60, download ? { download: name.replace(/^[^_]+_/, "") } : {});
    if (result.error || !result.data) { setError("This document could not be opened."); return; }
    window.open(result.data.signedUrl, "_blank", "noopener,noreferrer");
  }
  async function removeDocument(name: string) {
    if (!window.confirm("Delete this document from your account?")) return;
    const result = await supabase.storage.from("client-documents").remove([`${data.userId}/${name}`]);
    if (result.error) setError("The document could not be deleted."); else await documents.refetch();
  }
  async function updateProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    try {
      await save({ data: { full_name: identity.name, phone: identity.phone, avatar_path: data.profile?.avatar_path ?? null } });
      const current = await supabase.auth.getUser();
      if (identity.email !== current.data.user?.email) { const result = await supabase.auth.updateUser({ email: identity.email }); if (result.error) throw result.error; }
      await queryClient.invalidateQueries({ queryKey: ["client-dashboard"] });
      setMessage("Profile saved. If you changed your email, follow the email confirmation instructions.");
    } catch (err) { setError(err instanceof Error ? err.message : "Profile update failed."); }
    finally { setBusy(false); }
  }
  return <Page title={`Welcome, ${data.profile?.full_name || identity.name || "Client"}`} intro="Your VANTAGE HALLCOUNSEL client account."><div className="mb-8 flex flex-wrap gap-3">{["Overview", "Matters", "Consultations", "Documents", "Payments", "Profile"].map(item => <Button key={item} variant={tab === item ? "default" : "outline"} onClick={() => { setTab(item); setError(""); setMessage(""); }}>{item}</Button>)}<Button variant="outline" onClick={async () => { const result = await supabase.auth.signOut(); if (result.error) setError("Sign out failed. Please try again."); else queryClient.clear(); }}>Sign Out</Button></div>
      {error && <p role="alert" className="mb-6">{error}</p>}{message && <p role="status" className="mb-6">{message}</p>}
      {tab === "Overview" && <div className="grid gap-8 md:grid-cols-2"><section><h2 className="text-2xl font-serif font-bold">Account summary</h2><p className="mt-4">Active legal matters: {data.matters.length}</p><p>Consultation inquiries: {data.inquiries.filter(i => i.kind === "consultation").length}</p><p>Outstanding payments: none assigned</p><p>Completed payments: {data.payments.length}</p><p className="mt-4 text-xs text-slate-400">Client records and matter oversight managed by Vantage Hall Counsel.</p></section><section><h2 className="text-2xl font-serif font-bold">Notifications</h2>{data.notifications.length ? data.notifications.map(n => <p key={n.id} className="mt-4">{n.message}</p>) : <p className="mt-4">You have no notifications.</p>}</section></div>}
      {tab === "Matters" && <section><h2 className="text-2xl font-serif font-bold">Active Legal Matters</h2>{data.matters.length ? data.matters.map(m => <article key={m.id} className="mt-6 border-b border-border pb-6"><h3>{m.title}</h3><p>{m.category} · {m.status}</p><p>Assigned representative: {m.representative}</p></article>) : <p className="mt-4">No legal matters or representative have been assigned to your account.</p>}<Button asChild className="mt-6"><Link to="/assess-matter">Assess Your Legal Matter</Link></Button></section>}
      {tab === "Consultations" && <section><h2 className="text-2xl font-serif font-bold">Consultation and Inquiry History</h2>{data.inquiries.length ? data.inquiries.map(i => <article key={i.id} className="mt-6 border-b border-border pb-6"><h3>{i.subject}</h3><p>{i.category} · {i.kind} · {new Date(i.created_at).toLocaleDateString()}</p><p>{i.message}</p><p className="text-xs text-slate-400">Inquiry reference · VH-{i.id.slice(0, 8).toUpperCase()}</p></article>) : <p className="mt-4">No inquiries have been submitted while signed in.</p>}<Button asChild className="mt-6"><Link to="/consultation">Request a Consultation</Link></Button></section>}
      {tab === "Documents" && <section><h2 className="text-2xl font-serif font-bold">Private Documents</h2><p className="mt-4 text-xs text-slate-400">Encrypted matter file repository for authorized clients. PDF, DOCX, JPG, or PNG; up to 10 MB.</p><input ref={fileInput} type="file" aria-label="Upload document" accept=".pdf,.docx,.jpg,.jpeg,.png" disabled={busy} onChange={event => { const file = event.target.files?.[0]; if (file) void upload(file); }} className="mt-6" />{documents.isPending && <p>Loading documents…</p>}{documents.error && <p role="alert">Your documents could not be loaded.</p>}{documents.data?.length === 0 && <p className="mt-6">No documents uploaded.</p>}{documents.data?.map(file => <div key={file.id} className="mt-6 flex flex-wrap items-center gap-4 border-b border-border pb-4"><p>{file.name.replace(/^[^_]+_/, "")}</p><Button variant="outline" onClick={() => void openDocument(file.name, false)}>View</Button><Button variant="outline" onClick={() => void openDocument(file.name, true)}>Download</Button><Button variant="ghost" onClick={() => void removeDocument(file.name)}>Delete</Button></div>)}</section>}
      {tab === "Payments" && <section><h2 className="text-2xl font-serif font-bold">Payment History</h2><p className="mt-4 text-xs text-slate-400">Electronic payment and retainer history ledger.</p>{data.payments.map(p => <article key={p.id} className="mt-6 border-b border-border pb-6"><h3>{p.description} · ${(p.amount_cents / 100).toFixed(2)}</h3><p>{p.reference} · {new Date(p.created_at).toLocaleString()}</p><p>Transaction: {p.id}</p><Button className="mt-4" variant="outline" onClick={() => downloadReceipt(p)}>Download Official Receipt</Button></article>)}{data.payments.length === 0 && <p className="mt-6">No payments recorded.</p>}<Button asChild className="mt-6"><Link to="/pay-online">Pay Online</Link></Button></section>}
      {tab === "Profile" && <section className="max-w-lg"><h2 className="text-2xl">Client Profile</h2>{avatar && <img src={avatar} alt="Your profile photograph" className="my-6 h-24 w-24 object-cover" />}<label className="mt-6 block">Profile photograph<input type="file" accept="image/jpeg,image/png" disabled={busy} onChange={event => { const file = event.target.files?.[0]; if (file) void upload(file, true); }} /></label><form className="mt-8 grid gap-5" onSubmit={updateProfile}><label>Full name *<input value={identity.name} onChange={e => setIdentity({ ...identity, name: e.target.value })} required minLength={2} /></label><label>Phone number *<input type="tel" value={identity.phone} onChange={e => setIdentity({ ...identity, phone: e.target.value })} required minLength={7} /></label><label>Email address *<input type="email" value={identity.email} onChange={e => setIdentity({ ...identity, email: e.target.value })} required /></label><Button disabled={busy}>Save Profile</Button><Button asChild variant="outline"><Link to="/reset-password">Change Password</Link></Button></form></section>}
    </Page>;
}