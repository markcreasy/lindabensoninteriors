import * as React from 'react'
import { Link } from 'gatsby'
import headerImg from '../images/LindaBensonHeader.png'
import './header.css'

const Header = ({page}) => {

  const currentPage = (listItem) => {
    console.log(page);
    if(page === listItem){
      return "active"
    }else{
      return "";
    }
  }

  return(
    <div class="site-header">
      <img src={headerImg} alt="Linda Benson Interiors"/>
      <nav>
        <ul>
          <li ><Link to="/" class={currentPage('home')}>HOME</Link></li>
          <li ><Link to="/about" class={currentPage('about')}>ABOUT LINDA</Link></li>
          <li ><Link to="/portfolio" class={currentPage('portfolio')}>PORTFOLIO</Link></li>
          <li ><Link to="/press" class={currentPage('press')}>PRESS</Link></li>
          <li ><Link to="/contact" class={currentPage('contact')}>CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
