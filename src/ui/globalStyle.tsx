import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

import { theme, BASE_SIZE } from "./theme";

const rebootOptions = {
  // bodyBg: theme.colors.background,
  // bodyColor: theme.colors.text,
  fontFamilyBase: theme.fonts.faces.primary,
  fontWeightBase: 500,
  linkHoverDecoration: "none",
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${BASE_SIZE}px;
  }
  
  ${reboot(rebootOptions)};
`;
