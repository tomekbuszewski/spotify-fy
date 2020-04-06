import * as React from "react";
import { renderWithDeps } from "@config/jest/helpers";

import { Normal } from "@src/ui/Organisms/Playlist/Playlist.stories";
import { IPlaylistItem } from "@src/ui/Molecules/PlaylistItem/PlaylistItem.types";
import { ORGANISM_PLAYLIST_TESTID as TEST_IDS } from "@src/ui/Organisms/Playlist/Playlist.types";
import { MOLECULE_PLAYLIST_ITEM_TESTID as CHILD_TEST_IDS } from "@src/ui/Molecules/PlaylistItem/PlaylistItem.types";

describe("Organism/Playlist tests", () => {
  const SONG_1: IPlaylistItem = {
    artist: "Pearl Jam",
    title: "Quick Escape",
    duration: "4:46",
  };

  const SONG_2: IPlaylistItem = {
    artist: "Pearl Jam",
    title: "Alright",
    duration: "4:46",
  };

  it("should properly render passed items", () => {
    const { getByTestId } = renderWithDeps(<Normal items={[SONG_1]} />);

    expect(getByTestId(TEST_IDS.WRAPPER)).toBeInTheDocument();
    expect(getByTestId(CHILD_TEST_IDS.ARTIST)).toHaveTextContent(SONG_1.artist);
    expect(getByTestId(CHILD_TEST_IDS.TITLE)).toHaveTextContent(SONG_1.title);
    expect(getByTestId(CHILD_TEST_IDS.DURATION)).toHaveTextContent(
      SONG_1.duration,
    );
  });

  it("should properly render all passed items", () => {
    const ITEMS = [SONG_1, SONG_2];
    const { container } = renderWithDeps(<Normal items={ITEMS} />);

    expect(container.querySelectorAll("li").length).toBe(ITEMS.length);
  });
});
