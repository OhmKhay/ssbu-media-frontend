import React from 'react'
import { AlbumData } from './AlbumData';
import AlbumItem from "./AlbumItem";
import "./album.less"
const Albums = () => {

    return (
        <div className="main_con clearfix">
       
          {AlbumData.map((data) => {
                 return <AlbumItem key={data.id} audio={data} />
             })}
       
        </div>
    )
}

export default Albums
