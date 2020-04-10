/**
 * @author tomekbuszewski
 * @since 2020-04-08 08:17:01
 */

import styled from "styled-components";
import { rem } from "@ui/theme";

import { TextFragment, Image } from "@ui/Atoms";

const StyledCategoryIcon = styled.li`
  background: ${p => p.theme.colors.highlight};

  cursor: pointer;

  color: ${p => p.theme.colors.link};
  font-size: ${p => p.theme.fonts.sizes.small};
  text-align: center;

  border-radius: ${rem(16)};
  list-style: none;
  margin: 0;
  padding: ${rem(8)};
  max-width: ${rem(400)};

  position: relative;

  ${p => p.theme.breakpoints.tablet} {
    padding: ${rem(12)};
  }
`;

const StyledTextFragment = styled(TextFragment)`
  margin: ${rem(8)} auto 0;
`;

const StyledImage = styled(Image)`
  border-radius: ${rem(8)};
`;

export { StyledCategoryIcon, StyledTextFragment, StyledImage };
