import React from 'react'
import "../../../../styles/Home.css"
const Header = () => {
  return (
    <div>
         <header>
            <nav> 
                <a href={'/'} className="logo">
                <img src={'https://ssbu-media.sgp1.digitaloceanspaces.com/media-ssbu.png'} />
                </a>  
            </nav>
          </header>
    </div>
  )
}

export default Header
