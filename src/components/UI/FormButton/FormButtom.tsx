import React, { useState } from "react";
import axios from "axios";
import dateRangeStore from "../../../store/DateRangeStore";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import Snackbar from "@mui/material/Snackbar";

import s from "./FormButton.module.scss";
const FormButton: React.FC = observer(() => {
  const token = localStorage.getItem("token");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const dateFrom = dateRangeStore.dateFrom;
  const dateTo = dateRangeStore.dateTo;

  const handleGenerateClick = () => {
    const sheetName = dateRangeStore.sheetName;
    const dateFrom = dateRangeStore.dateFrom;
    const dateTo = dateRangeStore.dateTo;

    const formattedDateFrom = dayjs(dateFrom).format("YYYY-MM-DD");
    const formattedDateTo = dayjs(dateTo).format("YYYY-MM-DD");

    if(sheetName && dateFrom && dateTo){
      const apiUrlreport = "http://10.10.91.96:8085/api/report";

      axios
        .post(apiUrlreport, {
          sheetName,
          dateFrom: formattedDateFrom,
          dateTo: formattedDateTo,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
          if (data && data.response) {
            setSelectedReport(data.response);
            setSnackbarOpen(true);
          } else {
            console.error(
              "Ошибка получения данных:",
              data.error || "Неизвестная ошибка"
            );
          }
        })
        .catch((error) => {
          console.error("Произошла ошибка при выполнении POST-запроса:", error);
        });

        dateRangeStore.clear()
    }
      
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  console.log(dateFrom, dateTo);
  
  return (
    <div>
      <div>
        <button className={s.report_button} onClick={handleGenerateClick}>
          Сформировать
        </button>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} 
      >
        <div>{selectedReport}</div>
      </Snackbar>
    </div>
  );
});

export default FormButton;
