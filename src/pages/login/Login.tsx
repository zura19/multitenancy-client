import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Home } from "lucide-react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className="space-y-4 p-5 rounded-md bg-accent border w-[500px]">
        <Link to={"/"}>
          <Home className="size-5.5 mx-auto" />
        </Link>
        <h1 className="font-bold text-xl">Log in</h1>
        <LoginForm />
        <p className="flex items-center justify-center">
          Don&apos;t have an account?
          <Link
            to="/signup"
            className="text-primary underline-offset-4 underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
