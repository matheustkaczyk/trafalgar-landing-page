import './App.scss'

import Header from './components/Header'

import Home from './pages/Home'
import Leading from './pages/Leading'
import Services from './pages/Services'

import tkaczyk from './assets/tkaczyk.jpg';

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
