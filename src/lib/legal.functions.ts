import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { paymentSchema } from "./legal-validation";

export const getClientDashboard = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const [profile, matters, inquiries, payments, notifications] = await Promise.all([
    context.supabase.from("profiles").select("*").eq("id", context.userId).maybeSingle(),
    context.supabase.from("matters").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }),
    context.supabase.from("inquiries").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }),
    context.supabase.from("demo_payments").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }),
    context.supabase.from("notifications").select("*").eq("user_id", context.userId).order("created_at", { ascending: false }),
  ]);
  for (const response of [profile, matters, inquiries, payments, notifications]) if (response.error) throw new Error("Your client records could not be loaded. Please try again.");
  return { profile: profile.data, matters: matters.data ?? [], inquiries: inquiries.data ?? [], payments: payments.data ?? [], notifications: notifications.data ?? [], userId: context.userId };
});

export const saveProfile = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator(z.object({ full_name: z.string().trim().min(2).max(120), phone: z.string().trim().min(7).max(40), avatar_path: z.string().nullable() })).handler(async ({ data, context }) => {
  if (data.avatar_path && !data.avatar_path.startsWith(`${context.userId}/`)) throw new Error("Invalid profile photograph.");
  const result = await context.supabase.from("profiles").upsert({ ...data, id: context.userId });
  if (result.error) throw new Error("Your profile could not be saved.");
  return { saved: true };
});

export const recordDemoPayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator(paymentSchema).handler(async ({ data, context }) => {
  const result = await context.supabase.from("demo_payments").insert({ ...data, user_id: context.userId, simulated: true }).select().single();
  if (result.error) throw new Error("The simulated payment could not be saved. No money was charged.");
  return result.data;
});