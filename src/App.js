import React from 'react'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import {BrowserRouter,Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Menu/>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App

const Home= () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
    </div>
  )
}