import React, {useEffect} from "react";
import EmailReports from "../../../store/Email";
import { observer } from "mobx-react-lite";
import FormButton from "../FormButton/FormButtom";

import s from "./Email.module.scss";
export const Email = observer(() => {
  useEffect(() => {
    EmailReports.fetchEmail();
  }, []);
  const emailData = EmailReports.email;

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