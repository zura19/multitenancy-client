import FormButton from "@/components/shared/FormButton";
import FormDatePicker from "@/components/shared/FormDatePicker";
import FormInput from "@/components/shared/FormInput";
import FormTextarea from "@/components/shared/FormTextarea";
import { Form } from "@/components/ui/form";
import { createTaskFormSchema, type createTaskFormSchemaType } from "@/lib/zod";
import { createTask, updateTask } from "@/services/taskService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface props {
  userId: string;
  updateSession?: {
    is: boolean;
    taskId: string;
  };
  data?: createTaskFormSchemaType;
  closeDialog: () => void;
}

export default function GiveTaskForm({
  userId,
  updateSession = {
    is: false,
    taskId: "",
  },
  data,
  closeDialog,
}: props) {
  const form = useForm<createTaskFormSchemaType>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      title: updateSession.is ? data?.title : "",
      description: updateSession.is ? data?.description : "",
      assignedToId: updateSession.is ? data?.assignedToId : userId,
      shouldBeDoneBy: updateSession.is ? data?.shouldBeDoneBy : "",
    },
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  async function onSubmit(values: createTaskFormSchemaType) {
    console.log(values);
    const data = updateSession.is
      ? await updateTask(updateSession.taskId, values)
      : await createTask(values);

    if (!data.success) {
      toast.error(data.message || "Something went wrong");
      return;
    }

    form.reset();
    closeDialog();
    if (updateSession.is) {
      toast.success("Task updated successfully!");
      queryClient.invalidateQueries({
        queryKey: [`task-${updateSession.taskId}`],
      });
    } else {
      toast.success("Task created successfully!");
      navigate("/");
    }

    queryClient.invalidateQueries({
      queryKey: ["tasks"],
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <FormInput
              control={form.control}
              name="title"
              type="text"
              label="Title"
              placeholder="Title"
            />

            <FormTextarea
              control={form.control}
              name="description"
              label="Description"
              placeholder="Description"
              textareaClassName=" min-h-32"
            />

            <FormDatePicker
              control={form.control}
              name="shouldBeDoneBy"
              label="Should be done by"
              placeholder="Should be done by"
            />

            <FormInput
              control={form.control}
              name="assignedToId"
              type="text"
              label="Assigned To"
              placeholder="Assigned To"
              hidden
            />

            <FormButton
              type="submit"
              className="w-full font-bold"
              isLoading={form.formState.isSubmitting}
              loadingText={
                updateSession.is ? "Updating Task..." : "Creating Task..."
              }
            >
              {updateSession.is ? "Update Task" : "Create Task"}
            </FormButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
