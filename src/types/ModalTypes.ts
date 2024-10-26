export type TModalName = "nickChange" | null;

export type TUseModalState = {
  modalName?: TModalName;
  setModalName: (v: TModalName) => void;
};
