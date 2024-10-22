import { useState } from "react";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Chat from "./components/Chat/Chat";
import NickName from "./components/Login/NickName";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Layout>
      {localStorage.getItem("nickname") || isLogin ? (
        <Chat />
      ) : (
        <NickName setLogin={setIsLogin} />
      )}
    </Layout>
  );
}
