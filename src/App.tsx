import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Router from "./components/router";
import ScrollTop from "./components/common/ScrollTop";

export default function App() {
  // const accessToken = useRecoilValue(accessTokenState);
  // const refresh = useRefreshToken();
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) {
  //     refresh();
  //   }
  // }, [refresh]);
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      <ScrollTop/>
    </BrowserRouter>
  );
}
