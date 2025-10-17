import Wrapper from "@/components/shared/Wrapper";
import AppAdminContent from "./modules/AppAdminContent";
import CompanyContent from "./modules/CompanyContent";
import useUser from "@/lib/hooks/useUser";

export default function Home() {
  const { isAppAdmin } = useUser();
  return (
    <Wrapper className="space-y-4">
      {isAppAdmin ? <AppAdminContent /> : <CompanyContent />}
    </Wrapper>
  );
}
