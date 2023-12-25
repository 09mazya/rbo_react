import React, { useState, useEffect } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";
import Snackbar from "@mui/material/Snackbar";
import dataRangeStore from "../../store/DateAndSheetName";
import { Flex, Select } from "antd";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;
  const { sheetName } = dataRangeStore;

  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (filteredReports.response) {
      const defaultValues: Record<string, string> = {};
      Object.keys(filteredReports.response).forEach((key) => {
        defaultValues[key] = key;
      });
      setSelectedValues(defaultValues);
    }
  }, [filteredReports.response]);

  const handleChange = (value: string) => {
    if (sheetName == value) {
      dataRangeStore.setSheetName("");
      return;
    }
    dataRangeStore.setSheetName(value);
    setSelectedReport(value);
    setSnackbarOpen(true);
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
            {filteredReports.response &&
            Object.keys(filteredReports.response).length > 0 ? (
              <>
                {Object.keys(filteredReports.response).map((key: string) => (
                  <div className={s.report_button} key={key}>
                    <Select
                      value={selectedValues[key]}
                      style={{ width: 150, display: "flex" }}
                      onChange={(value) => handleChange(value)}
                      key={key}
                    >
                      {filteredReports.response[key].map((item: any) => (
                        <Select.Option
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                          key={item.sheetName}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-beetwin",
                              gap: 15,
                              height: 20
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={sheetName === item.sheetName}
                            />
                            <div>{item.sheetName}</div>
                          </div>
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                ))}
              </>
            ) : (
              <p>
                {filteredReports.response
                  ? "Нет отчетов для выбранной категории"
                  : filteredReports.response}
              </p>
            )}
          </>
        ) : (
          <p>Выберите категорию отчёта в левом окне</p>
        )}
      </div>
      <Snackbar
      className={s.snackbarReports}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <div>Выбран отчет: {selectedReport}</div>
      </Snackbar>
    </div>
  );
});

export default Reports;
