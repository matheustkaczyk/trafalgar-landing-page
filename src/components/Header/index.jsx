import React from 'react';

import Logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';

const Header = () => {
  return(
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li className='home'>Home</li>
          <li>Find a doctor</li>
          <li>Apps</li>
          <li>Testimonials</li>
          <li>About us</li>
        </ul>
      </nav>
      <img className='hamburger-icon' src={hamburger} alt="hamburger" />
    </header>
  )
}

export default Header;
