import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  addToFavorites: (newFav) => {
    set((state) => {
      const update = [...state.favorites, newFav];
      localStorage.setItem("favorites", JSON.stringify(update));
      return { favorites: update };
    });
  },
  removeFromFavorites: (id) => {
    set((state) => {
      const filtered = state.favorites.filter((item) => item.codeid !== id);
      localStorage.setItem("favorites", JSON.stringify(filtered));
      return { favorites: filtered };
    });
  },
}));
