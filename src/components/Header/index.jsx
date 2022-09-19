import React from 'react';
import Logo from '../../assets/logo.svg';

const Header = () => {
  return(
    <header>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Find a doctor</li>
          <li>Apps</li>
          <li>Testimonials</li>
          <li>About us</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
