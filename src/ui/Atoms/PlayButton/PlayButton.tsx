/**
 * @author tomekbuszewski
 * @since 2020-04-03 15:16:18
 */

import * as React from "react";
import  { IoIosPlay, IoIosPause } from "react-icons/io";

import { StyledPlayButton } from "./PlayButton.styles";
import { BaseProps as Props } from "./PlayButton.types";

const PlayButton = (props: Props) => (
  <StyledPlayButton {...props}>
    {props.active ? <IoIosPause /> : <IoIosPlay />}
  </StyledPlayButton>
);

export { PlayButton };
