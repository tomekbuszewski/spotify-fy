/* eslint-disable @typescript-eslint/camelcase */
import axios from "axios";
import {
  API_ENDPOINT,
  API_AUTH_REFRESH_ENDPOINT,
  CLIENT_SECRET,
} from "@config/consts";

import tokenHandler, { setToken } from "@services/tokenHandler";

enum RESOURCE_PROGRESS {
  LOADING,
  LOADED,
  ERROR,
}

async function fetch(resource: string, fullUrl?: boolean): Promise<any> {
  const url = fullUrl ? resource : `${API_ENDPOINT}/${resource}`;
  const token = tokenHandler();
  const options = (Authorization: string) => ({
    headers: {
      Authorization,
    },
  });

  const { data, status } = await axios.get(url, options(`Bearer ${token}`));

  if (status === 200) {
    return data;
  } else {
    const { data } = await axios.post(
      API_AUTH_REFRESH_ENDPOINT!,
      {
        grant_type: "refresh_token",
        refresh_token: token,
      },
      options(`Basic ${CLIENT_SECRET}`),
    );

    const { access_token, expires_in } = data;
    setToken(access_token, expires_in);

    return await fetch(resource);
  }
}

export { RESOURCE_PROGRESS };
export default fetch;
