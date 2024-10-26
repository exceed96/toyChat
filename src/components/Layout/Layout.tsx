import { useModalState } from "../../store/modal";
import ModalContainer from "./ModalLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const modalName = useModalState((state) => state.modalName);
  return (
    <div className="w-full h-svh flex sm:justify-center sm:items-center">
      {modalName && <ModalContainer />}
      {children}
    </div>
  );
}
