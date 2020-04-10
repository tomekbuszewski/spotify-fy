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

const setToken = (token: string, expiry = 3600): void => {
  const expiration = expiry * 1000;

  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_EXPIRY_KEY, String(Date.now() + expiration));
  window.location.hash = "";
};

function tokenHandler(setter?: (param: string) => void): void | string {
  if (IS_CLIENT) {
    const existing = hasExistingToken();

    if (existing) {
      if (setter) {
        setter(existing);
        return;
      }
      return existing;
    }

    const { access_token, expires_in } = query<{
      access_token: string;
      expires_in: string;
    }>(window.location.hash.substring(1));

    if (access_token) {
      setToken(access_token, Number(expires_in));

      if (setter) {
        setter(access_token);
        return;
      }

      return access_token;
    }
  }
}

export { setToken };
export default tokenHandler;
