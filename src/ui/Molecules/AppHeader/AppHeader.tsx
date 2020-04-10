/**
 * @author tomekbuszewski
 * @since 2020-04-10 11:28:38
 */

import * as React from "react";

import { StyledAppHeader, StyledToggle, StyledTitle } from "./AppHeader.styles";
import { BaseProps } from "./AppHeader.types";

interface Props extends BaseProps {
  toggle: () => void;
}

const AppHeader = (props: Props) => (
  <StyledAppHeader>
    <StyledTitle>Spotify-fy</StyledTitle>
    <StyledToggle onClick={props.toggle}>· · ·</StyledToggle>
  </StyledAppHeader>
);

export { AppHeader };
