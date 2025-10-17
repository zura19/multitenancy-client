import { getTasks } from "@/services/taskService";
import { useInfiniteQuery } from "@tanstack/react-query";
import useUser from "./useUser";

export default function useInfiniteTasks(type?: "logged") {
  const { user } = useUser();
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["tasks", type, user?.id],
    queryFn: ({ pageParam }) => getTasks(type, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 1000 * 60 * 5,
  });

  const hasFirstPage = data && data?.pages[0]?.tasks?.length > 0;

  const tasks = data?.pages.flatMap((page) => page.tasks);

  console.log(tasks);

  return {
    tasks,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    hasFirstPage,
  };
}
