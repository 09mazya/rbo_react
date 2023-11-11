import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";

const DatePicker = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);

  return (
    <RangeDatepicker
      selectedDates={selectedDates}
      onDateChange={setSelectedDates}
      propsConfigs={{
        calendarPanelProps: {
          wrapperProps: {
            borderColor: 'green',
          },
          contentProps: {
            borderWidth: 0,
          },
          headerProps: {
            padding: '5px',
          },
          dividerProps: {
            display: "none",
          },
        },
      }}
    />
  );
};

export default DatePicker;
