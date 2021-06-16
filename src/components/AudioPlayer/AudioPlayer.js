import React from 'react';
import  ReactJkMusicPlayer  from "react-jinke-music-player";
import 'react-jinke-music-player/lib/styles/index.less';
import './custom.less'
import { isBrowser } from '../../../utils/helper';
// const audioCover = 'https://ssbu-media.sgp1.digitaloceanspaces.com/img-cover/kbwc.png';
// const ChantingMorning = 'https://ssbu-media.sgp1.digitaloceanspaces.com/moring-chanting-of-khuva-boonchum.mp3';

const AudioPlayer = ({ audioList }) => {

 

    return (
        <>
             { isBrowser && <ReactJkMusicPlayer  audioLists={audioList} theme="light" showThemeSwitch={false} showLyric={true} autoPlay={false} toggleMode={false} mode="full" />}
        </>
    )
}

export default AudioPlayer;
