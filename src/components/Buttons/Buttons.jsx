import React from 'react'
import resume from '../../assets/cristian-sanchez-compressed.pdf'

// STYLED COMPONENTS
import {
  ButtonsContainer,
  Anchor,
  ButtonBackground,
  Button,
  ProjectsButton,
  Text
} from './style'

// COMPONENTS
import { Link } from 'react-router-dom'

export const Buttons = () => {
  return (
    <ButtonsContainer>
      <Anchor href={resume} target={'_blank'}>
        <ButtonBackground>
          <Button>
            <Text>Resume</Text>
          </Button>
        </ButtonBackground>
      </Anchor>
      <Link to="/projects" style={{ textDecoration: 'none' }}>
        <ProjectsButton>
          <Text>Projects</Text>
        </ProjectsButton>
      </Link>
    </ButtonsContainer>
  )
}
