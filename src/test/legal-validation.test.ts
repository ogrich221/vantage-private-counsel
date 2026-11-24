import { describe, expect, it } from "vitest";
import { inquirySchema, registrationSchema, paymentSchema, ownsDocument, validateDocument } from "@/lib/legal-validation";

const inquiry = { full_name: "Sample Client", email: "client@example.com", phone: "2125550100", category: "Corporate Legal Matters", subject: "Business consultation", message: "A sample request about a proposed business transaction.", kind: "consultation", acknowledgment: true };
describe("Legal client safeguards", () => {
  it("requires all requested inquiry fields", () => {
    expect(inquirySchema.safeParse(inquiry).success).toBe(true);
    for (const key of ["full_name", "email", "phone", "category", "subject", "message"]) {
      expect(inquirySchema.safeParse({ ...inquiry, [key]: "" }).success).toBe(false);
    }
  });
  it("requires acknowledgment that an inquiry does not establish representation", () => {
    expect(inquirySchema.safeParse({ ...inquiry, acknowledgment: false }).success).toBe(false);
  });
  it("requires matching registration passwords", () => {
    const registration = { full_name: "Sample Client", email: "client@example.com", phone: "2125550100", password: "A-long-sample-password", confirm_password: "A-long-sample-password" };
    expect(registrationSchema.safeParse(registration).success).toBe(true);
    expect(registrationSchema.safeParse({ ...registration, confirm_password: "different" }).success).toBe(false);
  });
  it("never accepts a zero or negative simulated payment", () => {
    expect(paymentSchema.safeParse({ reference: "DEMO-001", description: "Invoice Payment", amount_cents: 50000 }).success).toBe(true);
    expect(paymentSchema.safeParse({ reference: "DEMO-001", description: "Invoice Payment", amount_cents: 0 }).success).toBe(false);
  });
  it("restricts document access to the owning client folder", () => {
    expect(ownsDocument("client-a", "client-a/document.pdf")).toBe(true);
    expect(ownsDocument("client-b", "client-a/document.pdf")).toBe(false);
    expect(ownsDocument("client-a", "client-a/../document.pdf")).toBe(false);
  });
  it("rejects executable documents", () => {
    expect(validateDocument({ size: 1000, type: "application/pdf" })).toBe(null);
    expect(validateDocument({ size: 1000, type: "application/x-msdownload" })).not.toBe(null);
  });
});