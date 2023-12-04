import React, { useState } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";

import dateRangeStore from '../../store/DateRangeStore';

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;
  const [anchorEls, setAnchorEls] = useState<{
    [key: string]: HTMLElement | null;
  }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    key: string
  ) => {
    setAnchorEls((prev) => ({ ...prev, [key]: event.currentTarget }));
  };

  const handleCloseMenu = (key: string) => {
    setAnchorEls((prev) => ({ ...prev, [key]: null }));
  };

  const selectOption = (key: string, sheetName: string) => {
    setSelectedOption(`${key}-${sheetName}`);
    handleCloseMenu(key);
    // Дополнительные действия при выборе опции, если необходимо
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
                  // id={`${key}-menu`}z
                  anchorEl={anchorEls[key]}
                  open={Boolean(anchorEls[key])}
                  onClose={() => handleCloseMenu(key)}
                >
                  {filteredReports.response[key].map((item: any) => (
                    <MenuItem
                      key={item.id}
                      onClick={() => selectOption(key, item.sheetName)}
                    >
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
