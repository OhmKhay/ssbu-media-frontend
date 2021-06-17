import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import SongItem from './Songs/SongItem';
import "./singleAlbum.less"
import ProgressiveImageComponent from '../ProgressiveImage';
const AudioPlayer = dynamic(
    () => import('../AudioPlayer'),
    { ssr: false }
  );

const Album = ({ album }) => {
 

    let Audios;
    const MyAlbum = album.filter((album) => {
        return Audios = album.audios;
    })




    return (
        <div className="album">
            
              {album.map((album) => {
                  return <div key={album.id}>
                      <div className="album_cover">
                            <ProgressiveImageComponent 
                            imageUrl={album.cover}
                            alt={album.name}
                            borderRadius={'3px'}
                         
                            />

                        </div>
                      <h1 className="audio_title">
                       {album.name}
                      </h1>
                      
                      <span className="singer">
                          {album.singer}
                      </span>
                      </div>
              })}
              <button className="btn"> Added to PlayList </button>

              {album?.map((album) => {
                  return album.audios.map((song, index)  =>  <SongItem index={index} Audios={Audios} key={song.id} song={song}  /> )
              })}
           
        </div>
    )
}

export default Album
