import React from "react";
import InstructionsBlock from "../../components/InstructionsBlock/InstructionsBlock";
import Header from "../../components/Header/Header";
import s from "./MainPage.module.scss";
import Category from "../../components/Category/Category";
import Content from "../../components/Content/Content";
const MainPage = () => {
  return (
    <div>
      <Header />

      <div className={s.content}>
        <Category />
        <Content />
        <InstructionsBlock />
      </div>
    </div>
  );
};

export default MainPage;
