import * as React from "react";
import fetch from "@services/fetch";

import { Sidebar as View, SidebarGroup, SidebarItem } from "@ui/Atoms";

import { ME, USER_PLAYLISTS } from "@config/resources";

interface IUserPlaylist {
  id: string;
  name: string;
}

const Sidebar = ({ active }: { active?: boolean }) => {
  const [userPlaylists, setUserPlaylists] = React.useState<IUserPlaylist[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { id } = await fetch(ME);
        const { items } = await fetch(USER_PLAYLISTS.replace("{{id}}", id));
        console.log(items);
        setUserPlaylists(items);
      } catch (e) {
        setUserPlaylists([]);
      }
    })();
  }, []);

  return (
    <View active={active}>
      <SidebarGroup>
        <SidebarItem to="/">All Categories</SidebarItem>
        <SidebarItem to="/new-releases">New releases</SidebarItem>
      </SidebarGroup>
      {userPlaylists.length > 0 && (
        <SidebarGroup>
          {userPlaylists.map(playlist => (
            <SidebarItem key={playlist.id} to={`/playlist/${playlist.id}`}>
              {playlist.name}
            </SidebarItem>
          ))}
        </SidebarGroup>
      )}
    </View>
  );
};

export { Sidebar };
