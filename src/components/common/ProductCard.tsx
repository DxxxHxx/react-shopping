import { IProduct } from "@/types/interface";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { noImgURL } from "@/constans";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "sonner";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/store";

export default function ProductCard(props: IProduct) {
  const navigate = useNavigate();
  const setCart = useSetRecoilState(cartState);

  const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    setCart((prev) => [...prev, { ...props, count: 1 }]);
    toast(`${props.title}을(를) 장바구니에 담았습니다.`, {
      description: new Date().toLocaleTimeString(),
      action: {
        label: "장바구니로",
        onClick: () => navigate("/cart"),
      },
    });
  };
  return (
    <Link
      to={`/products/${props.id}`}
      className="w-3/4 p-5 border border-gray-700 rounded-2xl"
    >
      <div>
        <img
          src={props.images[0].includes("[") ? noImgURL : props.images[0]}
          className="w-full mb-3 rounded-2xl"
          alt="product image"
        />

        <div className="flex flex-col justify-start gap-y-3">
          <div className="min-h-16">
            <h1 className="text-base font-bold">{props.title}</h1>
            <span className="text-xs text-gray-400 line-clamp-1">
              {props.description}
            </span>
          </div>

          <div>
            <Badge variant="secondary">{props.category.name}</Badge>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-400">Price</span>
              <h1 className="text-base">$ {props.price}</h1>
            </div>
            <Button onClick={handleAddCart} className="bg-purple-500">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
