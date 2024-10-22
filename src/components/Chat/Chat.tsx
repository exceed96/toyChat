import ChatShow from "./ChatShow";
import ChatInput from "./ChatInput";

export default function Chat() {
  return (
    <div className="flex flex-col bg-white w-full h-full xl:w-1/3 xl:h-1/2 p-5 border-[1px] border-black text-center">
      <h1 className="text-3xl font-[HANBatang]">사 직 서</h1>
      <ChatShow />
      <ChatInput />
    </div>
  );
}
