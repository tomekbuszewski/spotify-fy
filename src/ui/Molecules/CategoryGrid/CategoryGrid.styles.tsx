/**
 * @author tomekbuszewski
 * @since 2020-04-08 08:37:57
 */

import styled from "styled-components";
import { BaseProps as Props } from "./CategoryGrid.types";
import { rem } from "@ui/theme";

const StyledCategoryGrid = styled.ul<Props>`
  margin: 0 auto;
  padding: ${rem(8)};

  display: grid;
  grid-row-gap: ${rem(8)};

  grid-template-columns: repeat(auto-fit, minmax(33.3%, 1fr));
  grid-column-gap: ${rem(8)};

  ${p => p.theme.breakpoints.mobileHorizontal} {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  }

  ${p => p.theme.breakpoints.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-row-gap: ${rem(16)};
    grid-column-gap: ${rem(16)};
    padding: ${rem(16)};
  }

  ${p => p.theme.breakpoints.desktopLarge} {
    grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  }
`;

export { StyledCategoryGrid };
