import { z } from "zod";

export const ReporterTypeEnum = z.enum([
  "KORBAN_SENDIRI",
  "KELUARGA",
  "TEMAN",
  "SERIKAT",
  "LAINNYA",
]);

export const GenderEnum = z.enum(["PEREMPUAN", "LAKI_LAKI"]);

export const CaseCategoryEnum = z.enum([
  "TPPO",
  "KEKERASAN_FISIK",
  "GAJI_TIDAK_DIBAYAR",
  "PENAHANAN_DOKUMEN",
  "SENGKETA_KONTRAK",
  "HILANG_KONTAK",
  "SAKIT_MENINGGAL",
  "LAINNYA",
]);

export const CasePriorityEnum = z.enum([
  "RENDAH",
  "SEDANG",
  "TINGGI",
  "DARURAT",
]);

export const CaseStatusEnum = z.enum([
  "DITERIMA",
  "VERIFIKASI",
  "INVESTIGASI",
  "PENDAMPINGAN",
  "SELESAI",
  "DITUTUP",
]);

// Helper to sanitize strings from potential XSS tags
const sanitizeString = (val: string) =>
  val.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim();

/**
 * Public Case Submission Schema (Frontend Form Validation & API Request Validator)
 */
export const CreateCaseReportSchema = z.object({
  // Step 1: Data Pelapor
  reporterType: ReporterTypeEnum,
  reporterName: z
    .string()
    .min(3, "Nama pelapor minimal 3 karakter")
    .max(100, "Nama pelapor maksimal 100 karakter")
    .transform(sanitizeString),
  reporterPhone: z
    .string()
    .min(9, "Nomor telepon / WhatsApp tidak valid")
    .max(20, "Nomor telepon maksimal 20 digit")
    .regex(/^[0-9+\s\-()]+$/, "Format nomor telepon tidak valid")
    .transform(sanitizeString),
  reporterEmail: z
    .string()
    .email("Format email tidak valid")
    .optional()
    .or(z.literal("")),
  reporterRelation: z
    .string()
    .max(50)
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),

  // Step 2: Data Korban / Buruh Migran
  victimName: z
    .string()
    .min(3, "Nama buruh migran minimal 3 karakter")
    .max(100, "Nama buruh migran maksimal 100 karakter")
    .transform(sanitizeString),
  victimGender: GenderEnum,
  victimNik: z
    .string()
    .max(20, "NIK maksimal 20 karakter")
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),
  victimPassport: z
    .string()
    .max(20, "Nomor paspor maksimal 20 karakter")
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),
  victimOriginAddress: z
    .string()
    .min(5, "Alamat asal di Indonesia wajib diisi")
    .max(255)
    .transform(sanitizeString),
  victimOriginCity: z
    .string()
    .min(2, "Kota / Kabupaten asal wajib diisi")
    .max(100)
    .transform(sanitizeString),
  victimOriginProvince: z
    .string()
    .min(2, "Provinsi asal wajib diisi")
    .max(100)
    .transform(sanitizeString),

  // Step 3: Negara Penempatan & Agensi
  destinationCountry: z
    .string()
    .min(2, "Negara penempatan wajib diisi")
    .max(100)
    .transform(sanitizeString),
  departureYear: z
    .string()
    .max(10)
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),
  agencyName: z
    .string()
    .max(150, "Nama PT/Sponsor maksimal 150 karakter")
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),
  jobSector: z
    .string()
    .max(100)
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),

  // Step 4: Kronologi & Masalah
  caseCategory: CaseCategoryEnum,
  priority: CasePriorityEnum.default("SEDANG"),
  chronology: z
    .string()
    .min(20, "Ceritakan kronologi kejadian minimal 20 karakter")
    .max(5000, "Kronologi maksimal 5000 karakter")
    .transform(sanitizeString),
  demands: z
    .string()
    .max(1000, "Tuntutan maksimal 1000 karakter")
    .optional()
    .transform((v) => (v ? sanitizeString(v) : "")),
});

export type CreateCaseReportInput = z.infer<typeof CreateCaseReportSchema>;
