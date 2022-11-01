import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './pages/Home/Home.jsx'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<div>projects</div>} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/*" element={<div>error</div>} />
      </Routes>
    </BrowserRouter>
  )
}
