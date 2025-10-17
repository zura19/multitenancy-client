import UserAvatar from "@/components/shared/UserAvatar";
import { Building, Home, LogIn, UsersRoundIcon } from "lucide-react";

export const iconSize = "size-5.5";
export const navbarData = {
  default: [
    {
      to: "/",
      icon: <Home className={`${iconSize}`} />,
    },
  ],

  notAuth: [
    {
      to: "/login",
      icon: <LogIn className={`${iconSize}`} />,
    },
    {
      to: "/signup",
      icon: <Building className={`${iconSize}`} />,
    },
  ],

  auth: [
    {
      to: "/users",
      icon: <UsersRoundIcon className={`${iconSize}`} />,
    },

    {
      to: "/profile",
      icon: <UserAvatar className={`${iconSize}`} />,
    },
  ],
};
