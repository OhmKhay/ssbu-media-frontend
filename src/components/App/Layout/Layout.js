import React, { useState, useRef, useEffect } from 'react';

import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SlideBar';

import GlobalStyles from '../../global-styles';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { useClickOutside } from '../../../hooks/useClickOutside';
import Spinner from '../../../ui/Spinner';
import Container from '../../container';
import Alert from './Alert/Alert';

const Layout = ({
  children,
  type = 'website',
  image = null,
  title = null,
  description = null,
  path = null,
  keywords = null
}) => {
  const pageTitle = title != null ? title : 'Loilem Ānanda Buddhist College';
  const windowSize = useWindowSize();

  const isDesktop = windowSize.width >= 1400;
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const sideBarRef = useRef('');
  useClickOutside(sideBarRef, () => {
    if (!isDesktop && isSideBarOpen) {
      setIsSidebarOpen(false);
    }
  });

  useEffect(() => {
    setLoading(false);
  }, []);

   

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "In the spirit of the SSBU's motto: Bhāsaye Jotaye dhammam; to dialogue and uphold the torch of the dhamma, the two venerables have a common ambition; to teach the dhamma to not only the sangha but also to the non-ordained people of various social backgrounds and interests, of different nationalities and regions."} />
        <meta name="keywords" content={ keywords || 'LABC, Education, Loilem, Buddhist, Myanmar'} />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="Loilem Ananda Buddhist College" />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={'https://www.labc.edu.mm/' + path} />
        <meta
          property="og:image"
          content={
            image || 'https://labc.sgp1.digitaloceanspaces.com/labc-logo.jpg'
          }
        />
        <meta property="og:image:alt" content={pageTitle} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@labc" />
        <meta name="twitter:creator" content="@labc" />

        <link
          rel="shortcut icon"
          href="../../static/favicon.ico"
        />
      </Head>

      <>
      {loading&&<Spinner />}

        <Header toggleSideBar={() => setIsSidebarOpen(!isSideBarOpen)} />
     
        <SideBar isOpen={isSideBarOpen} sideBarRef={sideBarRef} closeSideBar={() => setIsSidebarOpen(!isSideBarOpen)} />
     
        <GlobalStyles />


        <main>
           <section>
             <Alert />
              {children}
     
           </section>
         
      
          
        {!loading &&    <Footer />}
   
        </main>
         
        
      </>
     
    </>
  );
};

export default Layout;
