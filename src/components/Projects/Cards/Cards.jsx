import React from 'react'
import { projects } from '../../../data/projects'

// STYLED COMPONENTS
import {
  TopCard,
  BottomCard
} from './style'

// COMPONENTS
import { MainCard } from '../MainCard/MainCard.jsx'

export const Cards = () => {
  return (
    <>
      <TopCard></TopCard>
      <MainCard project={projects[0]}/>
      <BottomCard></BottomCard>
    </>
  )
}
