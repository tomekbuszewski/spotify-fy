import * as React from "react";
import { renderWithDeps } from "@config/jest/helpers";

import { TestWrapper } from "@src/components/TestWrapper";

describe("Components/TestWrapper tests", () => {
  const OLD_ENV_VALS = process.env;
  const TEST_ID = "hello-test-id";
  const TEXT = "Hi there";

  beforeEach(() => {
    jest.resetModules();

    process.env = {
      ...OLD_ENV_VALS,
    };
  });

  it("should properly add test-id to one element", () => {
    const { getByTestId } = renderWithDeps(
      <TestWrapper testId={TEST_ID}>
        <div>{TEXT}</div>
      </TestWrapper>,
    );

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTestId(TEST_ID)).toHaveTextContent(TEXT);
  });

  it("should not add test-id when in production", () => {
    process.env.NODE_ENV = "production";

    const { container } = renderWithDeps(
      <TestWrapper testId={TEST_ID}>
        <p>{TEXT}</p>
      </TestWrapper>,
    );

    expect(container.querySelector("p")!.getAttribute("data-testid")).toBeFalsy();
    expect(container.querySelector("p")!.innerHTML).toBe(TEXT);
  });
});
