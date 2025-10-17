import { timeAgo } from "@/lib/dateUtils";
import type { Icompany } from "@/lib/types/companyTypes";
import { Link } from "react-router-dom";

interface props {
  company: Icompany;
}

export default function Company({ company }: props) {
  return (
    <Link
      to={`/company/${company.id}`}
      className="flex justify-between p-4 hover:bg-muted-foreground/20 rounded-md transition-all duration-300"
    >
      <p className="font-bold">{company.name}</p>
      <p className="text-sm">
        <span className="hidden sm:inline">Created: </span>
        {timeAgo(company.createdAt)}
      </p>
    </Link>
  );
}
