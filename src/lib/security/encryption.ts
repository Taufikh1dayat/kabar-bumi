import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12; // 96 bits for GCM
const AUTH_TAG_LENGTH = 16; // 128 bits

// Fallback only for local development environment
const DEFAULT_DEV_KEY = "kabar_bumi_dev_secret_key_32bytes!!";

function getEncryptionKey(): Buffer {
  const secret = process.env.DATA_ENCRYPTION_KEY || DEFAULT_DEV_KEY;
  // Derives a consistent 32-byte (256-bit) key using SHA-256
  return crypto.createHash("sha256").update(secret).digest();
}

/**
 * Encrypts sensitive PII string using AES-256-GCM.
 * Output format: base64(iv:authTag:ciphertext)
 */
export function encryptField(plainText: string | null | undefined): string | null {
  if (!plainText) return null;

  try {
    const key = getEncryptionKey();
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

    const encrypted = Buffer.concat([
      cipher.update(plainText, "utf8"),
      cipher.final(),
    ]);

    const authTag = cipher.getAuthTag();

    // Pack iv + authTag + ciphertext into single payload
    const packed = Buffer.concat([iv, authTag, encrypted]);
    return packed.toString("base64");
  } catch (error) {
    console.error("Field encryption failed:", error);
    throw new Error("Gagal mengenkripsi data sensitif");
  }
}

/**
 * Decrypts AES-256-GCM encrypted string.
 */
export function decryptField(encryptedBase64: string | null | undefined): string | null {
  if (!encryptedBase64) return null;

  try {
    const key = getEncryptionKey();
    const packed = Buffer.from(encryptedBase64, "base64");

    if (packed.length < IV_LENGTH + AUTH_TAG_LENGTH) {
      throw new Error("Invalid payload length");
    }

    const iv = packed.subarray(0, IV_LENGTH);
    const authTag = packed.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
    const ciphertext = packed.subarray(IV_LENGTH + AUTH_TAG_LENGTH);

    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);

    const decrypted = Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]);

    return decrypted.toString("utf8");
  } catch (error) {
    console.error("Field decryption failed:", error);
    return "[Data Terenkripsi / Tidak Dapat Didekripsi]";
  }
}

/**
 * Masks sensitive identifiers (e.g., NIK, Passport, Phone) for safe display.
 * Example: 3502123456780001 -> 3502********0001
 */
export function maskSensitiveValue(value: string | null | undefined): string {
  if (!value) return "-";
  if (value.length <= 6) return "*".repeat(value.length);
  const start = value.slice(0, 4);
  const end = value.slice(-4);
  const maskedMiddle = "*".repeat(Math.max(4, value.length - 8));
  return `${start}${maskedMiddle}${end}`;
}
