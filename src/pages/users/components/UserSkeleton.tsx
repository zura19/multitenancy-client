import { Skeleton } from "@/components/ui/skeleton";

interface props {
  length?: number;
}

export default function UserSkeleton({ length = 1 }: props) {
  return (
    <div className="space-y-5">
      {Array.from({ length }, (_, i) => i).map((_, i) => (
        <div key={i} className="flex items-center space-x-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-[100px]" />
            <Skeleton className="h-3 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
