import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { SearchIcon } from '../../Icons';

const SearchInput = ({ value }) => {
  const searchRef = useRef(null);
  const router = useRouter();
  const { t } = useTranslation('header');

  const onSearchClick = () => {
    const inputValue = searchRef.current.value;
    if (inputValue === '') return false;

    router.push(`/search?q=${inputValue}`);
  };

  const RootInput = styled('div')`
    width: 100%;
    position: relative;

  `;

  const IconCon = styled('div')`
    position: absolute;
    top: 6px;
    right: 15px;
  `;
  const SearchInput = styled('div')`
    line-height: 2.2rem;
    width: 100%;
    text-indent: 0em;
    font-size: 14px;
    background-color: rgb(238, 238, 238);
    outline: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 20px;
    font-family: "GHK Muse";
    transition: border-color 0.1s ease 0s;
    &:hover {
      border: 1px solid  #3da676;
    }
    input {
      width: 78%;
      line-height: 30px;
      margin-right: 1rem;
      background-image:none;
      background-color:transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      font-family: "GHK Muse";
      box-shadow: none;
      outline: 0px;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
    }
    &:focus {
      &::placeholder {
        color: #eeeeee;
      }
    }
  `;

  const SearchCon = styled('div')`
    max-width: 570px;
    width: 18rem;
    text-align: center;
    margin: 0 auto;
    @media(max-width:82rem){ 
      width: 100%;
    }
  `;

  const handleEnter = e => {
    if (e.key == 'Enter') {
      onSearchClick();
    }
  };

  return (
    <div>
      <SearchCon>
        <RootInput>
          <IconCon style={{ cursor: 'Pointer' }} onClick={onSearchClick}>
            <SearchIcon />
          </IconCon>

          <SearchInput> 
            <input
              type="text"
              ref={searchRef}
              name={'text'}
              defaultValue={value}
    
              onKeyDown={handleEnter}
              placeholder={t("search")}
            >
            
            </input>
          </SearchInput>
        </RootInput>
      </SearchCon>
    </div>
  );
};

export default SearchInput;
