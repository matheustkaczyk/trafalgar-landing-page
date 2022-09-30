import React, { useEffect } from 'react';

import Logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';

const Header = ({ isOpen, handleHamburger }) => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger-menu');
    console.log(hamburger)

    if (isOpen) {
      hamburger.classList.toggle('active');
    } else {
      hamburger.classList.toggle('active');
    }
  }, [isOpen]);

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
      <img className='hamburger-icon' src={hamburger} alt="hamburger" onClick={handleHamburger()} />
      <aside className='hamburger-menu'>
        <h1 onClick={handleHamburger()}>X</h1>
        <ul>
          <li className='home'>Home</li>
          <li>Find a doctor</li>
          <li>Apps</li>
          <li>Testimonials</li>
          <li>About us</li>
        </ul>
      </aside>
    </header>
  )
}

export default Header;
