import * as React from "react";
import { text } from "@storybook/addon-knobs";

import { IoIosPlay } from "react-icons/io";

import { TestWrapper } from "@components/TestWrapper";

import { BUTTON_VARIANTS } from "@ui/Atoms/Button/Button.types";
import { ATOM_BUTTON_TEST_IDS } from "@ui/Atoms/Button/Button.types";
import { Button } from "./";

export const Normal = ({ children }: { children?: React.ReactNode }) => (
  <TestWrapper testId={ATOM_BUTTON_TEST_IDS.NORMAL}>
    <Button>{children || text("Example text", "Hello")}</Button>
  </TestWrapper>
);

export const WithIcon = () => (
  <TestWrapper testId={ATOM_BUTTON_TEST_IDS.WITH_ICON}>
    <Button>
      <IoIosPlay />
    </Button>
  </TestWrapper>
);

export const CallToAction = ({ children }: { children?: React.ReactNode }) => (
  <TestWrapper testId={ATOM_BUTTON_TEST_IDS.CTA}>
    <Button variant={BUTTON_VARIANTS.CTA}>{children || "Listen on Spotify-fy"}</Button>
  </TestWrapper>
);

export default {
  component: Button,
  title: "Atoms/Button",
};
