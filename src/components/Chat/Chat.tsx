import ChatShow from "./ChatShow";
import ChatInput from "./ChatInput";

export default function Chat() {
  return (
    <div className="flex flex-col bg-yellow-300 w-full h-full xl:w-1/3 xl:h-1/2 p-5">
      <ChatShow />
      <ChatInput />
    </div>
  );
}
