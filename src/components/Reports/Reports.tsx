import React, { useEffect } from "react";
import s from "./Reports.module.scss";
import MyCustomSelect from "../UI/MyCustomSelect/MyCustomSelect";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";

const Reports: React.FC = observer(() => {
  const { reports, filteredReports } = reportsStore;

  useEffect(() => {
    reportsStore.getAllReports();
  }, []);

  console.log(filteredReports);

  return (
    <div className={s.reports}>
      <h2>Отчёты:</h2>
      {filteredReports ? (
        filteredReports.map((filteredReport: any) => {
          console.log(filteredReport);
            return <h1 key={filteredReport.key}>{filteredReport.key}</h1>;
        })
      ) : (
        <h1>выберите категорию</h1>
      )}
    </div>
  );
});
// {/* <MyCustomSelect /> */}

export default Reports;
