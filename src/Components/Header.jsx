import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <>
        <div>
            <Link to="/" >Home</Link>
        </div>
         <div>
            <Link to="/bio">Bio</Link>
        </div>
         <div>
            <Link to="/contact">Contact</Link>
        </div>
      </>
    )
}

export default Header
