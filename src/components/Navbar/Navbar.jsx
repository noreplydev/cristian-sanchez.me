import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// STYLED COMPONENTS
import {
  Nav,
  Logo,
  Sections,
  CustomLink
} from './style'

// COMPONENTS
import { DropdownSection } from './DropdownSection/DropdownSection.jsx'

import { sections } from '../../data/sections'
import logo from '../../assets/images/favicon.svg'

export const Navbar = () => {
  return (
    <Nav>
      <Link to={'/'}>
        <Logo src={logo} alt='Cristian Sánchez blue logo'/>
      </Link>
      <Sections>
        {
          sections.map(section => {
            if (section.name !== 'Documentation') {
              return section.path === useLocation().pathname
                ? <CustomLink key={section.name} to={section.path} active="false">{section.name}</CustomLink>
                : <CustomLink key={section.name} to={section.path}>{section.name}</CustomLink>
            }

            return <DropdownSection section={section}/>
          })
        }
      </Sections>
    </Nav>
  )
}
