import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/Header.css'

const NavBar = () => {
    return (
        <>
        <div id="navBar">
          <Nav.Item>
            <Nav.Link><Link to="/" className="fa-home">Home</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/bio" className="fa-bio">Bio</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/portfolio" className="fa-portfolio">Portfolio</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to ="/contact" className="fa-contact">Contact</Link></Nav.Link>
           </Nav.Item>
          </div>
       </>
    )
}

export default NavBar