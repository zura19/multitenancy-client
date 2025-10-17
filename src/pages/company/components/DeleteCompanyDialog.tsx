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
import { deleteCompany } from "@/services/companyService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface props {
  id: string;
}

export default function DeleteCompanyDialog({ id }: props) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: deleteFn, isPending } = useMutation({
    mutationFn: () => deleteCompany(id),
    onSuccess: () => {
      toast.success("Company deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["companies"] });
      navigate("/");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="p-2 rounded-full cursor-pointer  hover:bg-muted-foreground/20 transition-all duration-300">
          <Trash2Icon className="size-5" />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete Company
            and remove all the users and data from your applcation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction disabled={isPending} onClick={() => deleteFn()}>
            <span>
              <Trash2Icon className="size-5" />
            </span>
            Delete
          </AlertDialogAction>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
