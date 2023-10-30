import React from "react";
import s from "./Content.module.scss";
import DatePicker from "../UI/DatePicker/DatePicker";
import Reports from "../Reports/Reports";

const Content = () => {
  return (
    <div className={s.content}>
      <h2>Выберите дату отчета:</h2>

      <div className={s.content_block}>
        <DatePicker />

        <Reports />
      </div>
    </div>
  );
};

export default Content;
