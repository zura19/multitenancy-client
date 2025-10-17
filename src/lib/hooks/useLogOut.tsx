import { logOut as logOutService } from "@/services/authServices";
import { useAppDispatch } from "../store";
import { clearUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useLogOut() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  async function logOut() {
    const data = await logOutService();

    if (data.success) {
      dispatch(clearUser());
      localStorage.removeItem("user");
      toast.success("Logout successfully");
      navigate("/login");
    } else {
      toast.error(data.message || "Something went wrong");
    }
  }

  return { logOut };
}
