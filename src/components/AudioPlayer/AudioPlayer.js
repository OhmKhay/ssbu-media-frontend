import React, { useState } from 'react';
import  ReactJkMusicPlayer  from "react-jinke-music-player";
import 'react-jinke-music-player/lib/styles/index.less';
import './custom.less'
import { isBrowser } from '../../../utils/helper';
// const audioCover = 'https://ssbu-media.sgp1.digitaloceanspaces.com/img-cover/kbwc.png';
// const ChantingMorning = 'https://ssbu-media.sgp1.digitaloceanspaces.com/moring-chanting-of-khuva-boonchum.mp3';

function downloadUrl(url, filename) {
    console.log("here isurl:", url)
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(e) {
      if (this.status == 200) {
        const blob = this.response;
        const a = document.createElement("a");
        document.body.appendChild(a);
        const blobUrl = window.URL.createObjectURL(blob);
        a.href = blobUrl;
        a.download = filename;
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }, 0);
      }
    };
    xhr.send();
  }
 
   
  
  
const AudioPlayer = ({ audioList, playIndex = 0 }) => {

    const onHandleDownload = (audioInfo) => {
      
     return  window.open(audioInfo.musicSrc, '_blank').focus();
    }

    

    return (
        <>
             { isBrowser && <ReactJkMusicPlayer onAudioDownload={onHandleDownload}   playIndex={playIndex}  audioLists={audioList} theme="light" showThemeSwitch={false} showLyric={true} autoPlay={false} toggleMode={false} mode="full" />}
        </>
    )
}

export default AudioPlayer;
