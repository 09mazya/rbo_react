import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, Space } from "antd";
import { observer } from "mobx-react-lite";
import dataRangeStore from "../../../store/DateRangeStore"; // Импортируйте ваш MobX store

const { RangePicker } = DatePicker;

export const DataPickerReport = observer(() => {
  const [dates, setDates] = useState(null);

  const handleDateChange = (values: any) => {
    if (values) {
      setDates(values.map((item: number) => dayjs(item).format("DD-MM-YYYY")));
      dataRangeStore.setStart(values[0]);
      dataRangeStore.setEnd(values[1]);
    } else {
      setDates(null);
      dataRangeStore.setStart(null);
      dataRangeStore.setEnd(null);
    }
  };

  return (
    <div>
      <RangePicker disabledDate={(currentData: Dayjs)=> currentData > dayjs()} onChange={handleDateChange} />
    </div> 
  );
});

export default DataPickerReport;
