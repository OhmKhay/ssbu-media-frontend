import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import "./songs.less";
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
                 
                  <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
                     <span className="sr-only">Check</span>
                     <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                    </g>
                    </svg>
                       <p className={'font-medium text-gray-900 dark:text-gray-100'} onClick={(e) => onHandlePlay(e)}>
                      {song.name}
                      </p>
                  </div>
                  <span>By {song.singer}</span>
               </a>
               {<AudioPlayer clearPriorAudioLists={true}  audioList={audioLists}  />}
        </div>
    )
}

export default SongItem
