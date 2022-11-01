import styled, { keyframes } from 'styled-components'

const changeGradient = keyframes`
  33% {
    background-position: 0% 0%;
    box-shadow: 0px 0px 100px -10px #5282FF;
    -webkit-box-shadow: 0px 0px 100px -10px #5282FF; 
  } 66% {
    background-position: 100% 50%;
    box-shadow: 0px 0px 100px -10px #02fbff;
    -webkit-box-shadow: 0px 0px 100px -10px #02fbff; 
  } 100% {
    background-position: 0% 0%;
    box-shadow: 0px 0px 100px -10px #5282FF;
    -webkit-box-shadow: 0px 0px 100px -10px #5282FF; 
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Anchor = styled.a`
  text-decoration: none;
  margin-right: 30px; 
`

export const ButtonBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  background: linear-gradient(150deg, #0b2ef3, #03d9dd, #0b2ef3);
  background-size: 300% 300%;
  padding: 1px;
  border-radius: 8px;
  box-shadow: 0px 0px 100px -10px #5282FF;
  -webkit-box-shadow: 0px 0px 100px -10px #5282FF; 
  transition: all 150ms ease-in-out;
  opacity: 1;
  animation: ${changeGradient} 10s ease-in-out infinite;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding-inline: 20px;
  padding-block: 6px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #000;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: transparent;
  }
`

export const ProjectsButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding-inline: 20px;
  padding-block: 6px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #0080ff;
  transition: all .10s ease-in-out;

  &:hover {
    scale: 1.1; 
  }

`

export const Text = styled.p`
  font-size: 1.1rem;
  font-family: 'poppins-medium';
`
