import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "@/pages/SignIn";
import About from "@/pages/About";
import Products from "@/pages/products/Products";
import ProductDetail from "@/pages/products/ProductDetail";
import Cart from "@/pages/products/Cart";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
