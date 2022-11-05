import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../../data/colors'

export const Dropdown = styled.div`
    position: absolute;
    top: 40px;
    right: 0px;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    height: fit-content; 
    min-width: 200px;
    padding: 10px 10px;
    margin-right: 5px; 
    background-color: ${colors.gray2};
    border-radius: 10px; 
    white-space: nowrap;
    z-index: 99999;
    visibility: hidden; 
    opacity: 0;
    transition: visibility 0s, opacity .2s, top .2s linear;

    &:hover {
        visibility: visible; 
        opacity: 1;
        top: 48px; 
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${props => props.active ? '#fff' : '#666'}; 
    text-decoration: none;
    font-size: 1.08rem;
    font-family: 'poppins-medium';
    cursor: pointer;
    transition: all .15s ease-in-out;
    margin-inline: 15px;

    &:hover ~ ${Dropdown} {
        visibility: visible; 
        opacity: 1;
        top: 48px; 
    }
`

export const DropdownWrapper = styled.div`
    position: relative;
    height: 100%;
    width: fit-content; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &:hover ${Section}{
        color: #068DF9;
    }
`

export const SubSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    height: 30px; 
    width: 100%;
    padding: 18px 15px;
    border-radius: 7px;
    transition: background-color .15s ease-in-out;
    cursor: pointer;
    
    &:hover {
        background-color: #171717;
    }
`
