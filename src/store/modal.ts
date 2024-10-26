import { create } from "zustand";
import { TUseModalState, TModalName } from "../types/ModalTypes";

export const useModalState = create<TUseModalState>((set) => ({
  modalName: null,
  setModalName: (modalName: TModalName) => set({ modalName }),
}));
