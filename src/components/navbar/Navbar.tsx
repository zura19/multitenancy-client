import { LogOut, PackageOpenIcon } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import { Link } from "react-router-dom";
import useUser from "@/lib/hooks/useUser";
import useLogOut from "@/lib/hooks/useLogOut";
import NavbarLink from "./NavbarLink";
import { iconSize, navbarData } from "@/constants/navbarData";

export default function Navbar() {
  const { isAuth } = useUser();
  const iconClass =
    " p-2  rounded-full hover:bg-accent transition-colors duration-300 ";
  const activeIconClass = iconClass + " bg-accent";
  const { logOut } = useLogOut();

  return (
    <div className=" border-b">
      <Wrapper className="flex justify-between">
        <Link to="/" className={`${iconClass}`}>
          <PackageOpenIcon className={` ${iconSize}`} />
        </Link>

        <ul className="flex gap-4">
          {navbarData.default.map(({ to, icon }) => (
            <NavbarLink
              key={to}
              iconClass={iconClass}
              activeIconClass={activeIconClass}
              to={to}
            >
              {icon}
            </NavbarLink>
          ))}

          {isAuth ? (
            <>
              {navbarData.auth.map(({ to, icon }) => (
                <NavbarLink
                  key={to}
                  iconClass={iconClass}
                  activeIconClass={activeIconClass}
                  to={to}
                >
                  {icon}
                </NavbarLink>
              ))}

              <div onClick={logOut} className={`${iconClass} cursor-pointer`}>
                <LogOut className={` ${iconSize}`} />
              </div>
            </>
          ) : (
            <>
              {navbarData.notAuth.map(({ to, icon }) => (
                <NavbarLink
                  key={to}
                  iconClass={iconClass}
                  activeIconClass={activeIconClass}
                  to={to}
                >
                  {icon}
                </NavbarLink>
              ))}
            </>
          )}
        </ul>
      </Wrapper>
    </div>
  );
}
