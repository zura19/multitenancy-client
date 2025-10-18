import { z } from "zod";
export const createCompanyAccountFormSchema = z.object({
  company: z
    .string()
    .min(1, { message: "Company is required" })
    .min(3, { message: "Company must be at least 3 characters" }),
  companyPassword: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  email: z.email().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  name: z.string().min(1, { message: "Name is required" }).min(3, {
    message: "Name must be at least 3 characters",
  }),
});
export type CreateCompanyAccountFormSchemaType = z.infer<
  typeof createCompanyAccountFormSchema
>;

export const joinCompanyCreateAccountFormSchema = z.object({
  company: z.string().min(1, { message: "Company is required" }),
  companyPassword: z.string().min(1, { message: "Password is required" }),
  email: z.email().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
  name: z.string().min(1, { message: "Name is required" }).min(3, {
    message: "Name must be at least 3 characters",
  }),
});
export type joinCompanyAccountFormSchemaType = z.infer<
  typeof createCompanyAccountFormSchema
>;

export const loginFormSchema = z.object({
  email: z.email().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;

export const createTaskFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters" }),

  description: z.string().optional(),
  assignedToId: z.string(),
  shouldBeDoneBy: z.string().min(1, { message: "Date is required" }),
});

export type createTaskFormSchemaType = z.infer<typeof createTaskFormSchema>;

export const changeCompanyPasswordFormSchema = z
  .object({
    currentPassword: z.string().min(1, { message: "Password is required" }),
    newPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type changeCompanyPasswordFormSchemaType = z.infer<
  typeof changeCompanyPasswordFormSchema
>;
