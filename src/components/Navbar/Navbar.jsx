import React from 'react'
import { Nav, Logo, Sections, CustomLink } from './style'
import { sections } from '../../data/sections'
import { Link, useLocation } from 'react-router-dom'

// Assets
import logo from '../../assets/images/favicon.svg'

export const Navbar = () => {
  return (
    <Nav>
      <Link to={'/'}>
        <Logo src={logo} alt='Cristian Sánchez blue logo'/>
      </Link>
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
