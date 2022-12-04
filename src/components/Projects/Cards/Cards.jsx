import React from 'react'
import { projects } from '../../../data/projects'

// COMPONENTS
import { Card } from '../Card/Card.jsx'
import { MainCard } from '../MainCard/MainCard.jsx'

export const Cards = () => {
  return (
    <>
      <Card project={projects[1]} z={1} row={2}/>
      <Card project={projects[2]} z={2} row={3}/>
      <MainCard project={projects[0]}/>
    </>
  )
}
