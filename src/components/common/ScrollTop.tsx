import { ArrowBigUp } from "lucide-react";

export default function ScrollTop() {
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={handleScroll}
      className={`fixed p-2 border-2 border-gray-500 rounded-full cursor-pointer bg-stone-800 md:p-3 bottom-2 right-2`}
    >
      <ArrowBigUp className="" />
    </div>
  );
}
