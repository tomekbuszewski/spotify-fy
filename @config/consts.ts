export const IS_CLIENT = typeof window !== "undefined";
export const IS_PROD = process.env.NODE_ENV === "production";
export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;

export const API_ENDPOINT = process.env.CLIENT_URL;
export const API_AUTH_ENDPOINT = process.env.CLIENT_AUTH;
export const API_AUTH_REFRESH_ENDPOINT = process.env.CLIENT_REFRESH_TOKEN;

export const APP_URL = process.env.APP_URL;
