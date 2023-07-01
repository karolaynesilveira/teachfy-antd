import styled from 'styled-components';
import { shade, mix } from 'polished';
import backgroundLogin from '../../../assets/background-login.svg'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${backgroundLogin});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    background-color: ${props => mix(0.2, props.theme.colors.primary, props.theme.colors.background)};
    border: 1px solid ${props => mix(0.2, props.theme.colors.primary, props.theme.colors.background)};
    border-radius: .25rem;
    padding: 1rem;
    width: 25rem;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
    color: white;

    &:active, &:hover, &:focus {
        background-color: ${props => shade(0.1, props.theme.colors.secondary)};
        border-color: ${props => shade(0.1, props.theme.colors.secondary)};
    }
`;

export const TextMuted = styled.p`
    color: ${props => props.theme.colors.muted};
`;