import { DefaultTheme } from "styled-components";

const size = {
  mobile: "540px",
  tablet: "768px",
  laptop: "1024px",
};

export const theme: DefaultTheme = {
  primary: {
    500: "#2196F3",
    700: "#1565C0",
  },

  gray: {
    default: "#323D45",
    sub: "#939FA5",
    dark: "#C2C2C2",
    light: "#FFFFFF",
  },

  orange: {
    normal: "#FFA000",
  },

  border: {
    gray: "#E5E5E5",
  },

  device: {
    mobile: `screen and (max-width: ${size.mobile})`,
    tablet: `screen and (max-width: ${size.tablet})`,
    laptop: `screen and (max-width: ${size.laptop})`,
  },
};
