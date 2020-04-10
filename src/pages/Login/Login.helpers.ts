/* eslint-disable @typescript-eslint/camelcase */

import { APP_URL, CLIENT_ID } from "@config/consts";

export const buildQuery = (input: any = {}) => ({
  client_id: CLIENT_ID,
  redirect_uri: APP_URL,
  show_dialog: true,
  response_type: "token",
  ...input,
});
