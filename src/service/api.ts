import axios, { AxiosError } from "axios";

export const postLogin = async (email: string, password: string) => {
  const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
    email,
    password,
  });
  console.log(res);
  return res.data;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const res = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/refresh-token",
      {
        refreshToken,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.status === 400) {
        //logout
      }
    }
  }
};

export const getAllProducts = async () => {
  return (await axios.get(`https://api.escuelajs.co/api/v1/products`)).data;
};

export const getSingleProducts = async (id: number) => {
  return (await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`))
    .data;
};

export const getAllCategories = async () => {
  return (await axios.get("https://api.escuelajs.co/api/v1/categories")).data;
};

export const filterByCategory = async (categoryId: number) => {
  return await axios
    .get(`https://api.escuelajs.co/api/v1/products`, {
      params: { categoryId },
    })
    .then((res) => res.data);
};

export const getPaginatedProducts = async ({
  pageParam = 0,
}: {
  pageParam: number;
}) => {
  const res = (
    await axios.get(
      `https://api.escuelajs.co/api/v1/products?offset=${pageParam}&limit=12`
    )
  ).data;
  return { products: res, prevOffset: pageParam };
};
