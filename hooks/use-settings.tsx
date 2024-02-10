import { create } from "zustand";

import { SettingsStore } from "@/types/use-settings-type";

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
