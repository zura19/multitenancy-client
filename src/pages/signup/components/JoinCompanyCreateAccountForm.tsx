import FormButton from "@/components/shared/FormButton";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  joinCompanyCreateAccountFormSchema,
  type joinCompanyAccountFormSchemaType,
} from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { joinCompanyAndSignUp } from "@/services/authServices";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function JoinCompanyCreateAccountForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<joinCompanyAccountFormSchemaType>({
    resolver: zodResolver(joinCompanyCreateAccountFormSchema),
    defaultValues: {
      company: "",
      companyPassword: "",
      email: "",
      password: "",
      name: "",
    },
  });

  const navigate = useNavigate();
  async function onSubmit(values: joinCompanyAccountFormSchemaType) {
    const data = await joinCompanyAndSignUp(values);

    if (!data.success) {
      toast.error(data.message || "Something went wrong");
      return;
    }
    // form.reset();
    toast.success("user created and Joined successfully");
    navigate("/login");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <FormInput
                control={form.control}
                name="company"
                type="text"
                label="company"
                placeholder="company"
              />

              <FormInput
                control={form.control}
                name="companyPassword"
                type="password"
                label="company password"
                placeholder="company password"
              />

              <FormInput
                control={form.control}
                name="name"
                type="text"
                label="name"
                placeholder="name"
              />

              <FormInput
                control={form.control}
                name="email"
                type="text"
                label="email"
                placeholder="m@example.com"
              />

              <FormInput
                control={form.control}
                name="password"
                type="password"
                label="password"
                placeholder="password"
              />

              <FormButton
                type="submit"
                className="w-full font-bold"
                isLoading={form.formState.isSubmitting}
                loadingText="Joining..."
              >
                Sign up & Join
              </FormButton>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
