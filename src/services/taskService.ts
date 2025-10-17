import type { Istatus, Itask } from "@/lib/types/taskTypes";
import type { createTaskFormSchemaType } from "@/lib/zod";

const api = import.meta.env.VITE_API_URL;

export async function getTasks(
  type?: string,
  page?: number
): Promise<{ success: true; tasks: Itask[]; nextPage: number | null }> {
  try {
    let query = "";
    if (type) query += `type=${type}`;
    if (page) query += `&page=${page}`;

    const res = await fetch(`${api}/task?${query}`, {
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

export async function createTask(
  values: createTaskFormSchemaType
): Promise<
  { success: true; task: Itask } | { success: false; message: string }
> {
  try {
    console.log(values);
    const res = await fetch(`${api}/task`, {
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

export async function updateTask(
  taskId: string,
  values: createTaskFormSchemaType
): Promise<
  { success: true; task: Itask } | { success: false; message: string }
> {
  try {
    const res = await fetch(`${api}/task/${taskId}`, {
      method: "PATCH",
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

export async function getTask(id: string) {
  try {
    const res = await fetch(`${api}/task/${id}`, {
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

export async function changeTaskStatus(taskId: string, status: Istatus) {
  try {
    const res = await fetch(`${api}/task/${taskId}/change-status`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
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
