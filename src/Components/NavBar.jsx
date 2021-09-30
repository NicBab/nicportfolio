import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './css/NavBar.css'
import IconsHeader from './IconsHeader'

const NavBar = () => {
    return (
      <>
        <div id="navBar">
          <Nav.Item>
            <Nav.Link><Link to="/" className="fa-home">Home</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/about" className="fa-about">About</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/portfolio" className="fa-portfolio">Portfolio</Link></Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link><Link to ="/resume" className="fa-resume">Resume</Link></Nav.Link>
           </Nav.Item>
           <Nav.Item>
            <Nav.Link><Link to ="/contact" className="fa-contact">Contact</Link></Nav.Link>
           </Nav.Item>
           <div className="headIconsSpace">
             <IconsHeader/>
           </div>
         </div>
       </>
    )
}

export default NavBar
