import * as React from "react";
import { renderWithDeps } from "@config/jest/helpers";

import {
  SingleSong,
  Normal,
  ITEMS,
} from "@src/ui/Organisms/Playlist/Playlist.stories";
import { ORGANISM_PLAYLIST_TESTID as TEST_IDS } from "@src/ui/Organisms/Playlist/Playlist.types";
import { MOLECULE_PLAYLIST_ITEM_TESTID as CHILD_TEST_IDS } from "@src/ui/Molecules/PlaylistItem/PlaylistItem.types";
import secondsToTime from "@src/services/secondsToTime";

describe("Organism/Playlist tests", () => {
  it("should properly render passed items", () => {
    const { getByTestId } = renderWithDeps(<SingleSong />);

    expect(getByTestId(TEST_IDS.WRAPPER)).toBeInTheDocument();
    expect(getByTestId(CHILD_TEST_IDS.ARTIST)).toHaveTextContent(
      ITEMS[0].artist,
    );
    expect(getByTestId(CHILD_TEST_IDS.TITLE)).toHaveTextContent(ITEMS[0].title);
    expect(getByTestId(CHILD_TEST_IDS.DURATION)).toHaveTextContent(
      secondsToTime(ITEMS[1].duration),
    );
  });

  it("should properly render all passed items", () => {
    const { container } = renderWithDeps(<Normal />);

    expect(container.querySelectorAll("li").length).toBe(ITEMS.length);
  });
});
