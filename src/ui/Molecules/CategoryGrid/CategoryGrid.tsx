/**
 * @author tomekbuszewski
 * @since 2020-04-08 08:37:57
 */

import * as React from "react";

import { StyledCategoryGrid } from "./CategoryGrid.styles";
import { BaseProps } from "./CategoryGrid.types";

interface Props extends BaseProps {
  children: React.ReactNode;
}

const CategoryGrid = (props: Props) => (
  <StyledCategoryGrid>{props.children}</StyledCategoryGrid>
);

export { CategoryGrid };
