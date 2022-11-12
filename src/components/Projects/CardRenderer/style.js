import styled from 'styled-components'
import Lottie from 'lottie-react'

export const Spinner = styled(Lottie)`
  height: 100px;
  width: 100px;
`

export const CustomLink = styled.a`
  all: unset; 
  font-size: 4rem; 
  font-family: 'poppins-semibold', sans-serif; 
  opacity: 0; 

  &:hover {
    text-decoration: underline; 
    cursor: pointer; 
  }
`

export const Image = styled.img`
  position: absolute;
  opacity: 1;
  object-fit: fit; 
  aspect-ratio: 16/9; 
  height: 100%;
  width: 100%;
  z-index: -1;
  pointer-events: none;
`
