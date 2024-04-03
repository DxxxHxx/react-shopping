import { CartItem } from "@/components/cart/CartItem";
import BuyBtn from "@/components/common/BuyBtn";
import { cartSelector } from "@/store";
import { useRecoilState } from "recoil";

export default function Cart() {
  const [cartList, setCartList] = useRecoilState(cartSelector);

  const totalPrice = cartList.reduce((acc, cur) => {
    return (acc += cur.count * cur.price);
  }, 0);

  return (
    <div className="flex flex-col md:p-3 gap-y-10 md:flex-row md:items-start md:justify-between">
      <ul className="flex flex-col gap-y-3">
        {cartList.map((item) => (
          <CartItem key={item.id} {...item} setCartList={setCartList} />
        ))}
      </ul>

      <div className="flex items-center justify-center p-3 gap-x-5 md:flex-col md:gap-y-5">
        <h1 className="text-xl">총 가격 : $ {totalPrice}</h1>
        <BuyBtn cartList={cartList} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
