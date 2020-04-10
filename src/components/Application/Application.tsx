import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { hot } from "react-hot-loader";

import { Login } from "@pages/Login";
import { Routing } from "@components/Routing";

import { theme } from "@ui/theme";
import { GlobalStyle } from "@ui/globalStyle";
import store from "@redux/store";

import tokenHandler from "@services/tokenHandler";

export const ApplicationComponent = () => {
  const [token, setToken] = React.useState<string>();

  React.useEffect(() => {
    tokenHandler(setToken);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <React.Fragment>
          <GlobalStyle />
          {token ? <Routing /> : <Login />}
        </React.Fragment>
      </Provider>
    </ThemeProvider>
  );
};

export const Application = hot(module)(ApplicationComponent);
