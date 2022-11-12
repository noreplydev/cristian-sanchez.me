import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../../data/colors'

export const Dropdown = styled.div`
    position: absolute;
    top: 50px;
    right: 0px;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    height: fit-content; 
    min-width: 200px;
    padding: 10px 10px;
    margin-right: 5px; 
    background-color: ${colors.black};
    border-radius: 10px; 
    border: 1px solid ${colors.gray2};
    white-space: nowrap;
    z-index: 99999;
    visibility: hidden; 
    opacity: 0;
    transition: visibility 0s, opacity .12s, top .12s linear;

    &:hover {
        visibility: visible; 
        opacity: 1;
        top: 65px; 
    }
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: fit-content;
    margin-inline: 30px;

    &:hover ~ ${Dropdown} {
        visibility: visible; 
        opacity: 1;
        top: 65px; 
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: ${props => props.active ? `${colors.white}` : `${colors.gray1}`}; 
    text-decoration: none;
    font-size: 1.08rem;
    font-family: 'poppins-medium';
    cursor: pointer;
    transition: all .15s ease-in-out;
`

export const Arrow = styled.img`
    height: auto; 
    width: 15px;
    color: white; 
    margin-left: 10px; 
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
        color: ${colors.white};
    }
`

export const SubSection = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    height: 30px; 
    width: 100%;
    padding: 18px 15px;
    transition: all .15s ease-in-out;
    cursor: pointer;
    color: ${colors.gray0};
    text-decoration: none; 
    
    &:hover {
        color: ${colors.white};
    }
`
