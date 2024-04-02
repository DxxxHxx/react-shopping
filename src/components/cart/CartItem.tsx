import { ICart, ICartItem } from "@/types/interface";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const CartItem = (props: ICartItem) => {
  const handleMinus = (e: React.MouseEvent<HTMLButtonElement>, item: ICart) => {
    e.preventDefault();
    props.setCartList((prev) => {
      return prev
        .map((c) => {
          if (c.id === item.id) {
            return { ...c, count: c.count - 1 };
          } else {
            return { ...c };
          }
        })
        .filter((item) => item.count > 0);
    });
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>, item: ICart) => {
    e.preventDefault();
    props.setCartList((prev) => {
      return prev.map((c) => {
        if (c.id === item.id) {
          return { ...c, count: c.count + 1 };
        } else {
          return { ...c };
        }
      });
    });
  };
  return (
    <Link key={props.id} to={`/products/${props.id}`}>
      <li className="flex h-40 p-3 rounded-xl gap-x-3 hover:bg-[rgba(255,255,255,.2)]">
        <img
          className="w-28 md:w-24 rounded-xl"
          src={props.images[0]}
          alt="img"
        />
        <div className="flex flex-col gap-y-3">
          <span className="text-sm md:text-lg">{props.title}</span>
          <div className="flex items-center gap-x-2">
            <Button
              onClick={(e) => handleMinus(e, props)}
              className="text-sm rounded-br-none rounded-lg-none md:text-xl"
              variant={"secondary"}
            >
              -
            </Button>
            <span className="text-sm md:text-lg">{props.count}</span>
            <Button
              onClick={(e) => handleAdd(e, props)}
              className="text-sm rounded-bl-none rounded-lg-none md:text-xl"
              variant={"secondary"}
            >
              +
            </Button>
          </div>
          <span className="text-base md:text-lg">
            가격 : $ {props.price * props.count}
          </span>
        </div>
      </li>
    </Link>
  );
};
