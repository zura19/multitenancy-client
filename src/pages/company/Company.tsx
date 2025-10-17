import Tooltip from "@/components/shared/Tooltip";
import Wrapper from "@/components/shared/Wrapper";
import { timeAgo } from "@/lib/dateUtils";
import { getCompany } from "@/services/companyService";
import { useQuery } from "@tanstack/react-query";
import { ClipboardList, UsersRoundIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import TaskSkeleton from "../task/components/TaskSkeleton";
import DeleteCompanyDialog from "./components/DeleteCompanyDialog";

export default function Company() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: [`company-${id}`, id],
    queryFn: () => getCompany(id!),
  });

  if (!data) return null;

  const company = data.company;

  return (
    <Wrapper>
      {isLoading && <TaskSkeleton />}
      {error && <p>{error.message}</p>}
      {data && (
        <div className=" bg-accent space-y-4 p-3 rounded-md sm:p-6 ">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-xl">{company.name}</h1>
              <DeleteCompanyDialog id={company.id} />
            </div>
            <p className="text-sm text-muted-foreground">
              Created: {timeAgo(company.createdAt)} by {company.admin.name} (
              {company.admin.email})
            </p>
          </div>

          <div className="flex items-center justify-around">
            <Tooltip text="Total Users">
              <p className="flex items-center gap-1">
                <UsersRoundIcon className="size-5.5" />
                <span className="font-semibold">{company.totalUsers} </span>
              </p>
            </Tooltip>

            <Tooltip text="Total Tasks">
              <p className="flex items-center gap-1">
                <ClipboardList className="size-5.5" />
                <span className="font-semibold">{company.totalTasks} </span>
              </p>
            </Tooltip>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
