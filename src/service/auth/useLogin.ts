import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../api";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "@/store";

export const useLogin = (email: string, password: string) => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const { mutate: login } = useMutation({
    mutationFn: async () => {
      const token = await postLogin(email, password);
      const { access_token, refresh_token } = token;
      setAccessToken(access_token);
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      return token;
    },
  });

  return login;
};
