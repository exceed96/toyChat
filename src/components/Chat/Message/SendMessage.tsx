import { TMessage } from "../../../types/MessageTypes";

export default function SendMessage(props: TMessage) {
  return (
    <div className="flex flex-col items-end">
      <section className="font-extrabold">{props.nickname}</section>
      <section className="flex items-end gap-2 max-w-[60%]">
        <span className="text-sm">{props.timestamp}</span>
        <p className="break-words bg-white rounded-[8px] py-2 px-2 self-end flex-[7] border-[1px] border-gray-200 text-start">
          {props.message}
        </p>
      </section>
    </div>
  );
}
