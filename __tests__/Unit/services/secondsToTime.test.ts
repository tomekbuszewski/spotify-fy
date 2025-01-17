import secondsToTime from "@services/secondsToTime";

describe("Seconds to time tests", () => {
  it("should convert 330 seconds to 5 minutes 30 seconds", () => {
    expect(secondsToTime(330)).toBe("05:30");
  });

  it("should convert 3630 seconds to 1 hour, 0 minutes 30 seconds", () => {
    expect(secondsToTime(3630)).toBe("01:00:30");
  });

  it("should convert 30 seconds to 00:30", () => {
    expect(secondsToTime(30)).toBe("00:30");
  });
});
