'use client'

import { create } from "zustand";

interface IsInViewState {
  value: string;
  update: (newValue: string) => void;
}

export const useInViewState = create<IsInViewState>((set) => ({
  value: "#home",
  update: (newValue) => set(() => ({ value: newValue })),
}));
