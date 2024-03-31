import { useQuery } from "@tanstack/react-query";
import { filterByCategory } from "../api";
import { IProduct } from "@/types/interface";

export const useFilterByCategory = (id: number) => {
  const { data: filteredProducts, isLoading: filteredLoading } = useQuery<
    IProduct[]
  >({
    queryKey: ["category", id + ""],
    queryFn: () => filterByCategory(id),
  });
  return { filteredProducts, filteredLoading };
};
