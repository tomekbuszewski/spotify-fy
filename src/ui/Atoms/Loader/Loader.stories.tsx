import * as React from "react";

import { Loader } from "./";

export const Normal = () => <Loader />;

export const Fullscreen = () => <Loader full />;

export default {
  component: Loader,
  title: "Atoms/Loader",
};
