import styled from 'styled-components'

export const Parent = styled.div`
    display: flex;
    position: relative; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%; 
    width: 100%; 
    padding: 50px 150px;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%; 
    width: 100%;
    border-radius: 15px;  
    overflow: hidden;
    z-index: 1;

    & > img {
        height: auto;
        width: 100%;
        z-index: -1;
        pointer-events: none;
    }
`
