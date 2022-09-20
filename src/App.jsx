import './App.scss'

import Header from './components/Header'

import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
    </div>
  )
}

export default App
