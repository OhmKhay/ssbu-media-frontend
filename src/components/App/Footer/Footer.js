import Link from 'next/link';
import styled from '@emotion/styled';
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ORG_NAME } from '../../../../lib/constants';
import withPure from '../../hoc/pure';
import Container from '../../container';
import { FacebookIcon, LineIcon, TwitterIcon, ViberIcon } from '../../Icons';
import Spinner from '../../../ui/Spinner';



export default withPure(() => {

  const { t } = useTranslation('footer');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setLoading(false);
  }, []);

  const Grid = styled('div')`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-row-gap: 2rem;
      @media screen and (max-width: 800px) {
      
         grid-template-columns: 1fr 1fr;
        

        h4,
        p {
          margin: 0;
        }

        a {
          display: block;
          padding-top: 0px;
          padding-bottom: 0px;
        }
      }

  `;
  if(loading) {
    return <Spinner />
  }else {
    return(
      <Container wide dark_blue>
        <Container>
          <footer>
            <style jsx>
              {`
  
              .f-logo {
                width: 9.7rem;
              }
  
              .icon {
                padding: 0.6rem;
                display: -webkit-inline-box;
                display: -webkit-inline-flex;
                display: -ms-inline-flexbox;
               
              }
                .grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr;
                  grid-row-gap: 2rem;
                }
                .f5 div {
               
                  padding: 0rem 3.8rem;
                  // border-right: 1px solid #444;
                }
  
                footer {
                  padding: 2rem 0 4rem;
                  min-height: 400px;
                }
                a,
                p,
                .copyright {
                  color: rgba(255,255,255,0.75);
                }
                h4 a {
                  color: rgba(255,255,255,0.75);
                }
                a:hover {
                  color: #fff;
                }
                .copyright {
                  margin-top: 3rem;
                }
                .copyright div {
                  margin-top: 0.5rem;
                }
                h4 {
                  margin-bottom: 0.75rem;
                  color: rgba(255,255,255,0.75);
                  font-weight: 600;
                  font-family: "GHK Muse";
                  
                }
                p {
                  margin-top: 0;
                  margin-bottom: 0.25rem;
                }
                @media only screen and (max-width: 600px) {
                  .social-icons .icon {
                    padding: 0.2rem;
                    display: flex;
                  }
                  .f-logo {
                    width: 6rem;
                    display: block;
                  }
      
                }
  
              
                @media screen and (max-width: 800px) {
                  .grid {
                    grid-template-columns: 1fr 1fr;
                  }
                 
                  .f-logo {
                    width: 8rem;
                  }
                  h4,
                  p {
                    margin: 0;
                  }
    
                  a {
                    display: block;
                    padding-top: 0px;
                    padding-bottom: 0px;
                  }
                 
  
                }
              
                .f5 div {
               
                  padding: 0rem 1rem;
                  // border-right: 1px solid #444;
                }
                .c_right {
                  padding: 0rem 1rem;
                }
  
                .social-icons {
                  display: inline-flex;
                  color: #ffff;
                }
               
              `}
            </style>
            <Grid className="f5">
              <div>
                <img className={'f-logo'} src={'../../static/labc-logo-b-w.png'} />
                <div className="social-icons">
                  <Link href={'/https://www.facebook.com/labccollegeloilem'}>
                   <a target="_blank">
                    <span className={'icon'}>
                       <FacebookIcon width={17} />
                  </span>
                   </a>
                  </Link>
  
                  <Link href={'/'}>
                   <a>
                   <span className={'icon'}>
                       <TwitterIcon width={15} />
                  </span>
                   </a>
                  </Link>
  
                   <Link href={'/'}>
                    <a>
                    <span className={'icon'}>
                       <ViberIcon width={17} />
                   </span>
                    </a>
                   </Link>
  
                   <Link href={'/'}>
                    <a>
                      <span className={'icon'}>
                        <LineIcon width={17} />
                      </span>
  
                    </a>
                   </Link>
                
                </div>
              </div>
              
              <div>
                <h4 className="fw5"> 
                {/* Media  */}
                {t("media")}
                </h4>
                <p>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    Photo Gallery
                  </a>
                </p>
                <p>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    Video
                  </a>
                </p>
                <p>
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    Dhamma
                  </a>
                </p>
                <p>
                  <Link href="#" prefetch={false}>
                    <a> Buddha </a>
                  </Link>
                </p>
              </div>
              <div>
                <h4 className="fw5">
                   {/* Contact {ORG_NAME} */}
                   {t("contact-labc")}
                   </h4>
                <p>
                  <a href={`https://www.google.com/maps/place/Loilem+%C4%80nanda+Buddhist+College/@20.9248732,97.5686142,17z/data=!4m12!1m6!3m5!1s0x30ce09091482a7d7:0xdb733b62e4e4f045!2sLoilem+%C4%80nanda+Buddhist+College!8m2!3d20.9248732!4d97.5686142!3m4!1s0x30ce09091482a7d7:0xdb733b62e4e4f045!8m2!3d20.9248732!4d97.5686142`} rel="noopener noreferrer" target="_blank">
                    Loilem Ānanda Buddhist College
                    <br />
                    Bohdi Road, Loilem,
                    <br />
                    Shan State, Myanmar.
                    <br />
                    Tel: +959447334704
                
                    <br />
                    Email: labc.info.2021@gmail.com
                  </a>
                </p>
              </div>
    
              <div>
                <h4 className="fw5"> 
                {/* Quick Links */}
             {    t("quick-links")}
                 </h4>
            
  
                <p>
                  <a
                    href={`https://www.facebook.com/labccollegeloilem`}
                    rel="noopener noreferrer"
                    target="_blank">
                    Facebook
                  </a>
                </p>
                <p>
                  <a
                    href={`https://www.youtube.com/channel/UCMZno0K9zYm-kx6aFuPrBtA`}
                    rel="noopener noreferrer"
                    target="_blank">
                    Youtube
                  </a>
                </p>
                <p>
                  <a
                    href={`https://invite.viber.com/?g2=AQBONfBEMVTXfExSqkF48XS%2F5isaiaf27vyXlhYx0r0givaCDFrBVXq7mopcaVkk&lang=en`}
                    rel="noopener noreferrer"
                    target="_blank">
                    Viber
                  </a>
                </p>
              </div>
              
            </Grid>
            <div className="copyright f6">
              {/* <a
                href={`${PLATFORM_URL}/home?utm_source=next-site&utm_medium=footer&utm_campaign=next-website`}
                title="Go to the Vercel website"
                rel="noopener noreferrer"
                target="_blank"
                aria-label={ORG_NAME}
              >
                <Logo color="#000" />
              </a> */}
              <div className="c_right">
                Copyright © {`${new Date().getFullYear()}`} {ORG_NAME}. All rights reserved.
              </div>
            </div>
          </footer>
        </Container>
      </Container>
    )
  }

});
