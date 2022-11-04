import React from 'react'

// STYLED COMPONENTS
import { Anchor } from './style.js'

export const CardMenu = ({ project }) => {
  return (
    <div>
        <Anchor href={project.link} target='_blank'>{project.projectName}</Anchor>
    </div>
  )
}
