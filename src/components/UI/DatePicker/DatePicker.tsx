import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import s from './DataPicker.module.scss'

const DateRangeCalendar: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<Date[] | null>(null);

  const handleDateChange = (date: Date[] | null) => {
    if (date) {
      setSelectedDateRange(date);
    } else {
      setSelectedDateRange(null);
    }
  };

  const maxDate = new Date();
  maxDate.setHours(23, 59, 59, 999);

  return (
    <div>
      <Calendar
        className={s.react_calendar}
        // onChange={handleDateChange}
        // value={selectedDateRange as Date | Date[]}
        selectRange
        maxDate={maxDate}
      />
    </div>
  );
};

export default DateRangeCalendar;
