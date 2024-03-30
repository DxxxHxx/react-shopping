import Loader from "@/components/common/Loader";
import TeaserImg from "@/components/productDetail/TeaserImg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSingleProducts } from "@/service/products/useSingleProducts";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const { product, isLoading } = useSingleProducts(+id!);
  const [selectedImg, setSelectedImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setSelectedImg(product.images[0]);
    }
  }, [product]);

  const handleClickImg = (e: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImg(e.currentTarget.src);
  };

  if (isLoading) return <Loader />;
  return (
    <div className="items-center justify-center md:absolute md:top-0 md:left-0 md:flex md:h-screen md:p-5">
      <div className="relative flex flex-col w-full md:h-[500px] p-5 border md:flex-row bg-stone-900 rounded-xl">
        <Button
          onClick={() => navigate(-1)}
          variant={"secondary"}
          className="absolute right-3 top-3"
        >
          Back
        </Button>
        <div
          id="imgContainer"
          className="flex flex-col items-center justify-center w-full mb-3 md:flex-row-reverse md:justify-center md:gap-x-5 gap-y-3 "
        >
          <img
            className="w-full border md:w-1/2 rounded-xl"
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
            <Button className="bg-purple-400">Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
