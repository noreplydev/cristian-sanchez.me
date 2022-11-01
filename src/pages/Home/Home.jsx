import React from 'react'
import background from '../../assets/images/background.svg'

// STYLED COMPONENTS
import {
  Image,
  MainSection,
  Title,
  Subtitle
} from './style'

// COMPONENTS
import { Buttons } from '../../components/Buttons/Buttons.jsx'

export const Home = () => {
  return (
    <>
      <Image src={background} alt="background image of the home section" />
      <MainSection>
        <Title>Cristian Sánchez</Title>
        <Subtitle>Frontend Developer</Subtitle>
        <Buttons />
      </MainSection>
    </>
  )
}
