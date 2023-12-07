import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, Space } from "antd";
import { observer } from "mobx-react-lite";
import dateRangeStore from "../../../store/DateRangeStore"; // Импортируйте ваш MobX store

const { RangePicker } = DatePicker;

export const DataPickerReport = observer(() => {
  const dateFrom = dateRangeStore.dateFrom;
  const dateTo = dateRangeStore.dateTo;

  const handleDateChange = (values: any) => {
    if (values) {
      dateRangeStore.setStart(values[0]);
      dateRangeStore.setEnd(values[1]);
    } else {
      dateRangeStore.setStart(null);
      dateRangeStore.setEnd(null);
    }
  };
  
  return (
    <div>
      <RangePicker value={[dateTo, dateFrom]} disabledDate={(currentData: Dayjs)=> currentData > dayjs()} onChange={handleDateChange} />
    </div> 
  );
});

export default DataPickerReport;
