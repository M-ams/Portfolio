
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      bg: "#111113",
      componentbg: "#212225",
      componentbghover: "#272A2D",
      componentbgonclck: "#2E3135",
      border: "#363A3F",
      border1: "#43484E",
      border3: "#5A6169",
      solidbg: "#696E77",
      solidbghover: "#777B84",
      text1: "#B0B4BA",
      text2: "#EDEEF0",
    },
  },
  fonts: {
    heading: "'Mallana', sans-serif",
    body: "'Mallana', sans-serif",
  },
});

export default customTheme;
