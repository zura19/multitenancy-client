export interface Iuser {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  companyId: string;
  companyRole: "USER" | "ADMIN";
  createdAt: string;
  updatedAt: string;
}
