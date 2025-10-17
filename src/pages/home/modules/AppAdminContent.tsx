import { getCompanies } from "@/services/companyService";
import { useQuery } from "@tanstack/react-query";
import CompanySkeleton from "../components/CompanySkeleton";
import Company from "./Company";

export default function AppAdminContent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  return (
    <>
      <h1 className="text-2xl font-bold">Companies</h1>
      {isLoading && <CompanySkeleton length={7} />}
      {error && <p>{error.message}</p>}
      <div className="bg-accent p-3 rounded-md space-y-1 h-[500px] overflow-scroll sm:p-6">
        {data?.companies.map((company) => (
          <Company key={company.id} company={company} />
        ))}
      </div>
    </>
  );
}
