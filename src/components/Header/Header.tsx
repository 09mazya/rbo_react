import React, { FC, useState } from "react";
import s from "./Header.module.scss";
import { Button } from "antd";
import { IAuth } from "../../shared/utils/types";

const Header: FC<IAuth> = ({ setIsAuth }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth("");
  };

  return (
    <header className={s.header}>
      <strong>РБО КБ «КЫРГЫЗСТАН»</strong>
      <Button onClick={handleLogout}>выйти</Button>
    </header>
  );
};

export default Header;
