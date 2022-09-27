import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header';

import Home from './pages/Home';
import Leading from './pages/Leading';
import Services from './pages/Services';
import Customers from './pages/Customers';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Leading />
      <Customers />
    </div>
  )
}

export default App
