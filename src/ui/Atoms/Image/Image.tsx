/**
 * @author tomekbuszewski
 * @since 2020-04-06 07:56:36
 */

import * as React from "react";

import { StyledImage } from "./Image.styles";
import { BaseProps as Props } from "./Image.types";

const Image = (props: Props) => {
  const srcSet = Array.isArray(props.srcSet)
    ? props.srcSet.join(", ")
    : props.srcSet;

  return (
    <StyledImage
      {...props}
      alt={props.alt || props.title}
      srcSet={srcSet}
      className={props.className}
    />
  );
};

export { Image };
