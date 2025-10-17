import TaskStatus from "@/components/shared/TaskStatus";
import type { Itask } from "@/lib/types/taskTypes";
import GiveTaskDialog from "@/pages/users/components/GiveTaskDialog";
import { ClipboardEdit } from "lucide-react";

interface props {
  task: Itask;
}

export default function TaskHeader({ task }: props) {
  return (
    <header className="space-y-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">{task.title}</h1>
        <TaskStatus
          status={task.status}
          taskId={task.id}
          assignedToId={task.assignedTo.id}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">Task ID: {task.id}</p>
        <GiveTaskDialog
          updateSession={{ is: true, taskId: task.id }}
          data={{
            title: task.title,
            description: task.description,
            assignedToId: task.assignedTo.id,
            shouldBeDoneBy: task.shouldBeDoneBy,
          }}
          user={task.assignedTo}
        >
          <div className="rounded-full  p-2 cursor-pointer hover:bg-muted-foreground/20 transition-all duration-300">
            <ClipboardEdit className="size-5" />
          </div>
        </GiveTaskDialog>
      </div>
    </header>
  );
}
