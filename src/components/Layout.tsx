import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container h-full px-3 mx-auto mt-20 ">
      <Outlet />
    </div>
  );
}
