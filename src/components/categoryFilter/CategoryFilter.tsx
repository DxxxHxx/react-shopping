import { ICategory } from "@/types/interface";
import { useNavigate } from "react-router-dom";

export default function CategoryFilter({
  categories,
}: {
  categories: ICategory[];
}) {
  const navigate = useNavigate();
  return (
    <ul className="h-full p-3 mb-5 border rounded-2xl">
      <li
        onClick={() => navigate("/products")}
        className="p-3 cursor-pointer hover:bg-[rgba(255,255,255,.7)] rounded-lg"
      >
        All
      </li>
      {categories?.map((category, index) => (
        <li
          className="p-3 cursor-pointer hover:bg-[rgba(255,255,255,.7)] rounded-lg"
          key={`${category}_${index}`}
          onClick={() => navigate(`/products?category=${category.id}`)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
