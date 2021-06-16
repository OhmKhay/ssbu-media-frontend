import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import "./style.css";

const RelateMenu = ({ datas = [] }) => {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(false);
    }, []);
    const router = useRouter();

    // console.log("router.pathname", router.pathname)
    return (
        <>
       
           <div className="menu_wrapper">
           <ul>
           {datas.map((all_data, index) => {
                return (
                  <li key={index} >
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
                                <a
                                 className={router.pathname == `/${content.slug}/${t.slug}` ? "Ractive" : ""}
                                >

                                  <p style={{
                                    textAlign: 'left',
                                
                                  }}>{t.title}</p>
                                </a>
                              </Link>
                          )
                        });
                        return (
                          <div key={index} >
                            <Link href={`/${content.slug}`} prefetch={false}>
                              <a className={router.pathname == `/${content.slug}` ? "Ractive" : "no"} >
                                <span className={'main_title'}>{content.title}</span>
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
        </>
    )
}

export default RelateMenu;
