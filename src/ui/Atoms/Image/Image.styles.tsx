/**
* @author tomekbuszewski
* @since 2020-04-06 07:56:36
*/

import styled from "styled-components";
import { BaseProps as Props } from "./Image.types";

const StyledImage = styled.img<Props>`
  display: block;
  max-width: 100%;
`;

export { StyledImage }
