import React, { useState } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal';
import { useTranslation } from 'react-i18next';

import AboutMenu_Data from '../App/Header/About/about_Data';
import AcademicNav_Data from './Header/Academic/Academic_Data';
import AdmissionMenu_Data from '../App/Header/Admissions/Admission_Data';
import Accordion from './Accordion';
import {  Apply, SearchIcon } from '../../components/Icons';
import LanguageChanger from './Header/LanguageChanger';

const Navigation = () => {
  
  const About_Data_New = AboutMenu_Data.map(data => data.data[0]);
  const Admission_Data_New = AdmissionMenu_Data.map(data => data.data[0]);
  const Academic_Data_New = AcademicNav_Data.map(data => {
    return data.data;
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [showAcDropdown, setShowAcDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleShowAcDropdown = () => {
    setShowAcDropdown(!showAcDropdown);
  };

  const { t } = useTranslation("header");


  return (
    <>
      <style jsx>
        {`

          .nav_icon {
            margin: 0.2rem;
          }

          .dropdown-link {
            list-style: none;
          }
          section {
            position: relative;
            height: calc(100vh - 3rem);
            width: 100%;

            overflow: hidden;
          }

          .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
       
          }
          /* 
                  .container{
                        max-width: 65rem;
                        padding: 0 2rem;
                        margin: 0 auto;
                        display: flex;
                        position: relative;
                  } */

          .logo-container {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .nav-btn {
            flex: 3;
            display: flex;
          }

          .nav-links {
            flex: 2;
            color: #666;
          
          }
          .nav-links ul {
            flex-direction: column;
          }

          .log-sign {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
          }

          .logo {
            color: #fff;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            line-height: 3rem;
          }

          .logo span {
            font-weight: 300;
          }

          .btn {
            display: inline-block;
            padding: 0.5rem 1.3rem;
            font-size: 0.8rem;
            border: 2px solid #fff;
            border-radius: 2rem;
            line-height: 1;
            margin: 0 0.2rem;
            transition: 0.3s;
            text-transform: uppercase;
          }

          .btn.solid,
          .btn.transparent:hover {
            background-color: #fff;
            color: #3da676;
          }

          .btn.transparent,
          .btn.solid:hover {
            background-color: transparent;
            color: #fff;
          }

          .nav-links > ul {
            display: flex;
            justify-content: center;
            align-items: left;
   
          }

          .nav-link {
            position: relative;
            font-family: 'GHK Muse';
          }

          .nav-link > a {
            line-height: 3rem;
            color: #666;
            display: flex;
            padding: 0 0.8rem;
            letter-spacing: 1px;
            font-size: 0.95rem;
            // display: flex;
            border-bottom: 1px solid #ccc;
            align-items: left;
        
            transition: 0.5s;
           

          }

          .nav-link > a > i {
            margin-left: 0.2rem;
          }

          .nav-link:hover > a {
            transform: scale(1.1);
          }

          .dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            width: 10rem;
            transform: translateY(10px);

            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
            transition: box-shadow 0.2s ease;

            border-radius: 0.6rem;
            opacity: 0;
            /* border: 1px solid red; */
            pointer-events: auto;
            transition: 0.5s;
          }

          .dropdown ul {
            position: relative;
            padding: 0rem 0.6rem;
          }

          .dropdown-link > a {
            display: flex;
            background-color: #fff;
            color: #666;
            border-bottom: 1px solid #333;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            align-items: center;
            justify-content: space-between;
            transition: 0.3s;
          }

          .dropdown-link:not(:nth-last-child(2)) {
            border-bottom: 1px solid #efefef;
            list-style: none;
          }

          .dropdown-link i {
            transform: rotate(-90deg);
          }

          .arrow {
            position: absolute;
            width: 11px;
            height: 11px;
            top: -5.5px;
            left: 32px;
            background-color: #fff;
            transform: rotate(45deg);
            cursor: pointer;
            transition: 0.3s;
            z-index: -1;
          }

          .dropdown-link:first-child:hover ~ .arrow {
            background-color: #fff;
          }

          .dropdown-link {
            position: relative;
          }

          .dropdown.second {
            top: 0;
            left: 100%;
            padding-left: 0.2rem;
            cursor: pointer;
            transform: translateX(10px);
            /* border: 1px solid red; */
          }

          .dropdown.second .arrow {
            top: 10px;
            left: -5.5px;
          }

         
          .dropdown .dropdown-link:hover > .dropdown {
            transform: translate(0, 0);
            opacity: 1;
            padding-left: 0.2rem;
            pointer-events: auto;
          }

     

          .hamburger-menu-container .hamburger-menu div:before {
            transform: translateY(0) rotate(-45deg);
          }

        
          .hamburger-menu-container .hamburger-menu div:after {
            transform: translateY(0) rotate(45deg);
          }

          @keyframes animation {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
          ul li{
            list-style: none;
          }

          @media (max-width: 920px) {
            .hamburger-menu-container {
              display: flex;
            }

            .dropdown-link {
              list-style: none;
            }


            .caret-down::after {
              content: '';
              width: 0;
              height: 0;
              top: 1.2rem;
              position: absolute;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-top: 6px solid #bbb;
            }
            .caret-down.show::after {
              content: '';
              position: absolute;
              top: 1rem;
              left: 1rem;
              width: 0;
              height: 0;
              border-top: 0;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-bottom: 5px solid #ccc;
            }

      

            .nav-btn {
              position: fixed;
              height: calc(100vh - 3rem);
              top: 3rem;
              left: 0;
              width: 100%;
              /* background-color: #3da676; */
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              overflow-x: hidden;
              overflow-y: auto;
              transform: translateX(0);
              transition: 0.6s;
            }

            .nav-btn {
              transform: translateX(0);
            }

            .nav-btn .nav-link,
            .nav-btn .log-sign {
              animation: animation 0.5s ease forwards 0.5s;
            }

            .nav-links {
              flex: initial;
              width: 100%;
            }

            .nav-links > ul {
              flex-direction: column;
              padding: 0px 1rem;
            }

            .nav-link {
              width: 100%;
              opacity: 0;
             

              transform: translateY(15px);
            }

            .nav-link .a_link {
              line-height: 1;

              padding: 1.6rem 0rem;
            }
            .nav-link span {
              width: 2rem;
              display: inline-block;
              position: absolute;
              right: 0;
              top: 0;
              height: 3rem;
              // border: 1px solid red;
            }

            .nav-link:hover > a {
              transform: scale(1);
              color: #3da676;
              background-color: transparent;
            }

            .dropdown,
            .dropdown.second {
              position: initial;
              top: initial;
              left: initial;
              transform: initial;
              opacity: 1;
              pointer-events: auto;
              width: 100%;
              transition: box-shadow 0.2s ease;
              box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
              padding: 0;
              background-color: #fff;
              // display: none;
            }

    

            .dropdown .collapsed {
              max-height: 0;
              transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
            }

            .nav-link:hover > a > i,
            .dropdown-link:hover > a > i {
              transform: rotate(360deg);
            }


            .dropdown-link .a_text {
              background-color: transparent;
              color: #666666;
              padding: 1.2rem 0.6rem;
              line-height: 1;
            }

            .dropdown.second .dropdown-link > a {
              // padding: 1.2rem 2rem 1.2rem 3rem;
              padding: 1rem;
              line-height: 1;
            }

            .dropdown.second .dropdown.second .dropdown-link > a {
              // padding: 1.2rem 2rem 1.2rem 4rem;
              padding: 1rem;
              color: #666666;
              line-height: 1;
            }

            .dropdown-link:not(:nth-last-child(2)) {
              border-bottom: none;
              list-style: none;
            }

            .icon_wrapper {
              width: 3rem;
              // border: 1px solid red;
              // padding-top: 1.2rem;
              position: relative;
              text-align: center;
            }

            .arrow {
              z-index: 1;
              background-color: transparent;
              left: 10%;
              transform: scale(1.1) rotate(45deg);
              transition: 0.5s;
            }

            .nav-link:hover .arrow {
              background-color: #fff;
            }

            .dropdown .dropdown .arrow {
              display: none;
            }

            .dropdown-link:hover > a {
              /* background-color: rgba(0,0,0,0.3);
                        */
              color: #3da676;
            }

            .dropdown-link:first-child:hover ~ .arrow {
              background-color: #fff;
            }

            .nav-link > a > i {
              font-size: 1.1rem;
              transform: rotate(-90deg);
              transition: 0.7s;
            }

            .dropdown i {
              font-size: 1rem;
              transition: 0.7s;
            }

          }
        `}
      </style>

      <div className="nav-btn">
        <div className="nav-links">
          <ul>
            <li className="nav-link m_sb">
            <Link href={'/'} >
              <a className="a_text">

                {/* Home */}
                {t("home")}

                </a>
              </Link>
           
            </li>
            <li className="nav-link">
              <Link href={'/about'} >
                <a className="a_text">
                  {/* About */}
                  {t("about")}
                  </a>
              </Link>

            </li>


            <li className="nav-link">
              <Link href="http://library.ssbu.edu.mm/" prefetch={false} target={'_bank'}>
                <a>
                   {/* <div className="nav_icon">
                      <School color={'#fff'} width={15} />
                   </div> */}
                     {/* Library */}
                     {t("library")}
                  </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/events-notice" prefetch={false}>
                <a>
                  {/* <div className="nav_icon">
                     <InfoIcon color={'#fff'} width={15} />
                  </div> */}
                  {/* Event & Notice  */}
                  {t("event-&-notice")}
                  </a>
              </Link>
            </li>

            <li className="nav-link">
              <Link href="/contact" prefetch={false}>
                <a>
                  {/* Contact */}
                  {t("contact")}
                   </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/support-labc" prefetch={false}>
                <a>
                  {/* Support SSBU */}
                  {t("support-labc")}
                   </a>
              </Link>
            </li>
        
            <li className="nav-link m_sb">
              <Link href="/search" prefetch={false} target={'_bank'}>
                <a> 
                  {/* <div className="nav_icon">
                  <StudentIcon color={'#fff'} width={16} />
                  </div> */}
                
                   {/* Search */}
                   {t("search")}
             
                  </a>
              </Link>
            </li>

    
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
