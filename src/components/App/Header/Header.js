
import { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import styled from '@emotion/styled';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from './Link';
import { MenuIcon, SearchIcon } from '../../Icons';

// import About from './About';

import LanguageChanger from './LanguageChanger';
import Search from './Search';
import SearchInput from './SearchInput';
import Spinner from '../../../ui/Spinner';

/**
 * nprogress conifg
 */
NProgress.configure({
  showSpinner: false,
});
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.start();

const Header = ({ toggleSideBar, headerColor, className }) => {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const toggleShowSearchBox = (visible) => {
    setShowSearchBox(visible)
  }
  const handleShowSearch = () => {
    toggleShowSearchBox(true);
  }

  const { t } = useTranslation('header');

  const [showLogo, setShowLogo] = useState(false);

   useEffect(() => {
     setShowLogo(true);

   }, []);

   
  useEffect(() => {
    setLoading(false);
  }, []);



  const handleToggleSide = e => {
    e.preventDefault();
    toggleSideBar();
  };

  let nColor = 'white';
  let Color = '#3da676';
 const HeaderRoot = styled('header')`
      height: 64px;
      position: sticky;   
      backdrop-filter: saturate(182%) blur(22px);
      top: 0px;
      z-index: 1000;
 `;
  const HeaderContainer = styled('div')`

    background-color: rgba(255,255,255,0.6);
   
    `;
  const NavRoot = styled('nav')`
  padding: 0.5rem 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: center;
  box-shadow: 0 0 5px rgb(0 0 0 / 6%);
  @media(max-width: 48rem) {
    border-color: #4fc08d transparent #DEDEDE transparent;
    border-style: solid;
    border-width: 6px 0 1px 0;
    padding: 0rem;
  }
  `;

  const Logo = styled('div')`

  margin: 0rem;
  padding: 0rem;
  display: flex;
  width: 200px;
  vertical-align: middle;
   img {
    height: 2.8rem;
    width: 100%;
    cursor: pointer;
    width: auto;
    vertical-align: middle;
   }
   span {
    line-height: 1rem;
   }
  
  `;

  const MainNav = styled('nav')`
    display: inline-block; 
    width: calc(100% - 150px);
    text-align: right;
    
  `;

  const Sub_Nav = styled('ul')`
    display: none;
    @media(max-width:70rem){ 
      display: block;
    }
  `;

  const Hamburger_Menu = styled('div')`
 
  cursor: pointer;
  `;

  const Main_Nav_UL = styled('ul')`
      margin: 0;
      padding: 0;
      flex-grow: 1;
      @media(max-width:70rem){ 
        display: none;
      }
  `;
  const SearchBox = styled('li')`
  display: inline-block; 
  @media(max-width:60rem){ 
    display: none;
  }

  `;

  const Main_Search_Box = styled('li')`
  display: inline-block;
  margin: 0 16px;
  
  `;

  const Main_Search_Icon = styled('li')`
    display: none;
    margin: 0 16px;

    @media(max-width:50rem){ 
      display: block;
    }
  `;
  const Main_Nav_LI = styled('li')`
  display: inline-block; 
  margin: 0 16px;
  font-family: "GHK Muse";
  &:hover {
        color: $base;
  }
  .active {
        color: #3da676;
  }

  svg {
        vertical-align: middle;
        width: 16px;
        height: 16px;
  }

  a {

    cursor: pointer;
    background-color: transparent !important;
    font-family: 'GHK Muse';
    font-size: 14px !important;
    &:hover {
          color: #3da676;
    }
    .ab-hover {
      display: block;
    }

    span {
      vertical-align: middle;
    }

}
  
  `;
  
  return (
    <>
    {loading&&<Spinner />}
      <style jsx global>
        {`
          /* Make clicks pass-through */
 

          .c-white {
            color: #fff;

          }
          .c-black {
            color: #000;
          }
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${Color};
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${Color}, 0 0 5px ${Color};
            opacity: 1;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
          }
       

        `}
      </style>
      
      <HeaderRoot>
      <HeaderContainer>
          <NavRoot>
          <Logo>
              <Link href="/">
                <a>
               
                    <img
                      style={{ display: `${showLogo?'block':'none'}`}}
                      src={`../../../static/labc-logo-${router.locale}.png`}
                      alt="logo"
                    />

                    

                
                </a>
              </Link>
       </Logo>

     
            <MainNav >
             

                <Main_Nav_UL>

             
                 <SearchBox>
                 <SearchInput  />
                 </SearchBox>
            
                <Main_Nav_LI>
                  <Link  href="/" activeClassName="active">
                  <a
                     
                      className={'c-black'}>
                      {/* Admissions */}
                      {t("home")}
                    </a>
                  </Link>
                  </Main_Nav_LI>

                  {/* <About Main_Nav_LI={Main_Nav_LI&&Main_Nav_LI}/> */}

                  {/* <Admissions scrollState={scrollState} className={className} /> */}
                  <Main_Nav_LI>
                  <Link  href="/about" activeClassName="active">
                  <a
                     
                    
                      className={'c-black'}>
                      {t("about")}
                    </a>
                  </Link>
                  </Main_Nav_LI>

                  <Main_Nav_LI>
                     <Link  href="/course" activeClassName="active">
                       <a
                        className={'c-black nav_link'}>
                         {t("course")}
                       </a>
                     </Link>
                  </Main_Nav_LI>

                  <Main_Nav_LI>
                    <Link href="/events-notice" activeClassName="active">
                      <a
                        className={'c-black nav_link'}>
                        {/* Events &amp; Notice */}
                        {t("event-&-notice")}
                      </a>
                    </Link>
                  </Main_Nav_LI>


                  <Main_Nav_LI>
                    <Link href="/support-labc" activeClassName="active">
                      <a
                        className={'c-black nav_link'}>
                        {/* Support Labc*/}
                        {t("support-labc")}
                      </a>
                    </Link>
                  </Main_Nav_LI>

                  <Main_Nav_LI>
                    <Link href="/contact" activeClassName="active">
                      <a
                        className={'c-black nav_link'}>
                        {/* Contact */}
                        {t("contact")}
                      </a>
                    </Link>
                  </Main_Nav_LI>

                  <Main_Nav_LI>
                    <LanguageChanger className={className} />
                  </Main_Nav_LI>

                  <Main_Search_Icon onClick={handleShowSearch}>
                    <a
                      className={ 'c-black nav_link'}>
                      <SearchIcon fill={'#666'}  />
                    </a>
                  </Main_Search_Icon>
                </Main_Nav_UL>

                {!loading&& <Sub_Nav>
                    <Main_Nav_LI>
                   
                          <LanguageChanger className={className} />
                     
                    </Main_Nav_LI>

                    <Main_Nav_LI>
                      <Hamburger_Menu  onClick={e => handleToggleSide(e)}>
                      <MenuIcon fill={'#666'} />
                      </Hamburger_Menu>
                    </Main_Nav_LI>
                </Sub_Nav>}
            </MainNav>

          </NavRoot>
      </HeaderContainer>
      </HeaderRoot>

      <Search isShow={showSearchBox} toggleShowSearchBox={toggleShowSearchBox} />
    </>
  );
};


export default Header;
