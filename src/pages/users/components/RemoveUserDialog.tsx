import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { removeUser } from "@/services/userService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface props {
  children: React.ReactNode;
  userId: string;
}

export default function RemoveUserDialog({ children, userId }: props) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync: remove, isPending } = useMutation({
    mutationFn: async () => await removeUser(userId),
    onSuccess: () => {
      toast.success("User removed successfully!");
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete user's
            account and remove data from your company.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            disabled={isPending}
            onClick={async () => await remove()}
          >
            <UserX className="size-4.5" />
            {isPending ? "Removing..." : "Remove"}
          </AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
