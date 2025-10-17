import Wrapper from "@/components/shared/Wrapper";
import useUser from "@/lib/hooks/useUser";
import CompanyUserProfile from "./modules/CompanyUserProfile";
import AppAdminProfile from "./modules/AppAdminProfile";

export default function Profile() {
  const { isAppAdmin } = useUser();
  return (
    <Wrapper>
      {isAppAdmin ? <AppAdminProfile /> : <CompanyUserProfile />}
    </Wrapper>
  );
}
