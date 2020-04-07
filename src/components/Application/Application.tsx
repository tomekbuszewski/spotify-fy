import * as React from "react";
import { hot } from "react-hot-loader";

import { Login } from "@pages/Login";
import tokenHandler from "@services/tokenHandler";
import { theme } from "@ui/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@ui/globalStyle";

const TokenContext = React.createContext<string>("");

export const ApplicationComponent = () => {
  const [token, setToken] = React.useState<string>();

  React.useEffect(() => {
    tokenHandler(setToken);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Login />
      </React.Fragment>
    </ThemeProvider>
  );

  // if (token) {
  //   return (
  //     <TokenContext.Provider value={token}>
  //       Hello from app
  //     </TokenContext.Provider>
  //   );
  // }
  //
  // return <Login />
};

export const Application = hot(module)(ApplicationComponent);
