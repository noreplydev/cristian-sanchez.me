import styled, { keyframes } from 'styled-components'

// Animations
const changeTextGradient = keyframes`
  25% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`

export const Image = styled.img`
  position: absolute;
  top: 60%;
  left: 0;
  transform: translateY(-60%);
  height: auto; 
  width: 100vw;
`

export const MainSection = styled.section`
  position: relative;
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px); 
  width: 100%;
`

export const Title = styled.h1`
  font-size: 4rem;
  font-family: 'poppins-semibold'; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'poppins-medium'; 
  background: linear-gradient(150deg, #0b2ef3, #02fbff, #0b2ef3);
  background-size: 200% 200%;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${changeTextGradient} 10s ease-in-out infinite;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  margin-bottom: 35px;
`
