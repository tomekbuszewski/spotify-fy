import * as React from "react";
import { renderWithDeps } from "@config/jest/helpers";

import { Normal } from "@ui/Molecules/PlaylistItem/PlaylistItem.stories";
import { MOLECULE_PLAYLIST_ITEM_TESTID as TEST_IDS } from "@src/ui/Molecules/PlaylistItem/PlaylistItem.types";

describe("Molecules/PlaylistItem tests", () => {
  it("should render properly all the required elements", () => {
    const { getByTestId } = renderWithDeps(
      <Normal />,
    );

    expect(getByTestId(TEST_IDS.ARTIST)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.TITLE)).toBeInTheDocument();
    expect(getByTestId(TEST_IDS.DURATION)).toBeInTheDocument();
  });

  it("should properly pass data from props", () => {
    const ARTIST = "Radiohead";
    const TITLE = "The Butcher";
    const DURATION = "1:23";

    const { getByTestId } = renderWithDeps(
      <Normal artist={ARTIST} title={TITLE} duration={DURATION} />,
    );

    expect(getByTestId(TEST_IDS.ARTIST)).toHaveTextContent(ARTIST);
    expect(getByTestId(TEST_IDS.TITLE)).toHaveTextContent(TITLE);
    expect(getByTestId(TEST_IDS.DURATION)).toHaveTextContent(DURATION);
  });

  it("should properly render `active` button state", () => {
    const { getByTestId } = renderWithDeps(
      <Normal active />,
    );

    expect(getByTestId(TEST_IDS.PLAY_BUTTON_ACTIVE)).toBeInTheDocument();
  });
});
