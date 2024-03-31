import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api";
import { ICategory } from "@/types/interface";

export const useAllCategories = () => {
  const { data } = useQuery<ICategory[]>({
    queryKey: ["allCategories"],
    queryFn: getAllCategories,
  });

  return data;
};
