import { useAppSelector } from "../store";

export default function useUser() {
  const { user } = useAppSelector((state) => state.user);

  const isCompanyAdmin = user?.companyRole === "ADMIN";
  const isAppAdmin = user?.role === "ADMIN";
  return {
    user,
    isAuth: !!user,
    userRole: user?.role,
    isAppAdmin,
    isCompanyAdmin,
    companyId: user?.companyId,
  };
}
