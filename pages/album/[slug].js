import React from 'react';
import { useRouter } from 'next/router';
import Album from "../../src/components/Album/Album";
import { AlbumData } from '../../src/components/Album/AlbumData';
import Layout from "../../src/components/App/Layout";

const SingleAlbum = () => {
    const {
        query: { slug },
      } = useRouter();
    
    const album = AlbumData?.filter((data) => {
        return data.slug === slug; 
    });

    return (
        <Layout>
           <div style={{
               padding: '2rem'
           }}>
            <Album album={album} />
           </div>
        </Layout>
    )
   
}

// SingleAlbum.getInitialProps = async ({ query }) => {
//     const { slug } = query
   

//     return { slug }
//   }

export default SingleAlbum;
