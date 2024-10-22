import { TMessage } from "../../../types/MessageTypes";

export default function ReceiveMessage(props: TMessage) {
  return (
    <div className="flex flex-col">
      <section className="font-extrabold">{props.nickname}</section>
      <section className="flex gap-2 items-end">
        <p className="bg-[#ffbbbb] rounded-[8px] py-2 px-2 max-w-[60%] w-fit h-fit break-words whitespace-pre-line text-left">
          {props.message}
        </p>
        <span className="text-sm">{props.timestamp}</span>
      </section>
    </div>
  );
}
