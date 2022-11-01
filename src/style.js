import { createGlobalStyle } from 'styled-components'
import poppinsRegular from './assets/fonts/Poppins-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'poppins-regular';
        src: url(${poppinsRegular});
        font-weight: 400;
        font-style: normal;
    }
    
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins-regular';
        color: #fff; 
    }

    body {
        background-color: #000; 
        font-family: 'poppins-regular';
    }
`
