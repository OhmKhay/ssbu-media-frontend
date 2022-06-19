import React from "react";

import Album from "../../src/components/Album/Album";
import { AlbumData } from "../../src/components/Album/AlbumData";
import Layout from "../../src/components/App/Layout";

const SingleAlbum = ({ album }) => {
  if (album) {
    return (
      <Layout
        path={album[0]?.slug}
        title={album[0]?.name}
        image={album[0]?.cover}
      >
        <div
          style={{
            padding: "2rem",
          }}
        >
          <Album album={[...album]} />
        </div>
      </Layout>
    );
  } else {
    return <div>Loading...</div>;
  }
};

SingleAlbum.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const MyAlbum = AlbumData?.filter((data) => {
    return data.slug === slug;
  });

  return { album: MyAlbum };
};

export default SingleAlbum;
