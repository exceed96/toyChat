import { useRef } from "react";
import { ChatSocket } from "../../util/ChatSocket";
import { nanoid } from "nanoid";

export default function ChatInput() {
  const messageRef = useRef<HTMLInputElement>(null);

  const pressEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    if (!localStorage.getItem("id")) {
      localStorage.setItem("id", nanoid());
    }
    const trimmedMessage = messageRef.current?.value.trim();
    if (trimmedMessage) {
      ChatSocket.emit("chatting", {
        nickname: localStorage.getItem("nickname"),
        message: messageRef.current?.value,
        sendUserId: localStorage.getItem("id"),
      });
      if (messageRef.current) {
        messageRef.current.value = "";
      }
    }
  };

  return (
    <form
      className="w-full flex gap-2"
      onSubmit={sendMessageHandler}
      onKeyPress={pressEnter}
    >
      <input
        placeholder="메세지를 입력하세요"
        className="outline-none w-[80%] font-[HANBatang] pt-2 pb-2 pl-2 rounded-[8px] border-[1px] border-black"
        ref={messageRef}
      ></input>
      <button
        className="bg-black font-[HANBatang] text-white text-sm w-[20%] rounded-[8px] px-5"
        type="button"
      >
        전송
      </button>
    </form>
  );
}
