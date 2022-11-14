import styled from 'styled-components'
import image from '../../../assets/images/projects/easy-ip.png'

export const Tool = styled.p`
    display: flex; 
    flex-direction: column;
    justify-content: center;  
    align-items: center; 
    color: #0044ff;
    font-size: 1.2rem; 
    font-family: 'poppins-regular', sans-serif; 
    font-weight: 400; 
    height: fit-content; 
    width: 100%; 
    padding-block: 15px; 
    border-top-left-radius: 10px; 
    border-top-right-radius: 9px; 
    box-shadow: 0px 0px 0px 1px #282828;
    background-color: rgba(0, 0, 0, .9);;
    transition: all .2s ease-in-out; 
    z-index: 999; 
`

export const Parent = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;  
    align-items: flex-start;
    padding-block: 1px; 
    padding-inline: 1px;  
    border-radius: 10px; 
    box-shadow: inset 0px 0px 0px 1px #282828; 

    background-color: #000; 
    background-image: url(${props => props.image}); 
    background-size: auto 100%;
    background-position: 50% 50%; 
    background-repeat: no-repeat;
    transition: all .2s ease-in-out; 

    &:hover {
        box-shadow: inset 0px 0px 0px 1px #0044ff;
        background-size: auto 105%;
    }

    &:hover ${Tool}{
        box-shadow: 0px 0px 0px 1px #0044ff;
    }

    //style title & desc container
    & > div {
        display: flex; 
        flex-direction: column; 
        justify-content: flex-end; 
        align-items: flex-start; 
        height: 100%; 
        width: 100%; 
        border-bottom-left-radius: 9px; 
        border-bottom-right-radius: 9px;
        background-color: rgba(0, 0, 0, .6);
        filter: grayscale(100%);
    }
`

export const Title = styled.p`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    color: #fff; 
    font-size: 1.3rem; 
    font-family: 'poppins-semibold';
    margin-left: 20px;
    padding-inline: 10px; 
    background-color: rgba(0, 0, 0, .6);
`

export const Desc = styled.p`
    font-size: 1.15rem; 
    font-family: 'poppins-regular', sans-serif; 
    font-weight: 400; 
    margin-left: 20px; 
    margin-bottom: 10px; 
    color: #fff; 
    padding-inline: 10px; 
    background-color: rgba(0, 0, 0, .6);
`
