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
