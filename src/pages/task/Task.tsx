import TaskDate from "@/components/shared/TaskDate";
import Wrapper from "@/components/shared/Wrapper";
import useUser from "@/lib/hooks/useUser";
import { getTask } from "@/services/taskService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import User from "../users/modules/User";
import TaskHeader from "./modules/TaskHeader";
import TaskSkeleton from "./components/TaskSkeleton";

export default function Task() {
  const taskId = useParams().id;
  const { user } = useUser();
  const { data, isLoading, error } = useQuery({
    queryKey: [`task-${taskId}`, user?.id],
    queryFn: () => getTask(taskId!),
  });

  return (
    <Wrapper className=" rounded-md h-[82.5dvh] my-6">
      {isLoading && <TaskSkeleton />}
      {error && <p>{error.message}</p>}
      {data && (
        <div className="rounded-md bg-muted flex flex-col gap-4 h-full px-2 py-4 sm:p-6">
          <TaskHeader task={data.task} />

          <div>
            <h2 className="font-semibold text-xl">Description:</h2>
            <p className="text-muted-foreground">{data.task.description}</p>
          </div>

          <div className="flex">
            <TaskDate
              status={data.task.status}
              shouldBeDoneBy={data.task.shouldBeDoneBy}
            />
          </div>

          <div className=" mt-auto">
            <h2 className="font-semibold text-lg">Assigned To:</h2>
            <User user={data.task.assignedTo} />
          </div>
        </div>
      )}
    </Wrapper>
  );
}
