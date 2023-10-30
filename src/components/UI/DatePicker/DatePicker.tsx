import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import s from './DataPicker.module.scss'
const DateRangeCalendar: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<
    Date[] | Date | null
  >([]);

  const handleDateChange = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSelectedDateRange([date]);
    } else {
      setSelectedDateRange(date);
    }
  };

  return (
    <div>
      <Calendar
        className={s.react_calendar}
        // onChange={handleDateChange}
        // value={selectedDateRange}
        selectRange
      />

      
    </div>
  );
};

export default DateRangeCalendar;
