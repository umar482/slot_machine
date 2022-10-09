import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SlotMachine from './slot_machine/SlotMachine'
import Home from './Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SlotMachine />} />
        <Route path="/users/sign_in" element={<SignIn />} />
        <Route path="/users/new" element={<SignUp />} />
        <Route path="game/index" element={<SlotMachine />} />
      </Routes>
      
    </Router>
  )
}

export default App
