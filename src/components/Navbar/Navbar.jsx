import React from 'react'
import { Nav, Logo, Sections, CustomLink } from './style'
import { sections } from '../../data/sections'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Nav>
      <Logo to={'/'}></Logo>
      <Sections>
        {
          sections.map(section => (
            section.path === useLocation().pathname
              ? <CustomLink key={section.name} to={section.path} active="false">{section.name}</CustomLink>
              : <CustomLink key={section.name} to={section.path}>{section.name}</CustomLink>
          ))
        }
      </Sections>
    </Nav>
  )
}
