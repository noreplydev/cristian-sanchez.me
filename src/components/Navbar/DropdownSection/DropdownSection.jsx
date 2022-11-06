import React, { useEffect, useState } from 'react'

import {
  DropdownWrapper,
  Dropdown,
  SectionWrapper,
  Section,
  Arrow,
  SubSection
} from './style'

import arrow from '../../../assets/images/navbar/down-arrow.svg'
import whiteArrow from '../../../assets/images/navbar/down-arrow-white.svg'

export const DropdownSection = ({ section }) => {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const dropdown = document.querySelector('#dropdown')
    dropdown.addEventListener('mouseenter', () => setHovered(prev => !prev))
    dropdown.addEventListener('mouseleave', () => setHovered(prev => !prev))

    return () => {
      dropdown.removeEventListener('mouseover', () => setHovered(prev => !prev))
      dropdown.removeEventListener('mouseleave', () => setHovered(prev => !prev))
    }
  }, [])

  return (
    <DropdownWrapper id='dropdown'>
      <SectionWrapper>
        <Section>{section.name}</Section>
        {
          hovered
            ? <Arrow src={whiteArrow} alt="arrow"/>
            : <Arrow src={arrow} alt="arrow"/>
        }
      </SectionWrapper>
      <Dropdown>
        {
          section.sections.map(subsection => {
            return (
              <SubSection key={subsection.name} to={subsection.path}>{subsection.name}</SubSection>
            )
          })
        }
      </Dropdown>
    </DropdownWrapper>
  )
}
