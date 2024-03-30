import { useQuery } from "@tanstack/react-query";
import { getSingleProducts } from "../api";
import { IProduct } from "@/types/interface";

export const useSingleProducts = (id: number) => {
  const { data: product, isLoading } = useQuery<IProduct>({
    queryKey: ["product", id],
    queryFn: () => getSingleProducts(id),
  });

  return { product, isLoading };
};
