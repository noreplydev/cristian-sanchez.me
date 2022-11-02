import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 50px; 
    width: 100%;
`

export const Logo = styled.img`
    height: 40px;
    width: 40px;
    background: linear-gradient(135deg, #0a2efa, #01f7fb);
    border-radius: 20px; 
    
    &:hover {
        cursor: pointer;
    }
`

export const Sections = styled.div`
    display: flex;
    flex-direction: row;
`

export const CustomLink = styled(Link)`
    color: ${props => props.active ? '#fff' : '#666'}; 
    text-decoration: none;
    font-size: 1.08rem;
    font-family: 'poppins-medium';
    cursor: pointer;
    margin-inline: 5px; 
    transition: all .15s ease-in-out;
    padding: 5px 15px;
    border-radius: 5px; 

    &:hover {
        color: #fff;
        background-color: #383838;
    }
`
