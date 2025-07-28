import { toast } from "react-toastify";
import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  addToCart: (item) => {
    set((state) => {
      const countItem = state.cart.find((pro) => pro.codeid === item.codeid);
      let updateObj;

      if (countItem) {
        if (countItem.count < item.quantity) {
          updateObj = state.cart.map((pro) =>
            pro.codeid === item.codeid ? { ...pro, count: pro.count + 1 } : pro
          );
        } else {
          updateObj = state.cart;
          toast.error("Товара не осталось!");
        }
      } else {
        updateObj = [...state.cart, { ...item, count: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updateObj));
      return { cart: updateObj };
    });
  },
  deleteCount: (item) => {
    set((state) => {
      const countItem = state.cart.find((pro) => pro.codeid === item.codeid);
      let updateObj;
      if (countItem) {
        updateObj = state.cart.map((pro) =>
          pro.codeid === item.codeid
            ? { ...pro, count: Math.max(pro.count - 1, 1) }
            : pro
        );
      } else {
        updateObj = [...state.cart, { ...item, count: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updateObj));
      return { cart: updateObj };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const updated = state.cart.filter((item) => item.codeid !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return { cart: updated };
    });
  },
}));
