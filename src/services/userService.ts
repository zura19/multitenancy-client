import type { Iuser } from "@/lib/types/userTypes";

const api = import.meta.env.VITE_API_URL;

export async function getUsers(
  query?: string
): Promise<{ success: true; users: Iuser[] }> {
  try {
    const res = await fetch(`${api}/user?${query}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeUser(id: string) {
  try {
    const res = await fetch(`${api}/user/${id}`, {
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
