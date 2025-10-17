import { Skeleton } from "@/components/ui/skeleton";

export default function TaskSkeleton() {
  return (
    <div className="h-[80dvh]">
      <Skeleton className="h-full w-full" />
    </div>
  );
}
