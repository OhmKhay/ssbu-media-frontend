import React, { useState, useEffect, Fragment } from 'react';
import Fade from 'react-reveal/Fade'
import AboutMenu_Data from './about_Data';

import Link from 'next/link';

const AboutMenu = ({ isVisible }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <style jsx>
        
        {`
     
        .c-hover {
          width: 1028px;
          height: auto;
          position: fixed;
          top: 28px;
          left: calc(50% - 36rem);
        }
        .a_wrapper ul li {
        
            list-style: none;
            cursor: pointer;
        }

         p {
          text-align: left;
        }

       
       
      `}
      </style>
       {/* <CSSTransition in={isVisible} timeout={500} classNames="fade" unmountOnExit> */}
      <div
        className={`${isVisible ? 'd-block c-hover' : 'd-hide'}`}
        // onMouseEnter={e => setIsHovering()}
        // onMouseLeave={e => handleMouseHover()}
      >
        {/* <i className='with-arrow'></i> */}
      {isVisible&&(
          <Fade>
          <div className="a_wrapper">
       
            <ul>
              {AboutMenu_Data.map((all_data, index) => {
                return (
                  <li key={index}>
                    {!loading &&
                      all_data.data.map((content, index) => {
                        if (!content.child) return false;
                        // query: { slug: post.slug }
                        const c_child = content.child.map((t, index) => {

                        

                          const CheckWithQuery = t.q ?{ q: t.slug }:'';

                          return(
                            
                              <Link
                               href={{
                                pathname: `/${content.slug}/${t.slug}`,
                                query: CheckWithQuery
                              }} 
                       
                           
                              prefetch={false}
                               key={index}>
                                <a>
                                  <p style={{
                                    textAlign: 'left',
                                
                                  }}>{t.title}</p>
                                </a>
                              </Link>
                          )
                        });
                        return (
                          <div key={index}>
                            <Link href={`/${content.slug}`} prefetch={false}>
                              <a>
                                <span>{content.title}</span>
                              </a>
                            </Link>
                            <div>{c_child}</div>
                          </div>
                        );
                      })}
                  </li>
                );
              })}
            </ul>
        
          </div>
  
          </Fade>
      )}
      </div>
    {/* </CSSTransition> */}
    </Fragment>
  );
};

export default AboutMenu;
