import styled from 'styled-components';
import { shade, mix } from 'polished';
import backgroundLogin from '../../../assets/background-login.svg'

export const Container = styled.div`
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
    height: 100vh!important;
    background-image: url(${backgroundLogin})!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
`;

export const Form = styled.div`
    display: flex!important;
    align-items: center!important;
    flex-direction: column!important;
    gap: 1rem!important;

    background-color: ${props => mix(0.2, props.theme.colors.primary, props.theme.colors.background)}!important;
    border: 1px solid ${props => mix(0.2, props.theme.colors.primary, props.theme.colors.background)}!important;
    border-radius: .25rem!important;
    padding: 1rem!important;
    width: 25rem!important;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.colors.secondary}!important;
    border-color: ${props => props.theme.colors.secondary}!important;
    color: white!important;

    &:active, &:hover, &:focus {
        background-color: ${props => shade(0.1, props.theme.colors.secondary)}!important;
        border-color: ${props => shade(0.1, props.theme.colors.secondary)}!important;
    }
`;

export const TextMuted = styled.p`
    color: ${props => props.theme.colors.muted}!important;
`;