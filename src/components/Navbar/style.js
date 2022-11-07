import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 50px; 
    width: 100%;
`

export const Logo = styled.img`
    height: auto;
    width: 150px;
    
    &:hover {
        cursor: pointer;
    }
`

export const Sections = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%; 
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
    margin-inline: 15px;

    &:hover {
        color: #fff;
    }
`
