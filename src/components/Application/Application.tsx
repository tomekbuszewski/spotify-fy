import * as React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "@redux/store";
import { theme } from "@ui/theme";

export const ApplicationComponent = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>hello</Provider>
  </ThemeProvider>
);

export const Application = hot(module)(ApplicationComponent);
