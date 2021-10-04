import React from 'react'
import './css/Header.css'
import IMG_3364 from '../Images/IMG_3364.jpeg'

const Header = () => {
    return (
      <div className="Header">
       <div className="title">
       <img
          className="treeImg"
          style={{maxWidth: "4em", height: "auto"}}
          src={IMG_3364}
          alt="digital tree"
        />
         Nic Babineaux'
        </div>
        <div className="subTitle">Portfolio Site</div>
      </div>
    )
}

export default Header

