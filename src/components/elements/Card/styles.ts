import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    position: relative;
    border-radius: .25rem;
    width: 12rem;
    flex: 1 1 auto;
    padding: 1rem;
    margin: 0.5rem;

    &:hover {
        cursor: pointer;
        transform: scale(1.1,1.1);
    }
`;

export const Title = styled.h4`
    margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h5`
    margin-bottom: 0.5rem;
`;

export const Description = styled.span`
    line-height: 1.5rem;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden !important;
    -webkit-line-clamp: 4;
`; 