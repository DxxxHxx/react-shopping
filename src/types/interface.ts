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
