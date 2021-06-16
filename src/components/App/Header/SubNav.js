import React from 'react';
import Link from './Link';
import { SearchIcon, LanguageIcon, StudentIcon } from '../../Icons';

const SubNav = ({ scrollState, className }) => {
  return (
    <div className="sub-nav hide-sm">
      <Link href={'/language'}>
        <a className={scrollState === 'top' && className !== 'with-bg' ? 'c-white' : 'c-black'}>
          <span>
            <LanguageIcon fill={scrollState === 'top' && className !== 'with-bg' ? '#fff' : '#666'} /> Language
          </span>
        </a>
      </Link>
      <Link href={'/student'}>
        <a className={scrollState === 'top' && className !== 'with-bg' ? 'c-white' : 'c-black'}>
          <span>
            <StudentIcon fill={scrollState === 'top' && className !== 'with-bg' ? '#fff' : '#666'} /> Student
          </span>
        </a>
      </Link>
      <Link href={'/search'}>
        <a className={scrollState === 'top' && className !== 'with-bg' ? 'c-white' : 'c-black'}>
          <span>
            <SearchIcon fill={scrollState === 'top' && className !== 'with-bg' ? '#fff' : '#666'} />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default SubNav;
