import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Iuser } from "@/lib/types/userTypes";
import GiveTaskForm from "./GiveTaskForm";
import type { createTaskFormSchemaType } from "@/lib/zod";
import { useState } from "react";

interface props {
  children: React.ReactNode;
  user: Iuser;
  updateSession?: {
    is: boolean;
    taskId: string;
  };
  data?: createTaskFormSchemaType;
}

export default function GiveTaskDialog({
  children,
  user,
  updateSession = {
    is: false,
    taskId: "",
  },
  data,
}: props) {
  const [open, setOpen] = useState(false);

  function closeDialog() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {" "}
            {updateSession ? "Update Task" : `Give Task to ${user.name}`}
          </DialogTitle>
          <DialogDescription>
            {updateSession
              ? "With this user recieves the updated task"
              : `
            With this user recieves the new task`}
          </DialogDescription>
        </DialogHeader>
        <GiveTaskForm
          updateSession={updateSession}
          data={data}
          userId={user.id}
          closeDialog={closeDialog}
        />
      </DialogContent>
    </Dialog>
  );
}
