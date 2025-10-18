import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import useUser from "./lib/hooks/useUser";
import MainLayout from "./layouts/MainLayout";
import Users from "./pages/users/Users";
import NotFound from "./pages/not-found/NotFound";
import Task from "./pages/task/Task";
import Profile from "./pages/profile/Profile";
import Company from "./pages/company/Company";

function App() {
  const { isAuth, isAppAdmin } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={isAuth ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/users"
            element={isAuth ? <Users /> : <Navigate to="/login" />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/company/:id"
            element={isAppAdmin ? <Company /> : <Navigate to="/" />}
          />
        </Route>

        <Route
          path="/signup"
          element={isAuth ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
