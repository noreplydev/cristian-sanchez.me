import styled from 'styled-components'

export const Anchor = styled.a`
    user-select: none;
    -moz-user-select: none; 
    -webkit-user-select: none;
    font-size: 4rem;
    font-family: 'poppins-semibold', sans-serif; 
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        text-decoration: underline; 
    }
`
