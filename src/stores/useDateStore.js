import { create } from "zustand";

export const useDateStore = create((set) => ({
  startDate: "2025-08-01",
  endDate: "2025-08-05",
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}))