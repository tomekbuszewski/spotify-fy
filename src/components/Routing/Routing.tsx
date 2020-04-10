import * as React from "react";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";

import { Listing } from "@pages/Listing";
import { Playlist } from "@pages/Playlist";

import { PlayState } from "@containers/PlayState";
import { RESOURCE_TYPES } from "@config/resources";
import { Wrapper } from "@ui/Atoms";
import { AppHeader } from "@ui/Molecules";

import { Sidebar } from "@containers/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [activeSidebar, setActiveSidebar] = React.useState<boolean>(false);
  const toggle = () => setActiveSidebar(state => !state);

  React.useEffect(() => {
    setActiveSidebar(false);
  }, [location.pathname]);

  return (
    <Wrapper>
      <AppHeader toggle={toggle} />
      <Sidebar active={activeSidebar} />
      <main style={{ flex: 1 }}>{children}</main>
      <PlayState />
    </Wrapper>
  );
};

const Routing = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Listing resource={RESOURCE_TYPES.CATEGORIES} />
        </Route>
        <Route path="/category/:resource">
          <Listing resource={RESOURCE_TYPES.PLAYLISTS} />
        </Route>
        <Route path="/new-releases">
          <Listing resource={RESOURCE_TYPES.ALBUMS} />
        </Route>
        <Route path="/playlist/:resource">
          <Playlist resource={RESOURCE_TYPES.PLAYLISTS} />
        </Route>
        <Route path="/album/:resource">
          <Playlist resource={RESOURCE_TYPES.ALBUMS} />
        </Route>
      </Switch>
    </Layout>
  </HashRouter>
);

export { Routing };
