/**
* @author tomekbuszewski
* @since 2020-04-03 15:16:18
*/

import * as React from "react";

import { StyledPlayButton } from "./PlayButton.styles";

interface Props {
  children?: React.ReactNode;
}

const PlayButton = (props: Props) => (
  <StyledPlayButton>{props.children}</StyledPlayButton>
);

export { PlayButton }
