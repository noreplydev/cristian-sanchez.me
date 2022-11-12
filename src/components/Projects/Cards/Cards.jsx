import React from 'react'
import { projects } from '../../../data/projects'

// STYLED COMPONENTS
import {
  Card,
  Title,
  Desc,
  Tool
} from './style'

// COMPONENTS
import { MainCard } from '../MainCard/MainCard.jsx'

export const Cards = () => {
  return (
    <>
      <Card top>
        <Title>{projects[1].name}</Title>
        <Desc>{projects[1].description}</Desc>
        <Tool>{projects[1].tools}</Tool>
      </Card>

      <Card>
        <Title>{projects[2].name}</Title>
        <Desc>{projects[2].description}</Desc>
        <Tool>{projects[2].tools}</Tool>
      </Card>

      <MainCard project={projects[0]}/>
    </>
  )
}
