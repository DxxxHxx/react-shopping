import { atom, selector } from "recoil";
import { ICart } from "./types/interface";

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

/////////////////
// export const minutesState = atom({
//   key: "minutes",
//   default: 0,
// });

// export const hoursSelector = selector({
//   key: "hours",
//   get: ({ get }) => {
//     return get(minutesState) / 60;
//   },
//   set: ({ set }, newValue) => {
//     const minutes = +newValue * 60;
//     set(minutesState, minutes);
//   },
// });

export const cartState = atom<ICart[]>({
  key: "cart",
  default: [],
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
