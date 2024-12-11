import { create } from "zustand";

interface Store {
  pageCounter: number;
  increasePageCounter: () => void;
  resetPageCounter: () => void;
}

export const usePageCounter = create<Store>((set) => ({
  pageCounter: 0,
  increasePageCounter: () =>
    set((state) => ({ pageCounter: state.pageCounter + 1 })),
  resetPageCounter: () => set({ pageCounter: 0 }),
}));
