import { Link } from "react-router-dom";
export default function Tab() {
  return (
    <ul className="items-center justify-between bg-black border min-[320px]:hidden lg:flex rounded-3xl">
      <li className="px-5 py-2 text-3xl cursor-pointer shrink-0 hover:text-gray-400">
        Home
      </li>
      <li className="px-5 py-2 text-3xl cursor-pointer shrink-0 hover:text-gray-400">
        <Link to={"/products"}>Products</Link>
      </li>
      <li className="px-5 py-2 text-3xl cursor-pointer shrink-0 hover:text-gray-400">
        About
      </li>
    </ul>
  );
}
