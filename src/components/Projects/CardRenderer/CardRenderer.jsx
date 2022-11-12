import React, { useEffect, useState } from 'react'
import spinner from '../../../assets/json/spinner.json'

// styled components
import {
  Spinner,
  CustomLink,
  Image
} from './style'

export const CardRenderer = ({ project }) => {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {
        loading
          ? <div>
                <Spinner animationData={spinner} autoplay loop/>
            </div>
          : null
      }
      <div>
        <CustomLink href={project.link} target='_blank'>{project.projectName}</CustomLink>
      </div>
      <Image src={project.image} alt='' loading='eager' onLoad={() => setLoading(prev => !prev)}/>
    </>
  )
}
