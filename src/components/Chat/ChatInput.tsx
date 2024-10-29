import { useRef } from "react";
import { ChatSocket } from "../../util/ChatSocket";
import { nanoid } from "nanoid";

export default function ChatInput() {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!localStorage.getItem("id")) {
      localStorage.setItem("id", nanoid());
    }

    if (messageRef.current) {
      const trimmedMessage = messageRef.current?.value.trim();
      messageRef.current.value = "";
      messageRef.current.focus();
      if (trimmedMessage) {
        ChatSocket.emit("chatting", {
          nickname: localStorage.getItem("nickname"),
          message: trimmedMessage,
          sendUserId: localStorage.getItem("id"),
        });
      }
    }
  };

  const pressEnterHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessageHandler(e);
    }
  };

  return (
    <form
      className="w-full flex gap-2"
      onSubmit={sendMessageHandler}
      onKeyPress={pressEnterHandler}
    >
      <textarea
        placeholder="메세지를 입력하세요"
        className="outline-none w-[80%] font-[HANBatang] pt-2 pb-2 pl-2 rounded-[8px] border-[1px] border-black resize-none"
        ref={messageRef}
        rows={1}
        maxLength={500}
        autoFocus={true}
      />
      <button
        className="bg-black font-[HANBatang] text-white text-sm w-[20%] rounded-[8px] px-5"
        type="submit"
        // onClick={(e) => {
        //   e.preventDefault();
        //   messageRef.current?.focus();
        // }}
      >
        전송
      </button>
    </form>
  );
}
