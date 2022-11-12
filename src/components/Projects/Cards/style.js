import styled from 'styled-components'

export const TopCard = styled.div`
    grid-column: 1; 
    grid-row: 1; 
    border-radius: 10px; 
    box-shadow: inset 0px 0px 0px 1px #282828; 
    transition: all .2s ease-in-out; 
    
    &:hover {
        box-shadow: inset 0px 0px 0px 1px #0044ff; 
        background-color: #050505; 
    }
`

export const BottomCard = styled.div`
    grid-column: 1; 
    grid-row: 2; 
    border-radius: 10px;
    box-shadow: inset 0px 0px 0px 1px #282828; 
    transition: all .2s ease-in-out; 

    &:hover {
        box-shadow: inset 0px 0px 0px 1px #0044ff; 
        background-color: #050505; 
    }
`
