import useUser from "@/lib/hooks/useUser";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

interface props {
  className?: string;
  fallbackClassName?: string;
  name?: string;
}

export default function UserAvatar({
  className,
  fallbackClassName,
  name,
}: props) {
  const { user } = useUser();

  return (
    <Avatar
      className={`bg-muted size-10 flex items-center justify-center border ${className}`}
    >
      <AvatarImage src={"/placeholder.svg"} alt={name || user?.name} />
      <AvatarFallback className={`text-lg font-medium ${fallbackClassName}`}>
        {name?.charAt(0).toUpperCase() || user?.name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
