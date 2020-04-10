import transition from "@services/transitions";

describe("`transition` service tests", () => {
  const DURATION = "200ms";
  const EASING = "linear";

  it("should properly generate single transition prop", () => {
    const NAME = "opacity";

    expect(transition(NAME, DURATION, EASING)).toBe(
      `transition: ${NAME} ${DURATION} ${EASING}`,
    );
  });

  it("should properly generate group props", () => {
    const NAMES = ["transform", "opacity"];

    expect(transition(NAMES, DURATION, EASING)).toBe(
      `transition: ${NAMES[0]} ${DURATION} ${EASING}, ${NAMES[1]} ${DURATION} ${EASING}`,
    );
  });
});
