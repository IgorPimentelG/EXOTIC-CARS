import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
    z-index: 999;
    width: 100%;
    flex-direction: row;
    padding: 20px 100px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.background.primary};
    box-shadow: 0px 10px 50px ${({theme}) => theme.shadow.primary};

    @media(max-width: 1500px) {
        padding: 20px 70px;
    }

    @media(max-width: 960px) {
        padding: 20px 40px;
    }

    @media(max-width: 710px) {
        flex-direction: column;
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;

    @media(max-width: 830px) {
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 710px) {
        margin-top: 20px;
        flex-direction: row;
    }
`;