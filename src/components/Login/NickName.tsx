import { SetStateAction, useRef } from "react";

type TNickNameProps = {
  setLogin: React.Dispatch<SetStateAction<boolean>>;
};

export default function NickName(props: TNickNameProps) {
  const nicknameRef = useRef<HTMLInputElement>(null);

  const submitNicknameHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nicknameRef.current) {
      localStorage.setItem("nickname", nicknameRef.current?.value);
      props.setLogin(true);
    }
  };

  return (
    <form
      className="flex flex-col px-3 items-center justify-center gap-4 bg-yellow-300 w-full h-full"
      onSubmit={submitNicknameHandler}
    >
      <label htmlFor="nickname">채팅에 사용할 닉네임을 입력하세요</label>
      <input
        type="text"
        id="nickname"
        className="text-center py-2 rounded-md"
        ref={nicknameRef}
      />
      <button className="px-2 py-1 bg-black text-white rounded-md">완료</button>
    </form>
  );
}
