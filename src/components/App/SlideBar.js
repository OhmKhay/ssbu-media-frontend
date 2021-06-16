import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Navigation from './Navigation';
import { CloseIcon } from '../Icons';
import Container from '../../components/container';

const SlideBar = ({ isOpen, sideBarRef, closeSideBar }) => {
  const SideRoot = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem 0rem;
  height: 100%;
  width: 500px;

  transition: margin-left 0.2s ease-in-out;
  font-size: 12px;
  z-index: 99999;
  background-color: #f2f2f2;
  `;
  const CloseIconWrapper = styled('div')`

    
    text-align: right;
    padding: 0 1.2rem;
  
  `;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])

  return (
     <>
   {!loading&&(
     
     <SideRoot ref={sideBarRef} style={{ display: `${isOpen ? 'inline-block' : 'none'}` }}>
     <CloseIconWrapper onClick={() => closeSideBar()}>
       <CloseIcon />
     </CloseIconWrapper>
     <Container>
       <Navigation />
     </Container>
   </SideRoot>
   )}
   
     </>
  );
};

export default SlideBar;
