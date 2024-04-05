import Loader from "@/components/common/Loader";
import TeaserImg from "@/components/productDetail/TeaserImg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { useSingleProducts } from "@/service/products/useSingleProducts";
import { cartState } from "@/store";
import { IProduct } from "@/types/interface";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, isLoading } = useSingleProducts(+id!);
  const [selectedImg, setSelectedImg] = useState("");
  const navigate = useNavigate();
  const setCart = useSetRecoilState(cartState);

  useEffect(() => {
    if (product) {
      setSelectedImg(product.images[0]);
    }
  }, [product]);

  const handleClickImg = (e: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImg(e.currentTarget.src);
  };

  const handleAddCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) => {
    e.preventDefault();
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }
    setCart((prev) => [...prev, { ...product, count: 1 }]);
    toast(`${product.title}을(를) 장바구니에 담았습니다.`, {
      description: new Date().toLocaleTimeString(),
      action: {
        label: "장바구니로",
        onClick: () => navigate("/cart"),
      },
    });
  };

  if (isLoading) return <Loader />;
  return (
    <div className="items-center justify-center md:absolute md:top-0 md:left-0 md:flex md:h-screen md:p-5">
      <div className="relative flex flex-col w-full md:h-[500px] p-5 border md:flex-row bg-stone-900 rounded-xl">
        <Button
          onClick={() => navigate(-1)}
          variant={"secondary"}
          className="absolute z-10 right-3 top-3"
        >
          Back
        </Button>
        <div
          id="imgContainer"
          className="flex flex-col items-center justify-center w-full mb-3 md:flex-row-reverse md:justify-center md:gap-x-5 gap-y-3 "
        >
          <img
            className="relative z-0 w-full border cursor-pointer md:w-1/2 rounded-xl"
            src={selectedImg}
            alt="main image"
          />
          <div className="flex justify-center md:flex-col md:gap-y-3 gap-x-3">
            {product?.images.map((image) => (
              <TeaserImg
                image={image}
                onClick={handleClickImg}
                selectedImg={selectedImg}
                key={image}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 gap-y-5">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-3xl">{product?.title}</h1>
            <Badge
              className="flex items-center justify-center w-24"
              variant={"secondary"}
            >
              {product?.category.name}
            </Badge>
          </div>

          <div>
            <span className="text-gray-400">{product?.description}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-400">Price</span>
              <h1 className="text-xl">$ {product?.price}</h1>
            </div>
            <Button
              onClick={(e) => handleAddCart(e, product!)}
              className="bg-purple-400"
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "black",
            border: "1px solid gray",
            color: "whitesmoke",
          },
        }}
      />
    </div>
  );
}
