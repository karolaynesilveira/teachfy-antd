import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: .25rem;
    padding: 1rem;
`;