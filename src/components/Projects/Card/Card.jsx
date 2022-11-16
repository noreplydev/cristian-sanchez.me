import React from 'react'

// STYLED COMPONENTS
import {
  Parent,
  Title,
  Desc,
  Tool
} from './style'

export const Card = ({ project, z, row }) => {
  return (
    <Parent image={project.image} z={z} row={row}>
      <Tool>{project.tools}</Tool>
      <div>
        <Title href={project.link} target='_blank'>{project.name}</Title>
        <Desc>{project.description}</Desc>
      </div>
    </Parent>
  )
}
