import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import { getUsers } from "@/services/userService";
import { useSearchParams } from "react-router-dom";

export default function useGetUsers() {
  const { isCompanyAdmin, user } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.toString();

  function handleSerch(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;
    if (e.target.value.length === 0) {
      searchParams.delete("name");
      setSearchParams(searchParams);
    }

    if (e.target.value.length > 2) {
      searchParams.set("name", name);
      setSearchParams(searchParams);
    }
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["users", query, user?.id],
    queryFn: () => getUsers(query),
  });

  return {
    data,
    error,
    isLoading,
    isCompanyAdmin,
    handleSerch,
    // handleSetUserSearchParams,
    // handleResetUserSearchParams,
  };
}
