import styled from 'styled-components';
import { shade, mix } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    border-radius: .25rem;
    padding: 1rem;
    width: 40%;
`;

export const Logo = styled.img`
    max-width: 50%;
`;

export const Button = styled.button`
`;

export const TextMuted = styled.p`
`;

export const TextDanger = styled.p`
    color: red;
`;