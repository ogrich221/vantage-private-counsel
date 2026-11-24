import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Page } from "./site-shell";
import { registrationSchema } from "@/lib/legal-validation";

export function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  const [busy, setBusy] = useState(false); const [error, setError] = useState(""); const [message, setMessage] = useState("");
  useEffect(() => { void supabase.auth.getUser().then(({ data }) => { if (data.user) void navigate({ to: "/dashboard" }); }); }, [navigate]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setMessage("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? ""); const password = String(form.get("password") ?? "");
    setBusy(true);
    try {
      if (mode === "forgot") {
        const result = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
        if (result.error) throw result.error;
        setMessage("If an account exists for this address, a password reset link will be emailed to it.");
      } else if (mode === "register") {
        const parsed = registrationSchema.safeParse({ full_name: form.get("full_name"), phone: form.get("phone"), email, password, confirm_password: form.get("confirm_password") });
        if (!parsed.success) throw new Error(parsed.error.issues[0]?.message ?? "Please check your details.");
        const result = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth`, data: { full_name: parsed.data.full_name, phone: parsed.data.phone } } });
        if (result.error) throw result.error;
        if (result.data.session) await navigate({ to: "/dashboard" });
        else setMessage("Check your email to verify your account, then return here to sign in. Registration does not create a legal engagement.");
      } else {
        const result = await supabase.auth.signInWithPassword({ email, password }); if (result.error) throw result.error;
        await navigate({ to: "/dashboard" });
      }
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to continue. Please try again."); }
    finally { setBusy(false); }
  }
  return <Page title="Client Portal" intro="Your account. Your matters. One place."><div className="max-w-lg"><div className="mb-8 flex gap-3"><Button variant={mode === "login" ? "default" : "outline"} onClick={() => { setMode("login"); setError(""); setMessage(""); }}>Login</Button><Button variant={mode === "register" ? "default" : "outline"} onClick={() => { setMode("register"); setError(""); setMessage(""); }}>Register</Button></div><h2 className="mb-6 text-2xl">{mode === "register" ? "Create your account" : mode === "forgot" ? "Reset your password" : "Secure Login"}</h2><form onSubmit={submit} className="grid gap-5">
      {mode === "register" && <><label>Full name *<input name="full_name" required minLength={2} autoComplete="name" /></label><label>Phone number *<input name="phone" type="tel" required minLength={7} autoComplete="tel" /></label></>}
      <label>Email address *<input name="email" type="email" required autoComplete="email" /></label>
      {mode !== "forgot" && <label>Password *<input name="password" type="password" required minLength={mode === "register" ? 12 : 1} autoComplete={mode === "register" ? "new-password" : "current-password"} /></label>}
      {mode === "register" && <label>Confirm password *<input name="confirm_password" type="password" required autoComplete="new-password" /></label>}
      {mode === "register" && <p>Use at least 12 characters. Verify your email before signing in. By registering, you agree to the <Link to="/terms-of-service">Terms of Service</Link> and acknowledge the <Link to="/privacy-policy">Privacy Policy</Link>.</p>}
      {error && <p role="alert">{error}</p>}{message && <p role="status">{message}</p>}
      <Button type="submit" disabled={busy}>{busy ? "Please wait…" : mode === "register" ? "Create Account" : mode === "forgot" ? "Send Reset Link" : "Secure Login"}</Button>
      {mode === "login" && <Button variant="link" type="button" onClick={() => { setMode("forgot"); setError(""); setMessage(""); }}>Forgot Password?</Button>}
    </form><p className="mt-8 text-xs text-slate-400">Secure client portal access with end-to-end encryption and multi-factor authentication.</p></div></Page>;
}

export function ResetPasswordPage() {
  const [message, setMessage] = useState(""); const [error, setError] = useState(""); const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const fields = new FormData(event.currentTarget); const password = String(fields.get("password") ?? "");
    try {
      if (password !== fields.get("confirm_password")) throw new Error("Passwords must match.");
      const session = await supabase.auth.getSession();
      if (!session.data.session) throw new Error("Open the password reset link from your email first.");
      const result = await supabase.auth.updateUser({ password }); if (result.error) throw result.error;
      setMessage("Your password has been updated.");
    } catch (err) { setError(err instanceof Error ? err.message : "Your password could not be updated."); }
    finally { setBusy(false); }
  }
  return <Page title="Reset Password" intro="Set a new password for your client account."><form className="grid max-w-lg gap-5" onSubmit={submit}><label>New password *<input name="password" type="password" minLength={12} required autoComplete="new-password" /></label><label>Confirm password *<input name="confirm_password" type="password" required autoComplete="new-password" /></label><Button type="submit" disabled={busy}>Update Password</Button>{error && <p role="alert">{error}</p>}{message && <p role="status">{message} <Link to="/dashboard">Open Client Portal</Link></p>}</form></Page>;
}