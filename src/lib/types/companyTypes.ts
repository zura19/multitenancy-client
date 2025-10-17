import type { Iuser } from "./userTypes";

export interface Icompany {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IcompanyPage extends Icompany {
  admin: Iuser;
  totalUsers: number;
  totalTasks: number;
}
