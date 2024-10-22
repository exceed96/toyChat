export type TMessage = {
  nickname: string;
  message: string;
  timestamp: string;
};

export type TChatLog = {
  chatLog: TMessage[];
};

// export type TChatLog = {
//   chatLog: Array<TReceiveMessage | TSendMessage>;
// };
