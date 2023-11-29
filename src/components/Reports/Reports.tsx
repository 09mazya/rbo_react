import React, { useState } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";
import { Select } from "antd";

const { Option } = Select;

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [selectedSheetName, setSelectedSheetName] = useState<string | null>(null);

  const openBlock = (key: string) => {
    setSelectedKey(key);
    setSelectedSheetName(null);
  };



  return (
    <div className={s.reports}>
      <h2>Отчёты:</h2>
      {filteredReports.response ? (
        <>
          {Object.keys(filteredReports.response).map((key: string) => (
            <div key={key}>
              <Select
                style={{ width: 200 }}
                placeholder={`${key}`}
                onChange={() => openBlock(key)}
              >
                {filteredReports.response[key].map((item: any) => (
                  <Option key={item.id} value={item.sheetName}>
                    {item.sheetName}
                  </Option>
                ))}
              </Select>
              
            </div>
          ))}
        </>
      ) : (
        <>almaz krasava</>
      )}

      {/* {
        filteredReports === null || undefined && <h1>отчет жок зайбал </h1>
      } */}
    </div>
  );
});

export default Reports;
