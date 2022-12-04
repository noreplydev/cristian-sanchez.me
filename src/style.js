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
        font-family: 'poppins-regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #fff; 
        box-sizing: border-box;
    }

    body {
        position: relative; 
        background-color: #000; 
        font-size: 16px;
        overflow: hidden; 
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100vh;
        width: 100vw;
        padding-inline: 10vw; 
        padding-block: 2vw; 
        overflow: hidden; 

        @media (max-width: 700px) {
            padding-inline: 5vw; 
        }
    }
`
