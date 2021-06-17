import React, { useState } from 'react';
import Link from 'next/link';

import ProgressiveImageComponent from '../ProgressiveImage';

import "./album.less";
import { PlayIcon } from '../../icons';

const AlbumItem = ({ audio }) => {

  const [clickPlay, setClickPlay] = useState(false);
  const onClickAlbum = () => {
       setClickAlbum(true);
  }
 
  const onHandlePlay = () => {
      setClickPlay(true);
  }

    return (
        <>

<style jsx>
        {`
          .time-ago {
            padding: 0rem 1rem;
            font-style: normal;
          }

          .cards {
            padding: 4rem;
            border: 1px solid red;
            background: #fff;
          }

          h1 {
            text-align: center;
          }

          .info__container {
            display: flex;
            flex-flow: column;
            align-items: center;
            max-width: 1120px;
            width: 90%;
            margin: 0 auto;
          }

          .cards__wrapper {
            position: relative;
            margin: 50px 0 45px;
          }

          .cards__items {
            margin-bottom: 24px;
          }

          .cards__item {
            display: flex;
            flex: 1;
            margin: 0 1rem;
          
            border-radius: 10px;
          }

          .cards__item__link {
            display: flex;
            flex-flow: column;
            width: 100%;
            box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
            // -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
            // filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
            border-radius: 10px;
            overflow: hidden;
            text-decoration: none;
          }

          .cards__item__pic-wrap {
            position: relative;
            width: 100%;
            margin: 0rem auto;
            padding-top: 86%;
            font-family: 'GT Super Display';
            overflow: hidden;
          }

          // .fade-img {
          //   animation-name: fade-img;
          //   animation-duration: 2s;
          //   border-radius: 10px;
          // }

          .cards__item__pic-wrap::after {
            // content: attr(data-singer);
            position: absolute;
            bottom: 0;
            margin-left: 10px;
            padding: 6px 8px;
            max-width: calc((100%) - 60px);
            font-size: 12px;
            font-weight: 700;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.4);
            box-sizing: border-box;
          }

          .cards__item__img {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
            max-height: 100%;
            object-fit: cover;
            transition: all 0.2s linear;
            border-radius: 10px;
          }

          .cards__item__img:hover {
            transform: scale(1.1);
          }

          .cards__item__info {
            padding: 20px 30px 30px;
          }

          .cards__item__text {
            color: #252e48;
            font-size: 18px;
            line-height: 24px;
          }

          @media only screen and (min-width: 1200px) {
            .content__blog__container {
              width: 84%;
            }
          }

          @media only screen and (min-width: 1024px) {
            .cards__items {
              display: flex;
            }
          }

          @media only screen and (max-width: 1024px) {
            .cards__item {
              margin-bottom: 2rem;
            }
          }
          .item {
            border-radius: 15px;
            margin: 0.6rem;
            border: 1px solid #f2f2f2;
          }

          .item:hover {
            cursor: pointer;
            box-shadow: 0 6px 18px rgba(56, 125, 255, 0.17);
            // -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
            // filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
            border-radius: 10px;
            overflow: hidden;
      
            text-decoration: none;
          }
          
          .item .img__box {
            width: 100%;
        
            padding: 1rem;
          }
          .item .img__box img {
            margin: 0px auto;
            width: 100%;
          }

          .item .info-box {
            padding: 0.6rem 0rem;
          }

          .item .info-box span {
            padding: 0rem 1rem;
          }
          .name {
            font-weight: 600;
            font-family: "GHK Muse";
          }

          .item .singer {
            padding: 0.1rem 1rem;
            border-radius: 0.2rem;
          }
          @media only screen and (min-width: 992px) {
            .item {
              width: 25%;
              float: left;
              margin: 0.6rem;
    
            
            }
          }

          
        `}
      </style>
      
            <Link href={`/album/[slug]`} as={`/album/${audio.slug}`}>
 
            <a onClick={onClickAlbum}>
              <div className="item">
                 <div className="music-card">
              
              
                <div className="img__box">
            
                <div className="music-card-cover">
                  
                  <div className="play-circle">
                      <PlayIcon />
                  </div>
                  {/* <img src={audio.background_image} /> */}
                  <figure className="cards__item__pic-wrap">
                  
                    <ProgressiveImageComponent 
                     imageUrl={audio.cover}
                     alt={audio.name}
                     borderRadius={'16px'}
                     class_Name="cards__item__img"
                    />

                    
                  </figure>

                  </div>
                  <div className="info-box">
                    <span
                      className="singer"
                      style={{
    
                        fontStyle: 'normal',
                        display: 'inline',
                        padding: '0.4rem',
                        margin: '0rem 0.6rem 0rem 0rem',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        backgroundColor: `${audio.singer && audio.singer.name === 'Notice' ? 'rgba(0,132,255,0.1)': 'rgb(84 239 153 / 1%)'}`,
                        borderRadius: '20px',
                        color: `${audio.singer && audio.singer.name === 'Notice' ? '#007bff' : '#0070f3'}`,
                      }}
                      
                      >
                      {audio.singer}
                    </span>
                
                    <p className={'name'}>{audio.name.length > 20 ? audio.name.slice(0,50)+" ...": audio.name } </p>

        
                  </div>


              
                </div>

                </div>

              </div>
            </a>
            </Link>

        </>
    )
}

export default AlbumItem;
