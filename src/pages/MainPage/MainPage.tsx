import React, { FC, Suspense } from "react";
import InstructionsBlock from "../../components/InstructionsBlock/InstructionsBlock";
import Header from "../../components/Header/Header";
import s from "./MainPage.module.scss";
import Category from "../../components/Category/Category";
import Content from "../../components/Content/Content";
import { IAuth } from "../../shared/utils/types";
import { Spin } from "antd";

const MainPage: FC<IAuth> = ({ setIsAuth }) => {
  return (
    <div>
      <Header setIsAuth={setIsAuth} />

      <div className={s.content}>
        <Suspense fallback={<Spin />}>
          <Category />
        </Suspense>
        <Content />
        <InstructionsBlock />
      </div>
    </div>
  );
};

export default MainPage;
