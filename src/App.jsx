import { useState } from 'react';

import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';

import Home from './pages/Home';
import Leading from './pages/Leading';
import Services from './pages/Services';
import Customers from './pages/Customers';
import Articles from './pages/Articles';
import Footer from './components/Footer';

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <div className="App">
      <Header isOpen={hamburgerMenu} handleHamburger={() => handleHamburgerMenu} />
      <div className='body-wrapper'>
        <div className='body-inner-wrapper'>
          <Home />
          <Services />
          <Leading />
          <Customers />
          <Articles />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
