import { io, Socket } from "socket.io-client";

export const ChatSocket: Socket = io(
  `${import.meta.env.VITE_PUBLIC_SOCKET_BASEURL}`,
  {
    autoConnect: true,
    reconnection: true,
    randomizationFactor: 1,
    transports: ["websocket"],
  }
);
