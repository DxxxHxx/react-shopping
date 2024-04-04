import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuth = localStorage.getItem("accessToken");

  const handleNavigate = () => {
    alert("로그인 후 이용 가능합니다.");
    return <Navigate to={"/signin"} />;
  };

  return isAuth ? <Outlet /> : handleNavigate();
}
