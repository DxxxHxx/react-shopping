import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import Loader from "@/components/common/Loader";
import ProductCard from "@/components/common/ProductCard";
import { Input } from "@/components/ui/input";
import { useAllProducts } from "@/service/products/useAllProducts";
import { IProduct } from "@/types/interface";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Products() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<IProduct[]>([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        const productId = searchData[selectedItem].id;
        navigate(`/products/${productId}`);
      }
    } else {
      setSelectedItem(-1);
    }
  };

  const { products, isLoading } = useAllProducts();
  const arr = products?.reduce((acc: string[], cur) => {
    if (!Object.keys(acc).includes(cur.category.name)) {
      return [...acc, cur.category.name];
    }
    return acc;
  }, []);
  const category = ["All", ...new Set(arr)];

  useEffect(() => {
    if (search !== "") {
      const searchData = products?.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchData(searchData!);
    } else {
      setSearchData([]);
    }
  }, [search, products]);

  if (isLoading) return <Loader />;
  return (
    <div className="w-full h-full p-5 border">
      <div className="relative mb-10">
        <Input
          className={`text-black md:w-full lg:w-1/3 placeholder:text-base ${
            search !== "" && searchData.length > 0 ? "rounded-b-none" : ""
          }`}
          placeholder="Search..."
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyDown}
        />
        {search !== "" && searchData.length > 0 ? (
          <ul className="absolute left-0 p-2 text-black bg-white border rounded-b-lg md:w-full lg:w-1/3 ">
            {searchData.map((data, index) => (
              <Link to={`/products/${data.id}`} key={data.id}>
                <li
                  className={`p-1 hover:bg-[rgba(0,0,0,.2)] ${
                    selectedItem === index && "bg-[rgba(0,0,0,.2)]"
                  }`}
                >
                  {data.title}
                </li>
              </Link>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex min-[320px]:flex-col-reverse lg:flex-row lg:justify-between">
        <div className="grid gap-y-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <CategoryFilter categories={category} />
      </div>
    </div>
  );
}
