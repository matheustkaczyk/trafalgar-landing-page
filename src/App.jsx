import './App.scss'

import Header from './components/Header'
import Carousel from './components/Carousel'

import Home from './pages/Home'
import Leading from './pages/Leading'
import Services from './pages/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Leading />
      <Carousel>
        
      </Carousel>
    </div>
  )
}

export default App
