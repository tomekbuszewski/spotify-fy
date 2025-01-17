import * as React from "react";
import StoryRouter from "storybook-react-router";
import { ThemeProvider } from "styled-components";
import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS as viewports } from "@storybook/addon-viewport";

import { GlobalStyle } from "../../src/ui/globalStyle";
import { theme } from "../../src/ui/theme";

addDecorator(StoryRouter());

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {story()}
    </React.Fragment>
  </ThemeProvider>
));

addParameters({
  viewport: {
    viewports,
  },
  options: {
    showRoots: true,
  },
});
