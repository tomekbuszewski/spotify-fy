import * as React from "react";
import { Link, useParams } from "react-router-dom";

import fetch, { RESOURCE_PROGRESS as PROGRESS } from "@services/fetch";

import { CategoryIcon, CategoryGrid } from "@ui/Molecules";
import { ICategory } from "@ui/Molecules/CategoryIcon/CategoryIcon.types";
import { Loader, TextFragment } from "@ui/Atoms";
import { LISTING_PAGE } from "@translations/en";

import resources, { RESOURCE_TYPES } from "@config/resources";

interface Props {
  resource: RESOURCE_TYPES;
}

const Listing = (props: Props) => {
  const { url, link, id } = resources[props.resource];
  const { resource } = useParams();
  const [data, setData] = React.useState<ICategory[]>();
  const [fetchState, setFetchState] = React.useState<PROGRESS>(
    PROGRESS.LOADING,
  );

  React.useEffect(() => {
    document.title = "Listing playlists";

    (async () => {
      const realUrl =
        url.indexOf("{{id}}") > 0
          ? url.replace("{{id}}", resource as string)
          : url;

      try {
        const data = await fetch(realUrl);
        setData(data[id].items);
        setFetchState(PROGRESS.LOADED);
      } catch (e) {
        setFetchState(PROGRESS.ERROR);
      }
    })();

    return () => {
      setFetchState(PROGRESS.LOADING);
    };
  }, [resource, props.resource]);

  if (fetchState === PROGRESS.ERROR) {
    return <TextFragment>Sorry</TextFragment>;
  }

  if (fetchState === PROGRESS.LOADING) {
    return <Loader full />;
  }

  if (data && data.length === 0) {
    return <TextFragment>{LISTING_PAGE.NO_CONTENT}</TextFragment>;
  }

  return (
    <React.Fragment>
      {data && (
        <CategoryGrid>
          {data.map(item => (
            <Link to={`/${link}/${item.id}`} key={item.id}>
              <CategoryIcon {...item} />
            </Link>
          ))}
        </CategoryGrid>
      )}
    </React.Fragment>
  );
};

export { Listing };
