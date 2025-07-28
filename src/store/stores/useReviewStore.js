import { create } from "zustand";
import { reviews } from "../../data";

if (!localStorage.getItem("reviews")) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

export const useReviewStore = create((set, get) => ({
  reviews: JSON.parse(localStorage.getItem("reviews")),
  addReviews: (newReview) => {
    set((state) => {
      const update = [...state.reviews, newReview];
      localStorage.setItem("reviews", JSON.stringify(update));
      return { reviews: update };
    });
  },
}));
