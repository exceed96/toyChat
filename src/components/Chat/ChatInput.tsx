import { useRef } from "react";
import { ChatSocket } from "../../util/ChatSocket";
import { nanoid } from "nanoid";

export default function ChatInput() {
  const messageRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      // 메시지 전송 후 처리
      if (messageRef.current) {
        // 현재 input의 값을 저장
        const currentValue = messageRef.current.value;

        // 폼 제출 후에도 포커스와 값을 유지하기 위한 처리
        setTimeout(() => {
          if (messageRef.current) {
            messageRef.current.focus();
            messageRef.current.value = "";
          }
        }, 0);
      }
    }
  };

  return (
    <form
      ref={formRef}
      className="w-full flex gap-2"
      onSubmit={sendMessageHandler}
    >
      <input
        placeholder="메세지를 입력하세요"
        className="outline-none w-[80%] font-[HANBatang] pt-2 pb-2 pl-2 rounded-[8px] border-[1px] border-black"
        ref={messageRef}
      />
      <button
        type="submit"
        className="bg-black font-[HANBatang] text-white text-sm w-[20%] rounded-[8px] px-5"
      >
        전송
      </button>
    </form>
  );
}
