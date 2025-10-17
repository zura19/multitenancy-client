import TaskStatus from "@/components/shared/TaskStatus";
import Tooltip from "@/components/shared/Tooltip";
import UserAvatar from "@/components/shared/UserAvatar";
import type { Itask } from "@/lib/types/taskTypes";
import { Link } from "react-router-dom";
import TaskDate from "../../../components/shared/TaskDate";

interface props {
  task: Itask;
}
export default function Task({ task }: props) {
  return (
    <div
      className="grid grid-cols-[11fr_2fr] items-center  gap-4 hover:bg-muted-foreground/20 rounded-md py-3 px-2 sm:p-3  transition-all duration-200 "
      key={task.id}
    >
      <Link
        to={`/task/${task.id}`}
        className="grid grid-cols-[auto_2fr_auto_auto] items-center gap-2 sm:gap-4"
      >
        <Tooltip text={"Assigned to " + task.assignedTo.name}>
          <div className="flex items-center gap-2">
            <UserAvatar className="size-8" name={task.assignedTo.name} />
          </div>
        </Tooltip>
        <p className="font-semibold line-clamp-1">{task.title}</p>
        <TaskDate status={task.status} shouldBeDoneBy={task.shouldBeDoneBy} />
      </Link>
      <div className="ml-auto">
        <TaskStatus
          status={task.status}
          taskId={task.id}
          assignedToId={task.assignedTo.id}
        />
      </div>
    </div>
  );
}
