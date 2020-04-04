import * as React from "react";
import { renderWithDeps } from "@config/jest/helpers";

import { Normal, WithIcon, CallToAction } from "@ui/Atoms/Button/Button.stories";
import { ATOM_BUTTON_TEST_IDS } from "@ui/Atoms/Button/Button.types";

describe("Atoms/Button tests", () => {
  it("should render properly with default props", async () => {
    const TEXT = "Hi from tests";
    const { getByTestId } = renderWithDeps(<Normal>{TEXT}</Normal>);

    expect(getByTestId(ATOM_BUTTON_TEST_IDS.NORMAL)).toBeInTheDocument();
    expect(getByTestId(ATOM_BUTTON_TEST_IDS.NORMAL)).toHaveTextContent(TEXT);
  });

  it("should render properly with icon", () => {
    const { container, getByTestId } = renderWithDeps(<WithIcon />);

    expect(getByTestId(ATOM_BUTTON_TEST_IDS.WITH_ICON)).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("should render properly as call to action", () => {
    const TEXT = "Hello from CTA";
    const { getByTestId } = renderWithDeps(<CallToAction>{TEXT}</CallToAction>);

    expect(getByTestId(ATOM_BUTTON_TEST_IDS.CTA)).toBeInTheDocument();
    expect(getByTestId(ATOM_BUTTON_TEST_IDS.CTA)).toHaveTextContent(TEXT);
  });
});
