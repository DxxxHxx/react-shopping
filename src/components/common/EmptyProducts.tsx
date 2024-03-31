import { Frown } from "lucide-react";

export default function EmptyProducts() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Frown className="size-24" />
      <h1 className="text-xl">상품이 존재하지 않습니다.</h1>
    </div>
  );
}
