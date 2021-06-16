import React, { useState } from 'react';

import AdmissionsMenu from './AdmissionMenu';
import Link from '../Link';

const Admissions = ({ scrollState, className }) => {
  const [isVisible, setVisible] = useState(false);
  const displayMenu = () => {
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };

  return (
    <div className="d-block" onMouseLeave={hideMenu}>
      <li
        className={`m-li ${isVisible && 'with-arrow'}`}
        //      onClick={() => setVisible(!isVisible)}
      >
        <Link href="/admissions" activeClassName="active" prefetch={false}>
          <a
            //     onMouseOver={displayMenu}
            className={scrollState === 'top' && className !== 'with-bg' ? 'c-white' : 'c-black'}
            style={{ color: isVisible ? '#F39821' : null }}>
            Admissions
            <i
              className={`${scrollState === 'top' && className !== 'with-bg' ? ' down c-white' : 'down c-black'} ${
                isVisible && 'down'
              } `}
            />
          </a>
        </Link>
      </li>
      {/* <div className="a-wrapper"> */}
      <AdmissionsMenu isVisible={isVisible} />
      {/* </div> */}
    </div>
  );
};

export default Admissions;
