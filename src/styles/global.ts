import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: poppins;
        overflow: hidden;    
    }

    input, select, button, textarea {
        display: block;
        width: 100%;
        padding: .5rem .75rem;
        font-family: inherit;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.input.background};
        background-clip: padding-box;
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: .375rem;
        appearance: none;

        &:focus {
            border-color: grey;
            outline: 0;
            box-shadow(inset 0 1px 2px rgba(black, .075), 0 0 0 .25rem shade(.25, ${props => props.theme.colors.secondary}));
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
          border: 1px solid ${props => props.theme.colors.primary};
          -webkit-text-fill-color: ${props => props.theme.colors.text};
          -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.colors.background} inset;
          transition: background-color 5000s ease-in-out 0s;
        }
    }

    button, a {
        cursor: pointer;
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