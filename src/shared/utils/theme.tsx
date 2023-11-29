import { extendTheme } from "@chakra-ui/react";
import { CalendarDefaultTheme } from "@uselessdev/datepicker";

export const theme = extendTheme(CalendarDefaultTheme, {
  components: {
    Calendar: {
      parts: ["calendar"],

      baseStyle: {
        calendar: {
          margin:"0 auto",
          borderWidth: "6px",
          borderRadius: "10px",
          borderColor: "#31b465",
          rounded: "none",
          shadow: "none",
        },
      },
    },

    CalendarControl: {
      parts: ["button"],

      baseStyle: {
        button: {
          h: 6,
          px: 2,
          rounded: "none",
          fontSize: "sm",
          color: "white",
          bgColor: "#31b465",
          borderRadius: "10px",

          _hover: {
            bgColor: "#31b465",
          },

          _focus: {
            outline: "none",
          },
        },
      },
    },
  },
});
