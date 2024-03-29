import { accessTokenState } from "@/store";
import { useSetRecoilState } from "recoil";

export const useLogout = () => {
  const setAccessToken = useSetRecoilState(accessTokenState);

  return setAccessToken
};
