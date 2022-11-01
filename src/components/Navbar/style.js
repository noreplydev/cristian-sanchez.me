import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 50px; 
    width: 100%;
`

export const CustomLink = styled(Link)`
    color: ${props => props.active ? '#fff' : '#666'}; 
    text-decoration: none;
    font-size: 1.08rem;
    font-family: 'poppins-medium';
    margin-left: 25px; 
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:hover {
        color: #fff;
    }
`
