import { atom, selector } from "recoil";
import { ICart } from "./types/interface";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const isLoggedInState = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const token = get(accessTokenState);
    if (!token) return false;
    return true;
  },
});

export const cartState = atom<ICart[]>({
  key: "cart",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cartSelector = selector({
  key: "cartSelector",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((acc: ICart[], obj) => {
      const existingObj = acc.find((item) => item.id === obj.id);
      if (existingObj) {
        existingObj.count += obj.count;
      } else {
        acc.push({ ...obj });
      }
      return acc;
    }, []);
  },
  set: ({ set }, newValue) => {
    set(cartState, newValue);
    console.log(newValue);
  },
});
