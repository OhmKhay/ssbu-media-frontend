import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const Accordion = ({ content, MoreDropDown }) => {
  const [showChildDropdown, setShowChildDropdown] = useState(false);
  const handleShowChildDropdown = () => {
    setShowChildDropdown(!showChildDropdown);
  };
  return (
    <>
      <style jsx>
        {`
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
            background-color: rgba(56, 165, 238, 0.5);
          }

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
            color: #69bde7;
          }

          .btn.transparent,
          .btn.solid:hover {
            background-color: transparent;
            color: #fff;
          }

          .nav-links > ul {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .nav-link {
            position: relative;
          }

          .nav-link > a {
            line-height: 3rem;
            color: #fff;
            padding: 0 0.8rem;
            letter-spacing: 1px;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
            border-bottom: 1px solid #f2f2f2;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            align-items: center;
            justify-content: space-between;
            transition: 0.3s;
          }
          .dropdown-link > a > span {
            padding-top: 1.2rem;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
         
            position: relative;
          }
          .dropdown-link:not(:nth-last-child(2)) {
            border-bottom: 1px solid #efefef;
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

          @media (max-width: 920px) {
            .hamburger-menu-container {
              display: flex;
            }

    

            .nav-btn {
              position: fixed;
              height: calc(100vh - 3rem);
              top: 3rem;
              left: 0;
              width: 100%;
              /* background-color: #69bde7; */
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

            .nav-link > a {
              line-height: 1;
              padding: 1.6rem 0rem;
            }
            .dropdown-link span {
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
              color: #007bff;
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

            .nav-link:hover > a > i,
            .dropdown-link:hover > a > i {
              transform: rotate(360deg);
            }

            .dropdown-link > a {
              background-color: transparent;
              color: #666666;
              padding: 1rem 1rem;
              line-height: 1;
            }

            .dropdown.second .dropdown-link > a {
     
              line-height: 1;
            }

            .dropdown.second .dropdown.second .dropdown-link > a {
              // padding: 1.2rem 2rem 1.2rem 4rem;
              padding: 1rem;
              line-height: 1;
            }

            .dropdown-link:not(:nth-last-child(2)) {
              border-bottom: none;
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
              color: #007bff;
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

          .collapsed {
            // max-height: 0;
            display: none;
            // transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
          }

          .c_icon_wrapper: {
            width: 3rem;
            border: 1px solid red;
            padding-top: 1.2rem;
            text-align: center;
          }


          .caret-down::after {
            content: '';
            width: 0;
            height: 0;
            top: 1rem;
            left: 1rem;
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
            border-bottom: 5px solid #bbb;
          }
        `}
      </style>
      <li className="dropdown-link">
        <Link href={`/${content.slug}`} prefetch={false}>
          <a className="a_text">{content.title}</a>
        </Link>

        <span className="c_icon_wrapper" onClick={handleShowChildDropdown}>
          <i className={`caret-down ${showChildDropdown ? 'show' : ''}`}></i>
        </span>

        {content.child && (
          <Fade>
            <div className={`dropdown second ${!showChildDropdown ? 'collapsed' : ''}`}>
              <ul>
                <li className="dropdown-link">
                  <Link href={`/${content.slug}`} prefetch={false}>
                    <a>{content.title}</a>
                  </Link>
                </li>
                {MoreDropDown}
                <div className="arrow"></div>
              </ul>
            </div>
          </Fade>
        )}
      </li>
    </>
  );
};

export default Accordion;
