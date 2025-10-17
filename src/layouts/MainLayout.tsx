import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-dvh">
      <Navbar />
      <main className="overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}
