import { useMemo } from "react";
import Tooltip from "@/components/shared/Tooltip";
import { convertDate } from "@/lib/dateUtils";
import { Calendar } from "lucide-react";

interface props {
  shouldBeDoneBy: string;
  status: string;
}

export default function TaskDate({ shouldBeDoneBy, status }: props) {
  const shouldBeDoneTime = useMemo(
    () => new Date(shouldBeDoneBy).getTime(),
    [shouldBeDoneBy]
  );
  const now = Date.now();
  const isExpired = status !== "DONE" && now > shouldBeDoneTime;

  const tooltipText = useMemo(() => {
    if (isExpired) return "Task is expired";
    if (status === "DONE") return "Task is done";

    const timeDiff = shouldBeDoneTime - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (days === 0 && hours === 0 && minutes === 0) return "Task is due now";

    return `Remaining time: ${days ? days + " days," : ""} ${
      hours ? hours + " hours," : ""
    } ${minutes} minutes`;
  }, [isExpired, shouldBeDoneTime, now, status]);

  function textClass() {
    if (isExpired) return "text-destructive";
    if (status === "DONE") return "text-green-500";
    return "";
  }

  return (
    <Tooltip text={tooltipText}>
      <p className={`${textClass()} inline-flex gap-1 items-center`}>
        <Calendar className="size-4" />
        <span className="hidden sm:inline"> Due to: </span>
        <span className="text-xs font-semibold sm:text-sm">
          {convertDate(shouldBeDoneBy)}
        </span>
      </p>
    </Tooltip>
  );
}
