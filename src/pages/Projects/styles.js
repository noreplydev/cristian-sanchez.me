import styled from 'styled-components'

export const Parent = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%; 
    width: 100%; 
    padding-top: 110px;
    padding-bottom: 20px;
    padding-inline: 12%; 
    aspect-ratio: 16/9; 
    overflow-y: scroll;
    overflow-x: hidden; 
`

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    border-radius: 15px;  
    overflow: hidden;
    z-index: 1;
    background-color: #000;
    margin-bottom: 30px; 
    transform-style: preserve-3d;

    &:hover {
        border: 1px solid #fff;
    }

    & > div {
        position: relative; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 50px; 
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.0); 
        transition: opacity .2s ease-in-out;
    }

    &:hover > div {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.8);
    }

    & > img {
        position: absolute;
        object-fit: cover; 
        height: 100%;
        width: 100%;
        z-index: -1;
        pointer-events: none;
    }
`
