import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import EmailReports from "../../../store/Email";
import { observer } from "mobx-react-lite";
import FormButton from "../FormButton/FormButtom";

import s from "./Email.module.scss";
export const Email = observer(() => {
  useEffect(() => {
    EmailReports.fetchEmail();
  }, []);
  const emailData = EmailReports.email;

  // console.log(emailData);
  return (
    <div className={s.email}>
      <div>
        <p>Адрес почты, на которую будет выслан отчёт по готовности:</p>
        <div className={s.emailInput}>
          <input type="text" value={emailData} disabled />
          <FormButton />
        </div>
      </div>
    </div>
  );
});

export default Email;

{
  /* <div className={s.email}>
  <div className={s.emailInput}>
    <p>Адрес почты, на которую будет выслан отчёт по готовности:</p>
    <input type="text" value={emailData} disabled />
  </div>
  <div className={s.report_button}>
    <FormButton />
  </div>
</div>; */
}
