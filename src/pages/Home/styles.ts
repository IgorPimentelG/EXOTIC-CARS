import styled from 'styled-components';

export const RootContainer = styled.main`
    display: flex;
    flex: 1;
    padding: 100px 50px 50px 50px;
    justify-content: center;
`;

export const Catalog = styled.section`
    display: grid;
    grid-template-columns: repeat(4, auto);
`;