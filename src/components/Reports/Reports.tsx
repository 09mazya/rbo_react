import React, { useState } from "react";
import s from "./Reports.module.scss";
import { observer } from "mobx-react-lite";
import reportsStore from "../../store/ReportsStore";
import { Select } from "antd";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Reports: React.FC = observer(() => {
  const { filteredReports } = reportsStore;

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const open = Boolean(anchorEl);;

  const handleClick = (event : any) => {
    setSelectedItem(null)
    setAnchorEl(event.currentTarget);
};
  const handleClose = () => {
    setAnchorEl(null);
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
                className="accatTitle"
                id="basic-button"
                // disabled={!arr.length}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                  {key}
                </Button>
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                >
                  {filteredReports.response[key].map((item: any) => (
                    <MenuItem
                      key={item.id}
                      onClick={() => reportsStore.setSelectedReports(item)}
                    >
                      <input type="checkbox" readOnly />
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
