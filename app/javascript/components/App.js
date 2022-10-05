import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign_out" element={<SignIn />} />
        
      </Routes>
      
    </Router>
  )
}

export default App