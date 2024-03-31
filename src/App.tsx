import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Router from "./components/router";
import { useRefreshToken } from "@/service/auth/useRefreshToken";
import { accessTokenState } from "@/store";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function App() {
  const accessToken = useRecoilValue(accessTokenState);
  const refresh = useRefreshToken();
  useEffect(() => {
    if (accessToken === "") {
      refresh();
    }
  }, [refresh, accessToken]);
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}
