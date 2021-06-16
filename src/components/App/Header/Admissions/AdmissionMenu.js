import React from 'react';

import Link from 'next/link';
import AdmissionMenu_Data from './Admission_Data';

const AdmissionMenu = ({ isVisible }) => {
  return (
    <div>
      <div className={`${isVisible ? 'd-block ad-hover active' : 'd-hide'} with-arrow`}>
        <div className="a-wrapper">
          <ul>
            {AdmissionMenu_Data.map((all_data, index) => {
              return (
                <li key={index}>
                  {all_data.data.map((content, index) => {
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmissionMenu;
