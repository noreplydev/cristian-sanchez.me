import React from 'react'
import { projects } from '../../../data/projects'

// COMPONENTS
import { Card } from '../Card/Card.jsx'
import { MainCard } from '../MainCard/MainCard.jsx'

export const Cards = () => {
  return (
    <>
      <Card project={projects[1]}/>
      <Card project={projects[2]}/>
      <MainCard project={projects[0]}/>
    </>
  )
}
