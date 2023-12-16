import React, { useState, useEffect } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";
import Snackbar from "@mui/material/Snackbar";
import dataRangeStore from "../../store/DateAndSheetName";
import { Select } from "antd";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;

  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [selectedReport, setSelectedReport] = useState<string | null>(null); // Добавленное состояние для отслеживания выбранного отчета
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
    // setSelectedValues((prev) => ({ ...prev, [key]: value }));

    // Object.keys(selectedValues).forEach((otherKey) => {
    //   if (otherKey !== key) {
    //     setSelectedValues((prev) => ({ ...prev, [otherKey]: otherKey }));
    //   }
    // });

    dataRangeStore.setSheetName(value);
    setSelectedReport(value); // Обновляем выбранный отчет
    setSnackbarOpen(true); // Открываем Snackbar при изменении отчета
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
                  key={key}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <div>Выбран отчет: {selectedReport}</div>
      </Snackbar>
    </div>
  );
});

export default Reports;