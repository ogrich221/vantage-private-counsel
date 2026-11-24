import { z } from "zod";

export const matterCategories = ["Corporate Legal Matters", "Business Disputes", "Contract Disputes", "Litigation", "Intellectual Property", "Tax and Regulatory Issues", "Mergers and Acquisitions", "Other Legal Matters"] as const;

export const inquirySchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.email().max(254),
  phone: z.string().trim().min(7).max(40),
  category: z.enum(matterCategories),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(20).max(5000),
  kind: z.enum(["consultation", "assessment", "general", "attorney"]),
  acknowledgment: z.literal(true),
});

export const registrationSchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.email(),
  phone: z.string().trim().min(7).max(40),
  password: z.string().min(12).max(128),
  confirm_password: z.string(),
}).refine((data) => data.password === data.confirm_password, { path: ["confirm_password"], message: "Passwords must match." });

export const paymentSchema = z.object({
  reference: z.string().trim().min(3).max(100),
  description: z.enum(["Consultation Fee", "Legal Services", "Invoice Payment", "Retainer", "Outstanding Balance"]),
  amount_cents: z.number().int().positive().max(100000000),
});

export const documentTypes = ["application/pdf", "image/jpeg", "image/png", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
export function validateDocument(file: { size: number; type: string }) {
  if (!documentTypes.includes(file.type)) return "Choose a PDF, DOCX, JPG, or PNG file.";
  if (file.size <= 0 || file.size > 10 * 1024 * 1024) return "Choose a nonempty file no larger than 10 MB.";
  return null;
}
export function ownsDocument(userId: string, path: string) {
  return path.split("/")[0] === userId && path.split("/").length === 2 && !path.includes("..");
}