import { FormEvent, useRef } from "react";
import { useModalState } from "../../store/modal";

export default function NickChangeModal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setModalName = useModalState((state) => state.setModalName);

  const changeNickHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localStorage.getItem("nickname") && inputRef.current) {
      const trimNick = inputRef.current.value.trim();
      localStorage.setItem("nickname", trimNick);
      setModalName(null);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-6"
      onSubmit={changeNickHandler}
    >
      <label htmlFor="nickname">변경할 닉네임을 작성해주세요</label>
      <input
        type="text"
        id="nickname"
        maxLength={10}
        className="w-full outline-none text-black py-1 placeholder:text-center text-center rounded-sm"
        ref={inputRef}
        placeholder="닉네임을 입력해주세요"
      />
      <button className="w-1/3 px-2 py-1 bg-black text-white rounded-sm">
        변경
      </button>
    </form>
  );
}
