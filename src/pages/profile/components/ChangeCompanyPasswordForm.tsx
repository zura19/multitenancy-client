import FormButton from "@/components/shared/FormButton";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import useLogOut from "@/lib/hooks/useLogOut";
import {
  changeCompanyPasswordFormSchema,
  type changeCompanyPasswordFormSchemaType,
} from "@/lib/zod";
import { changeCompanyPassword } from "@/services/companyService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ChangeCompanyPasswordForm() {
  const form = useForm<changeCompanyPasswordFormSchemaType>({
    resolver: zodResolver(changeCompanyPasswordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const { logOut } = useLogOut();
  async function onSubmit(vals: changeCompanyPasswordFormSchemaType) {
    const data = await changeCompanyPassword(vals);

    if (!data.success) {
      toast.error(data.message || "Something went wrong");
      return;
    }

    await logOut();
    toast.success("Password changed successfully!");
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput
          control={form.control}
          name="currentPassword"
          type="password"
          placeholder="Password"
          label="Current Password"
        />

        <FormInput
          control={form.control}
          name="newPassword"
          type="password"
          placeholder="New Password"
          label="New Password"
        />

        <FormInput
          control={form.control}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          label="Confirm Password"
        />

        <FormButton
          type="submit"
          isLoading={form.formState.isSubmitting}
          loadingText="Changing..."
        >
          Change Password
        </FormButton>
      </form>
    </Form>
  );
}
