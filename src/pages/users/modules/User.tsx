import UserAvatar from "@/components/shared/UserAvatar";
import type { Iuser } from "@/lib/types/userTypes";
import CompanyAdminZone from "../components/CompanyAdminZone";
import useUser from "@/lib/hooks/useUser";
interface props {
  user: Iuser;
}

export default function User({ user }: props) {
  const { isCompanyAdmin, isAppAdmin } = useUser();
  return (
    <div className="flex items-center gap-2 hover:bg-muted-foreground/20 p-2 rounded-md transition-all duration-300">
      <UserAvatar name={user.name} />
      <div className="gap-0">
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      {isCompanyAdmin && !isAppAdmin && (
        <div className="ml-auto">
          <CompanyAdminZone user={user} />
        </div>
      )}
    </div>
  );
}
