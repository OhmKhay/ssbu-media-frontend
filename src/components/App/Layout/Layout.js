import React from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  children,
  type = 'website',
  image = null,
  title = null,
  description = null,
  path = null,
  keywords = null
}) => {

  const pageTitle = title != null ? title : 'SSBU Media';


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
    
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content="SSBU Media" />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={'https://media.ssbu.edu.mm/' + path} />
        <meta
          property="og:image"
          content={
            image || 'https://ssbu-media.sgp1.digitaloceanspaces.com/eng/ssbu-logo-preview.jpg'
          }
        />
        <meta property="og:image:alt" content={pageTitle || "SSBU Media"} />
        <meta property="og:description" content={description || "SSBU Media"} />


        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
       <Header />
      
        
      
              {children}
     
        
         
      
        
        <Footer />
        
      </>
     
    </>
  );
};

export default Layout;
