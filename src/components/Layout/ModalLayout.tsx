import { createPortal } from "react-dom";
import { useModalState } from "../../store/modal";
import NickChangeModal from "../Modal/NickChangeModal";

const ModalLayout = () => {
  const setModalName = useModalState((state) => state.setModalName);

  return (
    <>
      <div
        className="fixed w-full h-full top-0 bg-[#0000008f] z-10"
        onClick={() => {
          setModalName(null);
        }}
      />
    </>
  );
};

const ModalContent = () => {
  const modalName = useModalState((state) => state.modalName);

  const modalContent: { [key: string]: JSX.Element | null } = {
    nickChange: <NickChangeModal />,
  };

  return (
    <>
      {modalName && (
        <div className="flex w-screen-50 min-w-[325px] max-w-[700px] flex-col jusfify-content center fixed top-1/2 left-1/2 text-center text-white px-4 py-5 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#404040] rounded-[20px] text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          {modalName ? modalContent[modalName] : null}
        </div>
      )}
    </>
  );
};

export default function ModalContainer() {
  return (
    <>
      {createPortal(
        <ModalLayout />,
        document.getElementById("modalLayout") as HTMLElement
      )}
      {createPortal(
        <ModalContent />,
        document.getElementById("modalContent") as HTMLElement
      )}
    </>
  );
}
