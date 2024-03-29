import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api";
import { IProduct } from "@/types/interface";

export const useAllProducts = () => {
  const { data: products, isLoading } = useQuery<IProduct[]>({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  return { products, isLoading };
};
