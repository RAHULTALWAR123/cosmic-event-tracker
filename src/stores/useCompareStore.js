import { create } from "zustand";


export const useCompareStore = create((set) => ({
    selected : [],

    toggleSelect : (id,event) => 
        set((state) => {
      const exists = state.selected.find((item) => item.id === id);
      if (exists) {
        return {
          selected: state.selected.filter((item) => item.id !== id),
        };
      } else {
        return {
          selected: [...state.selected, event],
        };
      }
    }),

}));