import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';


import AcademicNav_Data from './Academic_Data';

const AcademicMenu = ({ isVisible }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>

    <style jsx>{`
    
    .ac_hover {
      position: relative;
      width: 1000px;
      height: auto;
      position: fixed;
      top: 28px;
      left: calc(50% - 30rem);
    }

    .a_wrapper ul li {
        
      list-style: none;
      cursor: pointer;
    }

    .a_wrapper p {
       text-align: left;
    }

    
    `}

    </style>
      <div className={`${isVisible ? 'd_block ac_hover' : 'd_hide'}`}>
        {isVisible&&(
           <Fade>
           <div className="a_wrapper">
            <ul>
              {AcademicNav_Data.map((all_data, index) => {
                return (
                  <li key={index}>
                    {!loading &&
                      all_data.data.map((content, index) => {
                        if (!content.child) return false;
                        const c_child = content.child.map((t, index) => (
                          <Link href={`/${content.slug}/${t.slug}`} prefetch={false} key={index}>
                            <a>
                              <p>{t.title}</p>
                            </a>
                          </Link>
                        ));
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
  
              <li>
                <span> Research </span>
              </li>
            </ul>
          </div>
           </Fade>
        )}
      </div>
    </>
  );
};

export default AcademicMenu;
