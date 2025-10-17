import Tooltip from "@/components/shared/Tooltip";
import { Button } from "@/components/ui/button";
import { ClipboardClock, UserX } from "lucide-react";
import GiveTaskDialog from "./GiveTaskDialog";
import type { Iuser } from "@/lib/types/userTypes";
import RemoveUserDialog from "./RemoveUserDialog";

interface props {
  user: Iuser;
}

export default function CompanyAdminZone({ user }: props) {
  return (
    <div className="flex items-center gap-0">
      <GiveTaskDialog user={user}>
        <div>
          <Tooltip text={`Give task to ${user.name}`}>
            <Button
              size={"icon"}
              variant={"ghost"}
              className="rounded-full p-5.5 transition-colors duration-300"
            >
              <ClipboardClock className="size-6" />
            </Button>
          </Tooltip>
        </div>
      </GiveTaskDialog>

      <RemoveUserDialog userId={user.id}>
        <div>
          <Tooltip text="Remove user">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="rounded-full p-5.5 transition-colors duration-300"
            >
              <UserX className="size-6" />
            </Button>
          </Tooltip>
        </div>
      </RemoveUserDialog>
    </div>
  );
}
