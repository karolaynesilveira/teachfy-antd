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

    border-radius: .25rem;
    padding: 1rem;
    width: 25rem;
`;

export const Button = styled.button`
    color: white;

    &:active, &:hover, &:focus {
    }
`;

export const TextMuted = styled.p`
`;