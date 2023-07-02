import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
        font-family: poppins;
        overflow: hidden;    
    }

    .themeModeSwitch div:has(svg.handleIcon) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.content {
        overflow: auto;
        max-height: 94vh;
    }

`;