/**
 * @author tomekbuszewski
 * @since 2020-04-08 08:17:01
 */

import * as React from "react";

import {
  StyledCategoryIcon,
  StyledTextFragment,
  StyledImage,
} from "./CategoryIcon.styles";
import { ICategory as BaseProps } from "./CategoryIcon.types";

import { TEXT_FRAGMENT_VARIANTS } from "@ui/Atoms";

const CategoryIcon = (props: BaseProps) => {
  let cover = "";

  if (props.icons) {
    cover = props.icons[0].url;
  } else if (props.images) {
    cover = props.images[0].url;
  }

  return (
    <StyledCategoryIcon>
      <StyledImage src={cover} title={props.name} />
      <StyledTextFragment variant={TEXT_FRAGMENT_VARIANTS.LARGE}>
        {props.name}
      </StyledTextFragment>
    </StyledCategoryIcon>
  );
};

export { CategoryIcon };
