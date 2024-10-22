import { useRef } from "react";
import { ChatSocket } from "../../util/ChatSocket";

export default function ChatInput() {
  const messageRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedMessage = messageRef.current?.value.trim();
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (trimmedMessage) {
      ChatSocket.emit("chatting", {
        nickname: localStorage.getItem("nickname"),
        message: messageRef.current?.value,
      });
      if (messageRef.current) {
        messageRef.current.value = "";
      }
    }
  };

  return (
    <form className="w-full flex gap-2" onSubmit={sendMessageHandler}>
      <input
        placeholder="메세지를 입력하세요"
        className="outline-none w-[80%] font-[HANBatang] pt-2 pb-2 pl-2 rounded-[8px] border-[1px] border-black"
        ref={messageRef}
      ></input>
      <button className="bg-black font-[HANBatang] text-white text-sm w-[20%] rounded-[8px] px-5">
        전송
      </button>
    </form>
  );
}
