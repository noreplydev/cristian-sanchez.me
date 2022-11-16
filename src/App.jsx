import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style'

// COMPONENTS

import { Navbar } from './components/Navbar/Navbar.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Projects } from './pages/Projects/Projects.jsx'
import { Contact } from './pages/Contact/Contact.jsx'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/docs" element={<div>docs</div>} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
