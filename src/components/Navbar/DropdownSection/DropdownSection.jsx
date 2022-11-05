import React, { useEffect, useState } from 'react'

import {
  DropdownWrapper,
  Dropdown,
  Section,
  SubSection
} from './style'

export const DropdownSection = ({ section }) => {
  return (
    <DropdownWrapper>
      <Section>{section.name}</Section>
      <Dropdown id='dropdown'>
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
