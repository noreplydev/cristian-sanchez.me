import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    position: fixed;
    top: 0px; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding-top: 20px; 
    width: calc(100vw - 20vw);
    z-index: 999999;
    background-color: #000;

    @media (max-width: 700px) {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }

`

export const Logo = styled.img`
    height: fit-content;
    width: 150px;
    
    &:hover {
        cursor: pointer;
    }

    @media (max-width: 700px) {
        width: 120px;
    }
`

export const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media (max-width: 700px) {
        display: none; 
    }
`

export const CustomLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%; 
    width: fit-content; 
    color: ${props => props.active ? '#fff' : '#666'}; 
    text-decoration: none;
    font-size: 1.08rem;
    font-family: 'poppins-medium';
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:hover {
        color: #fff;
    }
`
