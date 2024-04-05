import { Link, useMatch } from "react-router-dom";
export default function Tab() {
  const homeMatch = useMatch("/");
  const productMatch = useMatch("/products");

  return (
    <ul className="items-center justify-between bg-black border min-[320px]:hidden lg:flex rounded-3xl">
      <li className="px-5 py-2 text-3xl cursor-pointer shrink-0 hover:text-gray-400">
        <Link className={homeMatch! && `text-gray-400`} to={"/"}>
          Home
        </Link>
      </li>
      <li className="px-5 py-2 text-3xl cursor-pointer shrink-0 hover:text-gray-400">
        <Link className={productMatch! && `text-gray-400`} to={"/products"}>
          Products
        </Link>
      </li>
    </ul>
  );
}
