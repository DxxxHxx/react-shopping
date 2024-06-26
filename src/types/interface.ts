import { SetterOrUpdater } from "recoil";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ITeaserImg {
  image: string;
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void;
  selectedImg: string;
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ICart extends IProduct {
  count: number;
}

export interface ICartItem extends ICart {
  setCartList: SetterOrUpdater<ICart[]>;
}
