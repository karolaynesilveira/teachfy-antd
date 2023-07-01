import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    position: relative;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: .25rem;
    width: 12rem;
    flex: 1 1 auto;
    padding: 1rem;
    margin: 0.5rem;

    &:hover {
        box-shadow: 0 0.5rem 1.5rem ${props => shade(0.4, props.theme.colors.background)};
        cursor: pointer;
        transform: scale(1.1,1.1);
        background: ${props => props.theme.colors.background};
    }
`;

export const Title = styled.h4`
    margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h5`
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.muted};
`;

export const Description = styled.span`
    line-height: 1.5rem;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden !important;
    -webkit-line-clamp: 4;
`; 