import * as React from 'react'
import { Link } from 'gatsby'
import headerImg from '../images/LindaBensonHeader.png'
import './header.css'

const Header = () => {
  return(
    <div class="site-header">
      <img src={headerImg} alt="Linda Benson Interiors"/>
      <nav>
        <ul>
          <li ><Link to="/index">HOME</Link></li>
          <li ><Link to="/about">ABOUT LINDA</Link></li>
          <li ><Link to="/portfolio">PORTFOLIO</Link></li>
          <li ><Link to="/press">PRESS</Link></li>
          <li ><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
