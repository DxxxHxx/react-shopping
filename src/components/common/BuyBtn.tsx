import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { ICart } from "@/types/interface";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/store";

export default function BuyBtn({
  cartList,
  totalPrice,
}: {
  cartList: ICart[];
  totalPrice: number;
}) {
  const setCart = useSetRecoilState(cartState);
  const navigate = useNavigate();
  const handleBuy = () => {
    alert("구매완료!");
    setCart([]);
    navigate("/products");
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"secondary"}>구매</Button>
      </DrawerTrigger>

      <DrawerContent className="text-white bg-black">
        <DrawerHeader>
          <DrawerTitle>구매 페이지</DrawerTitle>
          <DrawerDescription>상품을 확인해주세요.</DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle>상품 구매</DrawerTitle>
            <DrawerDescription>상품을 확인해주세요.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col p-4 pb-0 gap-y-5">
            <ul className="flex flex-col items-start justify-center space-x-2">
              {cartList.map((item) => (
                <li key={item.id} className="p-3 mb-2 ">
                  <span className="text-xs">
                    {item.title} ({item.count}) : $ {item.price * item.count}
                  </span>
                </li>
              ))}
            </ul>
            <h1 className="text-lg text-center md:text-xl">
              total : $ {totalPrice}
            </h1>
          </div>
          <DrawerFooter>
            <Button onClick={handleBuy}>구매</Button>
            <DrawerClose asChild>
              <Button variant="secondary">취소</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
