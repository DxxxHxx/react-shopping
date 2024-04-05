import { useInfiniteQuery } from "@tanstack/react-query";
import { getPaginatedProducts } from "../api";

export const usePaginatedProducts = ({
  pageParam = 0,
}: {
  pageParam: number;
}) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products", pageParam + ""],
    queryFn: ({ pageParam }) => getPaginatedProducts({ pageParam }),
    getNextPageParam: (lastPage) => {
      // console.log(lastPage);
      return lastPage.products.length > 0
        ? lastPage.prevOffset + 12
        : undefined;
    },
    initialPageParam: 0,
  });
  return { data, fetchNextPage, hasNextPage };
};
