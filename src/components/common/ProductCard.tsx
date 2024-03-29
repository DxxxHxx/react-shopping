import { IProduct } from "@/types/interface";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { noImgURL } from "@/constans";
import { Link } from "react-router-dom";

export default function ProductCard(props: IProduct) {
  return (
    <Link
      to={`/products/${props.id}`}
      className="w-3/4 p-5 border border-gray-700 rounded-2xl"
    >
      <div>
        <img
          src={props.images[0] ?? noImgURL}
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
            <Button className="bg-purple-500">Add To Cart</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
