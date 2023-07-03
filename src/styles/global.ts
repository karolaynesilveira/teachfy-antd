import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background}!important;
        font-size: 14px;
        color: ${props => props.theme.colors.text}!important;
        font-family: poppins!important;
        overflow: hidden;    
    }

    input, select, button, textarea {
        font-family: inherit!important;
        color: ${props => props.theme.colors.text}!important;
        background-color: ${props => props.theme.colors.input.background}!important;
        border: 1px solid ${props => props.theme.colors.primary}!important;

        &:focus {
            border-color: grey!important;
            outline: 0;
            box-shadow(inset 0 1px 2px rgba(black, .075), 0 0 0 .25rem shade(.25, ${props => props.theme.colors.secondary}))!important;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          border: 1px solid ${props => props.theme.colors.primary}!important;
          -webkit-text-fill-color: ${props => props.theme.colors.text}!important;
          -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.colors.background} inset!important;
          transition: background-color 5000s ease-in-out 0s;
        }
    }

    .btn-teachfy {
        background-color: ${props => props.theme.colors.secondary}!important;
        color: white!important;
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

    .ReactModal__Content {
        color: ${props => props.theme.colors.text}!important;
        background-color: ${props => props.theme.colors.input.background}!important;
    }

`;