import styled from 'styled-components';

export const CombinedFields = styled.div`
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0.75rem;
    }
`