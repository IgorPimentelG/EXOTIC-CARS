import styled from 'styled-components';

export const RootContainer = styled.main`
    display: flex;
    flex: 1;
    padding: 100px 50px 50px 50px;
    justify-content: center;

    @media(max-width: 620px) {
        padding-top: 250px;
    }

    @media(max-width: 320px) {
        padding-top: 300px;
    }
`;

export const Catalog = styled.section`
    display: grid;
    grid-template-columns: repeat(4, auto);

    @media(max-width: 1200px) {
        grid-template-columns: repeat(3, auto);
    }

    @media(max-width: 890px) {
        grid-template-columns: repeat(2, auto);
    }

    @media(max-width: 590px) {
        grid-template-columns: repeat(1, auto);
    }
`;