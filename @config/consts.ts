export const IS_CLIENT = typeof window !== "undefined";
export const IS_PROD = process.env.NODE_ENV === "production";
export const CLIENT_ID = process.env.CLIENT_ID;
export const API_ENDPOINT = process.env.CLIENT_URL;
export const API_AUTH_ENDPOINT = process.env.CLIENT_AUTH;
export const APP_URL = process.env.APP_URL;