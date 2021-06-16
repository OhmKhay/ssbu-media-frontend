import React, { useState, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import AcademicMenu from './AcademicMenu';
import Link from '../Link';


const Academic = ({ scrollState, className, Main_Nav_LI }) => {
  const [isVisible, setVisible] = useState(false);
  const { t } = useTranslation('header');
  const displayMenu = () => {
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };

  return (
     <Fragment>
       <style jsx>{`
         .d_block {
           display: block;
           position: relative;
         }
         
       `}

       </style>
           <div className="d_block" onMouseLeave={hideMenu}>
      <Main_Nav_LI
        //      onClick={() => setVisible(!isVisible)}
      >
        {isVisible && (
     
          <Fade>
             <i className="with-arrow" />
          </Fade>
       
        )}
        <Link href="/academic" activeClassName="active">
          <a
            onMouseOver={displayMenu}
            className={scrollState === 'top' && className !== 'with-bg' ? 'c-white nav_link' : 'c-black nav_link'}
            style={{ color: isVisible && '#007bff' }}>
            {/* Academic */}
            {t("academic")}
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

      <AcademicMenu isVisible={isVisible} />
     </div>
     </Fragment>
  );
};

export default Academic;
