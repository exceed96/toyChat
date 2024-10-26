"use client";

import { useEffect, useState, useRef } from "react";
import ReceiveMessage from "./Message/ReceiveMessage";
import SendMessage from "./Message/SendMessage";
import { TMessage } from "../../types/MessageTypes";
import { ChatSocket } from "../../util/ChatSocket";

export default function ChatShow() {
  const [chatLog, setChatLog] = useState<TMessage[] | []>([]);
  const messageEndRef = useRef<HTMLLIElement>(null);

  const onMessageHandler = (message: TMessage) => {
    console.log(message);
    setChatLog((prevState) => [...prevState, message]);
  };

  const getChatLogsApiHandler = async () => {
    try {
      const fetchData = await fetch(
        `${import.meta.env.VITE_PUBLIC_BASEURL}/chatLogs`,
        {
          method: "get",
        }
      );
      const data = await fetchData.json();
      setChatLog(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatLogsApiHandler();
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  useEffect(() => {
    ChatSocket.on("chatting", (data: TMessage) => onMessageHandler(data));
    return () => {
      ChatSocket.off("chatting");
    };
  }, []);

  return (
    <ul className="bg-transparent w-full h-full font-[HANBatang] flex flex-col gap-4 overflow-auto mb-3 scrollbar-hide">
      {chatLog.map((message: TMessage) => {
        if (message.sendUserId === localStorage.getItem("id")) {
          return (
            <SendMessage
              nickname={message.nickname}
              message={message.message}
              timestamp={message.timestamp}
              sendUserId={message.sendUserId}
            />
          );
        } else {
          return (
            <ReceiveMessage
              nickname={message.nickname}
              message={message.message}
              timestamp={message.timestamp}
              sendUserId={message.sendUserId}
            />
          );
        }
      })}
      <li ref={messageEndRef} />
    </ul>
  );
}
