import * as React from "react";
import { ThemeProvider } from "styled-components";
import { addDecorator, addParameters } from "@storybook/react";

import { GlobalStyle } from "../../src/ui/globalStyle";
import { theme } from "../../src/ui/theme";

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {story()}
    </React.Fragment>
  </ThemeProvider>
));

addParameters({
  options: {
    showRoots: true,
  },
});
