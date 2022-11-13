import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;  
    align-items: center; 
    grid-column: 1; 
    grid-row: ${props => props.top ? 1 : 2}; 
    border-radius: 10px; 
    box-shadow: inset 0px 0px 0px 1px #282828; 
    transition: all .2s ease-in-out; 
    padding: 10px; 
    
    &:hover {
        box-shadow: inset 0px 0px 0px 1px #0044ff; 
        background-color: #050505; 
    }
`

export const Title = styled.a`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-end; 
    align-items: center; 
    height: 100%; 
    color: #fff; 
    font-size: 4rem; 
    font-family: 'poppins-semibold'; 
    text-decoration: none; 

    &:hover {
        text-decoration: underline; 
    }
`

export const Desc = styled.p`
    font-size: 1.2rem; 
    font-family: 'poppins-regular', sans-serif; 
    font-weight: 400; 
`

export const Tool = styled.p`
    display: flex; 
    flex-direction: column;
    justify-content: flex-end;  
    align-items: center; 
    color: #0044ff; 
    font-size: 1.2rem; 
    font-family: 'poppins-regular', sans-serif; 
    font-weight: 400; 
    height: 50%;
`
