import * as React from "react";

import { API_AUTH_ENDPOINT } from "@config/consts";
import query from "@services/urlQuery";
import { LOGIN_PAGE } from "@translations/en";
import { Button, BUTTON_VARIANTS, TextFragment } from "@ui/Atoms";

import { buildQuery } from "./Login.helpers";
import { LoginView as View } from "./Login.view";

const Login = () => {
  const loginUrl = `${API_AUTH_ENDPOINT}?${query(buildQuery())}`;

  return (
    <View>
      <Button
        variant={BUTTON_VARIANTS.CTA}
        onClick={() => (window.location.href = loginUrl)}
      >
        {LOGIN_PAGE.CONTINUE_WITH_SPOTIFY}
      </Button>
      <TextFragment>{LOGIN_PAGE.REQUIREMENTS}</TextFragment>
    </View>
  );
};

export { Login };
