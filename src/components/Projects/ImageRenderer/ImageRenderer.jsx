import React, { useEffect, useState } from 'react'
import spinner from '../../../assets/json/spinner.json'

// styled components
import {
  Image,
  Spinner
} from './style'

export const ImageRenderer = ({ image }) => {
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
      <Image src={image} alt='Passlock project dashboard image' loading='eager' onLoad={() => setLoading(prev => !prev)}/>
    </>
  )
}
