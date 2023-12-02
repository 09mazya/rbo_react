import React, { useEffect, useState } from "react";
import s from "./App.module.scss";
import { AuthForm } from "./pages/AuthForm/AuthForm";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [isAuth, setIsAuth] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    setIsAuth(authToken);
  }, []);

  return (
    <div className={s.App}>
      {!isAuth ? (
        <AuthForm setIsAuth={setIsAuth} />
      ) : (
        <MainPage setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
