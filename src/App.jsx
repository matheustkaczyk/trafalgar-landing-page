import './App.scss'

import Header from './components/Header'

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
    </div>
  )
}

export default App
