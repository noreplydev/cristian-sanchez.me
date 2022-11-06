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

export const Navbar = () => {
  return (
    <Nav>
      <Link to={'/'}>
      </Link>
      <Sections>
        {
          sections.map(section => {
            if (section.name !== 'Docs') {
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
