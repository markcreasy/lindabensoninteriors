import * as React from 'react'
import { Link } from 'gatsby'
import headerImg from '../images/LindaBensonHeader.png'
import './header.css'

const Header = ({page}) => {

  const currentPage = (listItem) => {
    if(page === listItem){
      return "active"
    }else{
      return "";
    }
  }

  return(
    <div className="site-header">
      <img src={headerImg} alt="Linda Benson Interiors"/>
      <nav>
        <ul>
          <li ><Link to="/" className={currentPage('home')}>HOME</Link></li>
          <li ><Link to="/about" className={currentPage('about')}>ABOUT LINDA</Link></li>
          <li ><Link to="/portfolio" className={currentPage('portfolio')}>PORTFOLIO</Link></li>
          <li ><Link to="/press" className={currentPage('press')}>PRESS</Link></li>
          <li ><Link to="/contact" className={currentPage('contact')}>CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
