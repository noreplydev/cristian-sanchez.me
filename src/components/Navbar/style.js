import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 50px; 
    width: 100%;
`
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 45px; 
    width: fit-content;
    padding: 0 10px;
    background-color: #1e1e1e;
    border-radius: 8px;
`

export const CustomLink = styled(Link)`
    color: ${props => props.active ? '#fff' : '#666'}; 
    text-decoration: none;
    font-size: 1.08rem;
    font-family: 'poppins-medium';
    cursor: pointer;
    margin-inline: 10px; 
    transition: all .15s ease-in-out;

    &:hover {
        color: #fff;
    }
`
