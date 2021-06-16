import React, { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import AboutMenu from './AboutMenu';
import Link from '../Link';
import Fade from 'react-reveal/Fade';


const About = ({ scrollState, className, Main_Nav_LI }) => {
  const [isVisible, setVisible] = useState(false);

  const displayMenu = () => {
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };

  const { t } = useTranslation('header');

  const DisplayBlock_C = styled('div')`
      display: block;
      position: relative;
  `;

  return (
  <Fragment>

      <DisplayBlock_C  onMouseLeave={hideMenu}>
      <Main_Nav_LI
       
        //      onClick={() => setVisible(!isVisible)}
      >
        {isVisible&& (
     
           <Fade>
              <i className="with-arrow" />
           </Fade>
        
        )}
        <Link href="/about" activeClassName="active">
          <a
            onMouseOver={displayMenu}
            className={scrollState === 'top' && className !== 'with-bg' ? 'c-white nav_link' : 'c-black nav_link'}
            style={{ color: isVisible && '#007bff' }}>
            {/* About */}
            {t("about")}
            <i
              className={`${
                scrollState === 'top' && className !== 'with-bg'
                  ? 'arrow-icon-white down c-white'
                  : 'arrow-icon-black down c-black'
              } ${isVisible && 'arrow-icon-#007bff down'} `}
            />
          </a>
        </Link>
      </Main_Nav_LI>

      {isVisible&&<AboutMenu isVisible={isVisible} />}
    </DisplayBlock_C>
  </Fragment>
  );
};

export default About;
