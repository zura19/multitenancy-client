import Wrapper from "@/components/shared/Wrapper";
import User from "./modules/User";
import UserSkeleton from "./components/UserSkeleton";
import { Input } from "@/components/ui/input";
import useGetUsers from "@/lib/hooks/useGetUsers";

export default function Users() {
  const { data, error, isLoading, isCompanyAdmin, handleSerch } = useGetUsers();

  return (
    <Wrapper className=" space-y-6">
      <div>
        <h1 className="font-bold text-2xl">Users</h1>
        <p className="text-muted-foreground">
          {isCompanyAdmin
            ? "You can give tasks or delete users from this company"
            : "You can only see users of the company"}
        </p>
      </div>
      <Input onChange={handleSerch} placeholder="Search users" />
      <div className="space-y-5">
        {isLoading && <UserSkeleton length={8} />}
        {error && <p>{error.message}</p>}

        <div>
          {data?.users.map((u) => (
            <User key={u.id} user={u} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
