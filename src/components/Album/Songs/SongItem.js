import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
const AudioPlayer = dynamic(
    () => import('../../AudioPlayer'),
    { ssr: false }
  );

const SongItem = ({song, Audios}) => {
  
    const [audioLists, setAudioLists] = useState([]);

    useEffect(() => {
       setAudioLists(Audios);
    }, [Audios]);
    
    const [, forceRender] = React.useState({});

    const onHandlePlay = (e) => {
        e.preventDefault();
        setAudioLists([song])
        forceRender({});
       
     
      
    }
 

    return (
        <div>
               <a > 
                  <h1 onClick={(e) => onHandlePlay(e)}>{song.name}</h1>
                  <span>By {song.singer}</span>
               </a>
               {<AudioPlayer clearPriorAudioLists={true}  audioList={audioLists}  />}
        </div>
    )
}

export default SongItem
