import { NavLink } from "react-router-dom";

interface props {
  iconClass: string;
  activeIconClass: string;
  children: React.ReactNode;
  to: string;
  //   label: string;
}

export default function NavbarLink({
  children,
  iconClass,
  activeIconClass,
  to,
}: props) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeIconClass : iconClass)}
      to={to}
    >
      {children}
    </NavLink>
  );
}
