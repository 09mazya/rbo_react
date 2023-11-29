import React, { useState } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";

const Reports: React.FC = observer(() => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const { filteredReports } = reportsStore;

  const openBlock = (key: string) => {
    setSelectedKey(key);
  };

  return (
    <div className={s.reports}>
      <h2>Отчёты:</h2>
      {filteredReports.response ? (
        Object.keys(filteredReports.response).map((key: string) => (
          <div key={key}>
            <li key={key} onClick={() => openBlock(key)}>
              {key}
            </li>

            {selectedKey === key && (
              <ul>
                {filteredReports.response[key].map((item: any) => (
                  <li key={item.id}>{item.sheetName}</li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <>almaz krasava</>
      )}
    </div>
  );
});

export default Reports;
