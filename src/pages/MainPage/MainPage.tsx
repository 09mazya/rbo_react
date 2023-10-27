import React from "react";
import InstructionsBlock from "../../components/InstructionsBlock/InstructionsBlock";
import Header from "../../components/Header/Header";
import s from "./MainPage.module.scss";
const MainPage = () => {
  return (
    <div>
      <Header />

      <div className={s.content}>
      
        <InstructionsBlock />
      </div>
    </div>
  );
};

export default MainPage;
