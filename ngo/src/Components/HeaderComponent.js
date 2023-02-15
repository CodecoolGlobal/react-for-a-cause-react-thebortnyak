import logo from "../images/logo.png"
import hamburger from '../images/hamb.png'
import close from '../images/close.png'

import { useState } from 'react'

function Header() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () =>{
      setIsVisible((s)=>!s)
    }
  
    return (
      <nav>
        <img src={ logo } alt="united nations logo"/>
        {
        !isVisible ? 
        <>
          <ul aria-hidden="true">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <img src={close} alt='close icon' aria-hidden="true"/>
          <img src={hamburger} alt='menu icon' onClick={toggleMenu}/>
        </> :
        <>
          <ul className="link-onscreen">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
          <img src={close} alt='close icon' onClick={toggleMenu} className="close-on-screen"/>
          <img
          src={hamburger}
          alt='menu icon'
          className="hamburger-offscreen"
          aria-hidden="true"/>
        </>
        }
      </nav>
    )
  }
  
  export default Header;