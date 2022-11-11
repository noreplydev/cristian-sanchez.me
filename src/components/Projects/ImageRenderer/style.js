import styled from 'styled-components'
import Lottie from 'lottie-react'

export const Spinner = styled(Lottie)`
  height: 100px;
  width: 100px;
`
export const Image = styled.img`
  position: absolute;
  opacity: 1;
  object-fit: cover; 
  height: 100%;
  width: 100%;
  z-index: -1;
  pointer-events: none;
`
