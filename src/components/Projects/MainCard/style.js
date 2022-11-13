import styled from 'styled-components'

export const Card = styled.div`
    position: relative; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    grid-column: 2;
    grid-row: 1 / span 2;
    border-radius: 10px; 
    box-shadow: inset 0px 0px 0px 1px #282828; 
    padding: 20px;
    background-color: #000; 
    overflow: hidden; 
    user-select: none; 
    -moz-user-select: none; 
    -webkit-user-select: none; 

    &:hover {
        box-shadow: inset 0px 0px 0px 1px #0044ff; 
        background-color: #050505; 
    }

    & > * {
        z-index: 1; 
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
    height: 80%;
`

export const Blur = styled.div`
    position: absolute; 
    top: 0px; 
    left: 0px; 
    height: 100%; 
    width: 100%; 
    filter: blur(15px); 
    z-index: 0; 
`

export const Dona = styled.img`
    position: absolute; 
    top: 50%; 
    left: -50%; 
    height: auto; 
    width: 80%; 
    transform: translateY(-50%); 
`
