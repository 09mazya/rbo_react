import React, { useEffect, useState } from "react";
import s from "./App.module.scss";
import { AuthForm } from "./pages/AuthForm/AuthForm";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";

function App() {
  const [isAuth, setIsAuth] = useState<string | null>(null);

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setIsAuth(authToken);
  }, []);

  return (
    <div className={s.App}>

      {isAuth ? <MainPage /> : <AuthForm setIsAuth={setIsAuth} />}
    </div>
  );
}

export default App;
