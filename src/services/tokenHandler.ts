/* eslint-disable @typescript-eslint/camelcase */
import { IS_CLIENT } from "@config/consts";
import query from "@services/urlQuery";

const TOKEN_KEY = "TOKEN";
const TOKEN_EXPIRY_KEY = "TOKEN_EXPIRATION";

const hasExistingToken = (): string | void => {
  const existingToken = localStorage.getItem(TOKEN_KEY);
  const isTokenValid =
    Number(localStorage.getItem(TOKEN_EXPIRY_KEY)) > Date.now();

  if (isTokenValid) {
    return existingToken as string;
  }
};

function tokenHandler(setter: (param: string) => void): void {
  if (IS_CLIENT) {
    const existing = hasExistingToken();

    if (existing) {
      setter(existing);
      return;
    }

    const { access_token, expires_in } = query<{
      access_token: string;
      expires_in: string;
    }>(window.location.hash.substring(1));

    if (access_token) {
      const expiration = Number(expires_in || 3600) * 1000;

      localStorage.setItem(TOKEN_KEY, access_token);
      localStorage.setItem(TOKEN_EXPIRY_KEY, String(Date.now() + expiration));
      window.location.hash = "";
      setter(access_token);
    }
  }
}

export default tokenHandler;
