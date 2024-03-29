import { atom, selector } from "recoil";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const isLoggedInState = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const token = get(accessTokenState);
    if (token === "") return false;
    return true;
  },
});
