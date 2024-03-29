import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import Loader from "@/components/common/Loader";
import ProductCard from "@/components/common/ProductCard";
import { Input } from "@/components/ui/input";
import { useAllProducts } from "@/service/products/useAllProducts";

export default function Products() {
  const { products, isLoading } = useAllProducts();
  const arr = products?.reduce((acc: string[], cur) => {
    if (!Object.keys(acc).includes(cur.category.name)) {
      return [...acc, cur.category.name];
    }
    return acc;
  }, []);
  const category = ["All", ...new Set(arr)];

  console.log(products?.map(item=>item.images))

  if (isLoading) return <Loader />;
  return (
    <div className="w-full h-full p-5 border">
      <Input
        className="mb-10 text-black md:w-full lg:w-1/3 placeholder:text-base"
        placeholder="Search..."
      />
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
