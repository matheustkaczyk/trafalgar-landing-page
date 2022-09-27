import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import Leading from './pages/Leading';
import Services from './pages/Services';

import tkaczyk from './assets/tkaczyk.jpg';

const data = [
  {
    img: tkaczyk,
    alt: 'tkaczyk',
    name: 'Matheus Tkaczyk Ribeiro',
    subtitle: 'Software Developer',
    text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.'
  },
  {
    img: tkaczyk,
    alt: 'tkaczyk',
    name: 'Matheus Tkaczyk Ribeiro',
    subtitle: 'Software Developer',
    text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.'
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Leading />
    </div>
  )
}

export default App
