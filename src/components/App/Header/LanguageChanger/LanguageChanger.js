import React, { useRef } from 'react';
import Link from 'next/link';

import { useDetectOutsideClick } from '../../../../hooks/useDetectOutsideClick';
import { LanguageIcon } from '../../../Icons';


const LanguageChanger = ({ scrollState, className }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <style jsx>
        {`
          .menu-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
          }

          .menu-trigger {
            background: transparent;
            // border-radius: 90px;
            cursor: pointer;
            // display: flex;
            // justify-content: space-between;
            align-items: center;
            padding: 0px 6px;
            // border: 1px solid red;
            // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            border: none;
            vertical-align: middle;
            // transition: box-shadow 0.4s ease;
            margin-left: auto; /* Strictly for positioning */
          
          }
         
          .menu-trigger a svg {
            border: none;
            vertical-align: middle;
          }

          //     .menu-trigger:hover {
          //       box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
          //     }

          .menu-trigger span {
            font-weight: 700;
            vertical-align: middle;
            font-size: 14px;
            border: none;
            margin: 0 10px;
          }

          .menu-trigger img {
            border-radius: 90px;
          }

          .menu {
            background: #ffffff;
            border-radius: 8px;
            position: absolute;
            top: 44px;
            right: 0;
            // width: 300px;
            padding: 0rem 2rem;
            box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
          }

          .menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .menu ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .menu li {
            border-bottom: 1px solid #dddddd;
            text-align: left;

      
          }
          .link {
            text-decoration: none;
            color: #333333;
            padding: 15px 20px;
            display: block;
          }
          .menu li a {
            text-decoration: none;
            color: #333333;
            padding: 15px 20px;
            display: block;
          }
          button {
            border: none;

          }
          button:focus {
            border: none;
          }
          a {
            border: none;
          }
        `}
      </style>

      <div className="menu-container">
        <div onClick={onClick} className="menu-trigger">
          <a className={scrollState === 'top' && className !== 'with-bg' ? 'c-white' : 'c-black'}>
            <LanguageIcon fill={scrollState === 'top' && className !== 'with-bg' ? '#fff' : '#666'} /> {/* Language */}
          </a>
        </div>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li>
              <Link href={'/'} locale={'en'} >

                <a>
                   English
                </a>
              </Link>
            </li>
            <li>
            <Link href={'/mm'} locale={'mm'} > 
            <a>
            Burmese 
            </a></Link>
            </li>
            <li>
             <Link href={'/shn'} locale={'shn'} > 
             <a>
             Shan
             </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};



export default LanguageChanger;
