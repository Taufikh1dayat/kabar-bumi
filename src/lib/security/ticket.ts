import crypto from "crypto";

/**
 * Generates an unguessable tracking ticket code for public case tracking.
 * Format: KB-YYMM-XXXXXX (e.g. KB-2610-K8P9M2)
 * Uses crypto.randomBytes to prevent sequential enumeration attacks.
 */
export function generateTicketCode(): string {
  const now = new Date();
  const year = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, "0");

  // Alphanumeric characters excluding ambiguous ones (O, 0, I, 1, L)
  const charset = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  const bytes = crypto.randomBytes(6);
  let randomPart = "";

  for (let i = 0; i < 6; i++) {
    randomPart += charset[bytes[i] % charset.length];
  }

  return `KB-${year}${month}-${randomPart}`;
}

/**
 * Normalizes input ticket code from users.
 */
export function normalizeTicketCode(input: string): string {
  return input.trim().toUpperCase();
}
