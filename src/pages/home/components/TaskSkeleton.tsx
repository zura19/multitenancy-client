import { Skeleton } from "@/components/ui/skeleton";

interface props {
  length?: number;
}

export default function TaskSkeleton({ length = 1 }: props) {
  return (
    <div className="space-y-5 w-full">
      {Array.from({ length }, (_, i) => i).map((_, i) => (
        <div key={i} className="flex w-full items-center space-x-3">
          <Skeleton className="h-20 w-full" />
        </div>
      ))}
    </div>
  );
}
