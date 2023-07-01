import styled from 'styled-components';

export const Container = styled.div`
    position: absolute; 
    padding: 10px;
    display: flex;
    align-items: center; 
    right: 1.4rem; 
    height: 3rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 30rem;
    box-shadow: inset 0px 0px 10px 10px ${props => props.theme.colors.background};
`;