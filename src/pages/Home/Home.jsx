import React, { useEffect, useState } from 'react'
import background from '../../assets/images/background.svg'
import Lottie from 'lottie-react'

// STYLED COMPONENTS
import {
  Parent,
  Spinner,
  Image,
  MainSection,
  Title,
  Subtitle
} from './style'

// COMPONENTS
import { Buttons } from '../../components/Home/Buttons/Buttons.jsx'
import spinner from '../../assets/json/spinner.json'

export const Home = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Parent>
      {
        loaded
          ? <>
              <MainSection>
                <Title>Cristian Sánchez</Title>
                <Subtitle>Frontend Developer</Subtitle>
                <Buttons />
              </MainSection>
            </>
          : <Spinner animationData={spinner} autoplay loop />
      }
      <Image src={background} alt="background image of the home section" loading='eager' onLoad={() => setLoaded(prev => !prev)}/>
    </Parent>
  )
}
