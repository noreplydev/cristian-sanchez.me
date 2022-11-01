import { createGlobalStyle } from 'styled-components'
import poppinsRegular from './assets/fonts/Poppins-Regular.ttf'
import poppinsMedium from './assets/fonts/Poppins-Medium.ttf'
import poppinsSemibold from './assets/fonts/Poppins-SemiBold.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'poppins-regular';
        src: url(${poppinsRegular});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'poppins-medium';
        src: url(${poppinsMedium});
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'poppins-semibold';
        src: url(${poppinsSemibold});
        font-weight: 600;
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
        font-size: 16px;
        padding-inline: 50px; 
        padding-block: 30px; 
    }
`
