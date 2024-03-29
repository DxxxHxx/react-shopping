import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Router from "./components/router";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}
