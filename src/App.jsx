import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Routes from './Routes'

function App() {
  return (
    <Router>
      <div style={{padding: '0px', width: '100%'}}>
        <header>
          <Navbar />
        </header>
        <Routes />
      </div>
    </Router>
  )
}

export default App
