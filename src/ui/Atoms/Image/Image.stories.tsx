import * as React from "react";

import { Image } from "./";

export const Normal = () => (
  <Image src="http://www.fillmurray.com/140/100" title="Some image" />
);

export const WithSrcSet = () => (
  <Image
    src="http://www.fillmurray.com/140/100"
    title="Some image"
    sizes="(max-width: 600px) 480px, 800px"
    srcSet={[
      "http://www.fillmurray.com/140/100 320w",
      "http://www.fillmurray.com/300/200 640w",
      "http://www.fillmurray.com/900/600 1000w",
    ]}
  />
);

export default {
  component: Image,
  title: "Atoms/Image",
};
