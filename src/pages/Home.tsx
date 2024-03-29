import { useRefreshToken } from "@/service/auth/useRefreshToken";
import { accessTokenState } from "@/store";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function Home() {
  const accessToken = useRecoilValue(accessTokenState);
  const refresh = useRefreshToken();
  useEffect(() => {
    if (accessToken === "") {
      refresh();
    }
  }, [refresh, accessToken]);
  return <div>Home</div>;
}
