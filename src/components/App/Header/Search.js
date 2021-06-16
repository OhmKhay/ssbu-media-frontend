import React from 'react'
import styled from "@emotion/styled";

import { CloseIcon,  } from '../../Icons';
import SearchInput from './SearchInput';
import { FindIcon } from '../../Icons/FindIcon';

const Search = ({ isShow = false, toggleShowSearchBox }) => {
 
    const onHandleClick = () => {
        toggleShowSearchBox(false);
    }

    const CoverWrapper = styled('div')`

    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    background: rgba(0, 0, 0, 0.6);
    
    `;

    const PopUpWrapper = styled('div')`
       width: 720px;
       height: 340px;
       position: fixed;
       top: 50%;
       left: 50%;
       margin-top: -170px; /* Negative half of height. */
       margin-left: -310px; /* Negative half of width. */
       z-index: 3;
       border-radius: 10px;
       border: 1px solid #f2f2f2;
       
       background-color: #ffff;
       box-shadow: 0 6px 18px rgba(56,125,255,0.17);
       padding: 1rem;

       @media screen and (max-width: 768px) {
        width: 356px;
        height: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -168px;
        margin-left: -179px;
        z-index: 3;
        border-radius: 10px;
        border: 1px solid #f2f2f2;
        background-color: #ffff;
        box-shadow: 0 6px 18px rgb(56 125 255 / 17%);
       }
       .c_icon {
           text-align: right;
         
           position: absolute;
           top: 6px;
           left: 12px;
           cursor: pointer;
           
       }
     
       
    `;

    const FindIconWrapper = styled('div')`
      margin: 0px auto;
      text-align: center;
    `;
 

    return isShow?(  <CoverWrapper>
        <PopUpWrapper>
        <span  className="c_icon" onClick={onHandleClick}>
             <CloseIcon color={'#666'} />
         </span>

             <SearchInput closeSearchBox={ () => toggleShowSearchBox(false)} />

             <FindIconWrapper>
               <FindIcon />
             </FindIconWrapper>
        </PopUpWrapper>
       </CoverWrapper>): null;
}

export default Search;
