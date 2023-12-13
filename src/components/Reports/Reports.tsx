import React, { useState, useEffect } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";
import Snackbar from "@mui/material/Snackbar";
import dataRangeStore from "../../store/DateRangeStore";
import { Select, Space } from "antd";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;

  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (filteredReports.response) {
      // Устанавливаем значение по умолчанию для каждого key
      const defaultValues: Record<string, string> = {};
      Object.keys(filteredReports.response).forEach((key) => {
        defaultValues[key] = key;
      });
      setSelectedValues(defaultValues);
    }
  }, [filteredReports.response]);

  const handleChange = (key: string, value: string) => {
    // Сохраняем выбранное значение для текущего Select
    setSelectedValues((prev) => ({ ...prev, [key]: value }));

    // Возвращаем другим Select к значению по умолчанию (key)
    Object.keys(selectedValues).forEach((otherKey) => {
      if (otherKey !== key) {
        setSelectedValues((prev) => ({ ...prev, [otherKey]: otherKey }));
      }
    });

    dataRangeStore.setSheetName(value)
  };
  

  return (
    <div className={s.reports}>
      <h2>Отчёты:</h2>
      <div className={s.reports_content}>
        {filteredReports.response ? (
          <>
            {Object.keys(filteredReports.response).map((key: string) => (
              <div className={s.report_button} key={key}>
                  <Select
                    value={selectedValues[key]}
                    style={{ width: 150 }}
                    onChange={(value) => handleChange(key, value)}
                  >
                    {filteredReports.response[key].map((item: any) => (
                      <Select.Option key={item.sheetName} value={item.sheetName}>
                        {item.sheetName} 
                      </Select.Option>
                    ))}
                  </Select>
              </div>
            ))}
          </>
        ) : (
          <p>Выберите категорию отчёта в левом окне</p>
        )}
      </div>
    </div>
  );
});

export default Reports;