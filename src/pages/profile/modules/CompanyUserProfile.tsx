import UserAvatar from "@/components/shared/UserAvatar";
import useUser from "@/lib/hooks/useUser";
import TasksList from "@/pages/home/modules/TasksList";

export default function CompanyUserProfile() {
  const { user } = useUser();

  return (
    <div className="space-y-5">
      <h1 className="font-bold text-3xl">Profile</h1>
      <div className="flex items-center gap-4 bg-muted rounded-md py-2 px-4">
        <UserAvatar name={user?.name} />
        <div>
          <p className="font-bold">{user?.name}</p>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-2xl">My Tasks</h1>
        <TasksList type="logged" />
      </div>
    </div>
  );
}
