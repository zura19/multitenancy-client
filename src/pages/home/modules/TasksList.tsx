// import { getTasks } from "@/services/taskService";
// import { useQuery } from "@tanstack/react-query";
import Task from "./Task";
import TaskSkeleton from "../components/TaskSkeleton";
// import useUser from "@/lib/hooks/useUser";
import useInfiniteTasks from "@/lib/hooks/useInfiniteTasks";
import LoadMore from "@/components/shared/LoadMore";

interface props {
  type?: "logged";
}

export default function TasksList({ type }: props) {
  const {
    tasks,
    isLoading,
    error,
    hasFirstPage,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteTasks(type);

  return (
    <>
      {isLoading && <TaskSkeleton length={6} />}
      <div className="bg-accent p-2 rounded-lg border  overflow-scroll h-[500px]">
        {error && <p>{error.message}</p>}
        {!hasFirstPage && <p className="text-center py-12">No tasks found</p>}
        {tasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}

        <LoadMore
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          buttonClassName=" mt-2"
        >
          Load more
        </LoadMore>
      </div>
    </>
  );
}
