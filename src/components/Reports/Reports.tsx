import React, { useEffect } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;

  console.log(filteredReports.response);

  return (
    <div className={s.reports}>
      <h2>Отчёты:</h2>
      {filteredReports.response ? (
        Object.keys(filteredReports.response).map((key) => (
          <li key={key}>{key}</li>
        ))
      ) : (
        <>lox</>
      )}
    </div>
  );
});

export default Reports;
