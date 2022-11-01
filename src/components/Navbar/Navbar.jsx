import React from 'react'
import { Nav, CustomLink } from './style'
import { sections } from '../../data/sections'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Nav>
      {
        sections.map(section => (
          section.path === useLocation().pathname
            ? <CustomLink key={section.name} to={section.path} active="false">{section.name}</CustomLink>
            : <CustomLink key={section.name} to={section.path}>{section.name}</CustomLink>
        ))
      }
    </Nav>
  )
}
