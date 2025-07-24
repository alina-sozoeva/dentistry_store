import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  user: JSON.parse(localStorage.getItem("user")),
  setUser: (user) => {
    set({ user });
    localStorage.setItem("user", JSON.stringify(user));
  },
  removeUser: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
