import React, { useState } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;
  const [anchorEls, setAnchorEls] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | null;
  }>({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    key: string
  ) => {
    setAnchorEls((prev) => ({ ...prev, [key]: event.currentTarget }));
  };

  const handleCloseMenu = (key: string) => {
    setAnchorEls((prev) => ({ ...prev, [key]: null }));
  };

  const handleMenuItemClick = (key: string, sheetName: string) => {
    setSelectedOptions((prev) => {
      const newSelectedOptions = {
        ...prev,
        [key]: prev[key] === sheetName ? null : sheetName,
      };

      // Обнуляем предыдущий выбор
      Object.keys(newSelectedOptions).forEach((otherKey) => {
        if (otherKey !== key) {
          newSelectedOptions[otherKey] = null;
        }
      });

      return newSelectedOptions;
    });

    if (selectedOptions[key] === sheetName) {
      setSnackbarOpen(false);
      setSelectedReport(null);
    } else {
      setSnackbarOpen(true);
      setSelectedReport(sheetName);
    }

    handleCloseMenu(key);
    // Дополнительные действия при выборе опции, если необходимо
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
                <Button
                  onClick={(event) => handleOpenMenu(event, key)}
                  aria-controls={`${key}-menu`}
                  aria-haspopup="true"
                >
                  {key}
                </Button>
                <Menu
                  id={`${key}-menu`}
                  anchorEl={anchorEls[key]}
                  open={Boolean(anchorEls[key])}
                  onClose={() => handleCloseMenu(key)}
                >
                  {filteredReports.response[key].map((item: any) => (
                    <MenuItem
                      key={item.id}
                      onClick={() => handleMenuItemClick(key, item.sheetName)}
                    >
                      <input
                        type="checkbox"
                        name={`${key}-checkbox`}
                        checked={selectedOptions[key] === item.sheetName}
                        readOnly
                      />
                      {item.sheetName}
                    </MenuItem>
                  ))}
                </Menu>
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Устанавливаем расположение top-center
        className={s.snack_bar}
      >
        <div>Выбран отчет: {selectedReport}</div>
      </Snackbar>
    </div>
  );
});

export default Reports;
// {filteredReports.response ? (
//   <>
//     {Object.keys(filteredReports.response).map((key: string) => (
//       <div key={key}>
//         <Select
//           style={{ width: 200 }}
//           placeholder={`${key}`}
//           onChange={() => openBlock(key)}
//         >
//           {filteredReports.response[key].map((item: any) => (
//             <Option key={item.id} value={item.sheetName}>
//               {item.sheetName} - {item.status}
//             </Option>
//           ))}
//         </Select>
//       </div>
//     ))}
//   </>
// ) : (
//   <>Выберите категорию отчёта в левом окне</>
// )}
