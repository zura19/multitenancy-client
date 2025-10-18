import type { Icompany, IcompanyPage } from "@/lib/types/companyTypes";
import type { changeCompanyPasswordFormSchemaType } from "@/lib/zod";

const api = import.meta.env.VITE_API_URL;

export async function getCompanies(): Promise<{
  success: true;
  companies: Icompany[];
}> {
  try {
    const res = await fetch(`${api}/company`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCompany(id: string): Promise<{
  success: true;
  company: IcompanyPage;
}> {
  try {
    const res = await fetch(`${api}/company/${id}`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteCompany(id: string): Promise<{
  success: true;
}> {
  try {
    const res = await fetch(`${api}/company/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Something went wrong");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function changeCompanyPassword(
  vals: changeCompanyPasswordFormSchemaType
): Promise<{ success: true } | { success: false; message: string }> {
  try {
    const res = await fetch(`${api}/company/change-password`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
