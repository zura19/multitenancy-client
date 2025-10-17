import type { Iuser } from "./userTypes";

export interface Itask {
  id: string;
  title: string;
  description: string;
  status: Istatus;
  createdById: string;
  assignedToId: string;
  assignedTo: Iuser;
  shouldBeDoneBy: string;
  createdAt: string;
  updatedAt: string;
}

export type Istatus = "TODO" | "IN_PROGRESS" | "DONE";
