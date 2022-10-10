import React from 'react'
import SlotMachine from './slot_machine/SlotMachine'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SlotMachine />} />
        <Route path="game/index" element={<SlotMachine />} />
      </Routes>
      
    </Router>
  )
}

export default App
