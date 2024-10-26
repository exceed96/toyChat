import { useState } from "react";
import ChatShow from "./ChatShow";
import ChatInput from "./ChatInput";
import DropdownContainer from "../Dropdown/DropdownContainer";

export default function Chat() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <div className="flex flex-col bg-gray-100 w-full h-full xl:w-1/3 xl:h-1/2 p-5 border-[1px] border-black text-center relative">
      <header className="flex justify-center items-center border-b-[1px] border-black border-dashed pb-4">
        <h1 className="text-3xl font-[Chosunilbo] underline underline-offset-4">
          사 직 서
        </h1>
        <div className="absolute right-5 flex justify-center">
          <img
            src="/img/chatSetting.svg"
            className="w-9 h-9 cursor-pointer"
            onClick={() => {
              setIsDropdown((prevState) => !prevState);
            }}
          />
          {isDropdown && <DropdownContainer />}
        </div>
      </header>
      <ChatShow />
      <ChatInput />
    </div>
  );
}
