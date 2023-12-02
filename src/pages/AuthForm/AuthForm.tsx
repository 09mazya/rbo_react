import { FC, useState } from "react";
import { Typography } from 'antd';
import s from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";

interface ApiResponse {
  response: {
    token: string;
  };
}

interface AuthFormToken {
  setIsAuth: (value: string) => void;
}
const { Title } = Typography;
const AuthForm: FC<AuthFormToken> = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [errorMessagePssword, setErrorMessagePassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setErrorMessageLogin("Введите логин");
      return;
    }

    if (!password) {
      setErrorMessagePassword("Введите пароль");
      return;
    }

    if (/^[А-Яа-яЁё]+$/.test(email)) {
      setErrorMessagePassword("Неверный логин или пароль");
      return;
    }

    setEmail("");
    setPassword("");
    setErrorMessagePassword("");
    setErrorMessageLogin("");

    const url = "https://rboapi.cbk.kg/auth/getToken";
    const payload = {
      username: email,
      password: password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result: ApiResponse = await response.json();

      if (result.response && result.response.token) {
        localStorage.setItem("token", result.response.token);
        navigate("/");
        setIsAuth(result.response.token);
      } else {
        setErrorMessagePassword("Неверный логин или пароль");
        setErrorMessageLogin("Неверный логин или пароль");
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      setErrorMessagePassword("Произошла ошибка. Попробуйте снова.");
      setErrorMessageLogin("Произошла ошибка. Попробуйте снова.");
    }
  };

  return (
    <div className={s.auth_form}>
      <Title className={s.title} level={3}>Войдите</Title>
      <Title className={s.title5} level={5}>Чтобы получить доступ</Title>
      <form className={s.auth_form__form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          placeholder="Логин"
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="username"
        />
        {errorMessageLogin && (
          <div className={s.error_message}>{errorMessageLogin}</div>
        )}
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
        {errorMessagePssword && (
          <div className={s.error_message}>{errorMessagePssword}</div>
        )}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export { AuthForm };
