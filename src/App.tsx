import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import { SignIn, SignUp } from '@clerk/nextjs'
import Profile from './pages/Profile'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router> 
  )
}

export default App
