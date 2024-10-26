import DropdownContent from "./DropdownContent";
import { useModalState } from "../../store/modal";

export default function DropdownContainer() {
  const setModalName = useModalState((state) => state.setModalName);

  const dropdownContent = [
    {
      icon: "img/nickChange.svg",
      alt: "nickname change",
      content: "닉네임 변경",
      handler: () => {
        setModalName("nickChange");
      },
    },
  ];

  return (
    <ul className="bg-gray-300 absolute top-10 right-0 p-3 rounded-md shadow-md flex flex-col w-36">
      {dropdownContent.map((content) => (
        <DropdownContent
          iconSrc={content.icon}
          alt={content.alt}
          content={content.content}
          handler={content.handler}
        />
      ))}
    </ul>
  );
}
