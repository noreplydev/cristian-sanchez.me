import styled from 'styled-components'

export const Parent = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%; 
    width: 100%; 
    padding-top: 50px;
    margin-bottom: 30px;  
`

export const Grid = styled.div`
    position: relative; 
    display: grid; 
    grid-template-columns: 1fr 1.5fr; 
    grid-template-rows: 1fr 1fr; 
    grid-gap: 20px; 
    height: 100%; 
    min-width: 100%;
    padding: 30px; 
    padding-bottom: 150px; 
    overflow: scroll;

    @media (max-width: 700px) {
        grid-template-columns: 1fr; 
        grid-template-rows: 400px 400px 400px;
    }
`
