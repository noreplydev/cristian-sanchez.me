import styled from 'styled-components'
import { colors } from '../../data/colors'

export const Parent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const Title = styled.h2`
    font-size: 2.8rem;
    font-family: 'poppins-semibold', sans-serif;
    color: #fff;
`

export const Subtitle = styled.h3`
    font-size: 1.8rem;
    font-family: 'poppins-regular', sans-serif;
    font-weight: 400; 
    color: #fff;
    margin-bottom: 25px; 
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: fit-content; 
    width: 100%;
`

export const Card = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px; 
    width: 70px;
    margin-inline: 10px;
    border-radius: 10px; 
    border: 1px solid ${colors.gray2};
    background-color: transparent;  
    transition: all .15s ease-in-out; 
    
    &:hover {
        background-color: ${colors.rgba.blue}; 
        border: 1px solid ${colors.blue};
    }
`

export const Icon = styled.img`
    height: 32px; 
    width: 32px;
    pointer-events: none;
`
