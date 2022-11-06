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
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/docs" element={<div>docs</div>} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </BrowserRouter>
  )
}
