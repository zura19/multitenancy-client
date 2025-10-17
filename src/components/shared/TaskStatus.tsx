import useUser from "@/lib/hooks/useUser";
import type { Istatus } from "@/lib/types/taskTypes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { data } from "@/constants/statusDropdownData";
import { ChevronDownIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeTaskStatus } from "@/services/taskService";
import { toast } from "sonner";

interface props {
  status: Istatus;
  taskId: string;
  assignedToId: string;
}

export default function TaskStatus({
  status: statusProp,
  taskId,
  assignedToId,
}: props) {
  const { user } = useUser();
  const canMutate = user?.companyRole === "ADMIN" || user?.id == assignedToId;
  const [status, setStatus] = useState(() => statusProp);

  const active = data.find((item) => item.value == status);

  async function handleStatusChange(status: Istatus) {
    setStatus(status);
    await changeTaskStatus(taskId, status);
  }
  const queryClient = useQueryClient();
  const { mutateAsync: change } = useMutation({
    mutationFn: (status: Istatus) => handleStatusChange(status),
    onSuccess: () => {
      toast.success("Status changed successfully");
      queryClient.invalidateQueries({ queryKey: [`task-${taskId}`] });
    },
    onError: (err: Error) => {
      toast.error(err.message || "Something went wrong");
      setStatus(statusProp);
    },
  });

  if (canMutate) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={`max-w-28 rounded-full h-7 text-xs sm:rounded-md sm:h-fit sm:max-w-fit sm:text-sm text-${active?.classname}`}
            variant="ghost"
          >
            {active?.name} <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Task status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={status}
            // @ts-expect-error shadcn error
            onValueChange={change}
          >
            {data.map((item) => (
              <DropdownMenuRadioItem
                key={item.id}
                value={item.value}
                className={`cursor-pointer ${item.classname}`}
              >
                {item.name}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  return (
    <Button
      variant="ghost"
      disabled
      className={`max-w-28 rounded-full h-7 text-xs sm:rounded-md sm:h-fit sm:max-w-fit sm:text-sm text-${active?.classname}`}
    >
      {active?.name} <ChevronDownIcon />
    </Button>
  );
}
