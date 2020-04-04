/**
* @author tomekbuszewski
* @since 2020-04-03 15:16:18
*/

import styled from "styled-components";

const StyledPlayButton = styled.button`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

export { StyledPlayButton }
