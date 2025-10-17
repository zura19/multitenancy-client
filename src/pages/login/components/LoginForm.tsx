import FormButton from "@/components/shared/FormButton";
import FormInput from "@/components/shared/FormInput";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { loginFormSchema, type loginFormSchemaType } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/services/authServices";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { setUser } from "@/lib/slices/userSlice";
import { useAppDispatch } from "@/lib/store";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  async function onSubmit(values: loginFormSchemaType) {
    const data = await login(values);

    if (!data.success) {
      toast.error(data.message || "Something went wrong");
      return;
    }
    form.reset();
    dispatch(setUser(data.user));
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("user created and Joined successfully");
    navigate("/");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
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
                loadingText="Logging in..."
              >
                Login
              </FormButton>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
