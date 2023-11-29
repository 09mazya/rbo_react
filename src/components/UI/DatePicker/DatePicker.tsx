import {
  Calendar,
  CalendarControls,
  CalendarPrevButton,
  CalendarNextButton,
  CalendarMonths,
  CalendarMonth,
  CalendarMonthName,
  CalendarWeek,
  CalendarDays,
  CalendarValues,
  CalendarDate,
} from "@uselessdev/datepicker";
import { useState } from "react";

export function DatePicker() {
  const [dates, setDates] = useState<CalendarValues>({});

  const handleSelectDate = (value: CalendarDate | CalendarValues) => {
    setDates(value as CalendarValues);
  };


  return (
    <Calendar
      value={dates}
      onSelectDate={handleSelectDate}
      disableFutureDates={true}
    >
      <CalendarControls>
        <CalendarPrevButton />
        <CalendarNextButton />
      </CalendarControls>

      <CalendarMonths>
        <CalendarMonth>
          <CalendarMonthName />
          <CalendarWeek />
          <CalendarDays />
        </CalendarMonth>
      </CalendarMonths>
    </Calendar>
  );
}
