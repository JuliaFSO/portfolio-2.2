import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Routes from './Routes'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  )
}

export default App
