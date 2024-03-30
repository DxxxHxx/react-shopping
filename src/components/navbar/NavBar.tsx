import { useRecoilValue, useSetRecoilState } from "recoil";
import { accessTokenState, isLoggedInState } from "@/store";
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

  const handleLogout = () => {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 p-3 border-b border-gray-500 backdrop-blur-lg">
      <h1>React Shop</h1>
      <Tab />
      <div className="flex items-center justify-center gap-x-3">
        {isLogin ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Cart</DropdownMenuItem>
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
              <li className="p-3 cursor-pointer">Home</li>
              <li className="p-3 cursor-pointer"><Link to={'/products'}>Product</Link></li>
              <li className="p-3 cursor-pointer">About</li>
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

// nav 반응형 => 디테일 페이지 or 카테고리 필터 or 검색
