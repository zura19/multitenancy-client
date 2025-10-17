import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateCompanyAccountForm from "../components/CreateCompanyAccountForm";
import JoinCompanyCreateAccountForm from "../components/JoinCompanyCreateAccountForm";
import { Link } from "react-router-dom";

export default function SignupTabs() {
  return (
    <Tabs defaultValue="create" className="w-[700px]">
      <TabsList className="w-full">
        <TabsTrigger value="create">Create company & account</TabsTrigger>
        <TabsTrigger value="join">Join company & create account</TabsTrigger>
      </TabsList>
      <TabsContent
        className="p-5 rounded-md bg-accent space-y-4 border"
        value="create"
      >
        <h1 className="font-bold text-xl">Create Company</h1>
        <CreateCompanyAccountForm />
        <p className="flex items-center justify-center">
          Alredy have an account?
          <Link
            to="/login"
            className="text-primary underline-offset-4 underline ml-1"
          >
            Log in
          </Link>
        </p>
      </TabsContent>
      <TabsContent
        className="p-5 rounded-md bg-accent space-y-4 border"
        value="join"
      >
        <h1 className="font-bold text-xl">Join Company</h1>
        <JoinCompanyCreateAccountForm />
        <p className="flex items-center justify-center">
          Alredy have an account?
          <Link
            to="/login"
            className="text-primary underline-offset-4 underline ml-1"
          >
            Log in
          </Link>
        </p>
      </TabsContent>
    </Tabs>
  );
}
