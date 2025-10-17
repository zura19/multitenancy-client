import type { Iuser } from "@/lib/types/userTypes";
import type {
  CreateCompanyAccountFormSchemaType,
  loginFormSchemaType,
} from "@/lib/zod";

const api = import.meta.env.VITE_API_URL;

export async function createCompanyAndSignUp(
  values: CreateCompanyAccountFormSchemaType
): Promise<{ success: true } | { success: false; message: string }> {
  try {
    const res = await fetch(`${api}/auth/signup-create-company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function joinCompanyAndSignUp(
  values: CreateCompanyAccountFormSchemaType
): Promise<{ success: true } | { success: false; message: string }> {
  try {
    const res = await fetch(`${api}/auth/signup-join-company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login(
  values: loginFormSchemaType
): Promise<
  { success: true; user: Iuser } | { success: false; message: string }
> {
  try {
    const res = await fetch(`${api}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function logOut(): Promise<
  { success: true } | { success: false; message: string }
> {
  try {
    const res = await fetch(`${api}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
