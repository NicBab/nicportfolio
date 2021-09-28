import React from 'react'
import SocialIcons from './SocialIcons'
import './css/Footer.css'

const Footer = () => {
    return (
        <>
          <div id="foot">
            <div className="footName">@Nic Babineaux Portfolio 2021</div>
          </div>
          <div id="footIcons"><SocialIcons/></div>
          <div className="stellar">a Stellar Innovation Development</div>
        </>
    )
}

export default Footer
