/**
 * @author tomekbuszewski
 * @since 2020-04-07 16:07:32
 */

import * as React from "react";

import { StyledLoader, StyledWrapper } from "./Loader.styles";
import { BaseProps as Props } from "./Loader.types";

const Loader = (props: Props) => {
  if (props.full) {
    return (
      <StyledWrapper>
        <StyledLoader />
      </StyledWrapper>
    );
  }

  return <StyledLoader />;
};

export { Loader };
