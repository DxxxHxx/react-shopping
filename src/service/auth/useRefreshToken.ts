import { useMutation } from "@tanstack/react-query";
import { getNewAccessToken } from "../api";
import { useSetRecoilState } from "recoil";
import { accessTokenState } from "@/store";

export const useRefreshToken = () => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await getNewAccessToken();
      const { access_token, refresh_token } = res;
      setAccessToken(access_token);
      localStorage.setItem("refreshToken", refresh_token);
      return res;
    },
  });

  return mutate;
};
