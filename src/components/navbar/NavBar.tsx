import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessTokenState, cartSelector, isLoggedInState } from "@/store";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import Tab from "./Tab";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function NavBar() {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const isLogin = useRecoilValue(isLoggedInState);
  const cart = useRecoilValue(cartSelector);
  const totalCartItem = cart.reduce((acc, cnt) => {
    return (acc += cnt.count);
  }, 0);

  const handleLogout = () => {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 p-3 border-b border-gray-500 backdrop-blur-lg">
      <Link to={"/"}>
        <h1>React Shop</h1>
      </Link>
      <Tab />
      <div className="flex items-center justify-center gap-x-3">
        {isLogin ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="relative">
              <User />
              <div className="absolute flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full -right-2 -top-4">
                {totalCartItem}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link to={"/cart"}>
                <DropdownMenuItem className="relative cursor-pointer">
                  Cart
                  <div className="absolute top-0 flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full left-9">
                    {totalCartItem}
                  </div>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleLogout}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to={"/signin"}>
            <Button>Log In</Button>
          </Link>
        )}
        <Sheet>
          <SheetTrigger
            className="bg-black min-[320px]:block lg:hidden"
            asChild
          >
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent className="text-white bg-black">
            <ul className="w-full my-8 text-xl ">
              <li className="p-3 cursor-pointer">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="p-3 cursor-pointer">
                <Link to={"/products"}>Product</Link>
              </li>
            </ul>
            <div className="flex justify-center gap-x-5">
              <Button variant={"secondary"}>Log In</Button>
              <Button variant={"secondary"}>Sign Up</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
