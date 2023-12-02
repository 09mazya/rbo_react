import React from "react";
import s from "./Content.module.scss";
import Reports from "../Reports/Reports";
import  DatePickerReport  from "../UI/DatePicker/DatePicker";
import Email from "../UI/Email/Email";

const Content = () => {
  return (
    <div>
      <div className={s.content}>
        <h2>Выберите дату отчета:</h2>
        <div className={s.content_block}>
          <DatePickerReport />
          <Reports />
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Content;
