import ChatShow from "./ChatShow";
import ChatInput from "./ChatInput";

export default function Chat() {
  return (
    <div className="flex flex-col bg-gray-100 w-full h-full xl:w-1/3 xl:h-1/2 p-5 border-[1px] border-black text-center relative">
      <header className="flex justify-center items-center">
        <h1 className="text-3xl font-[Chosunilbo] underline underline-offset-4">
          사 직 서
        </h1>
        <img
          src="/img/chatSetting.svg"
          className="w-9 h-9 absolute right-5 cursor-pointer"
        />
      </header>
      <ChatShow />
      <ChatInput />
    </div>
  );
}
