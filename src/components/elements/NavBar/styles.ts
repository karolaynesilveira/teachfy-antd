import styled from 'styled-components';

export const Container = styled.div`
    height: 3rem;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerItem = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
`;

export const Title = styled.h3`
    margin-left: 0.5rem;
`;

export const Button = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    text-decoration: none;
    color: inherit;
    &:hover, &:active, &:visited:hover {
        text-decoration: none;
        background-color: ${props => props.theme.colors.secondary};
        color: #fff
    }
    &:visited {
        text-decoration: none;
        color: inherit;
        outline: 0;
    }
`;