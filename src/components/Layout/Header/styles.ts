import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: fixed;
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
`;

export const Nav = styled.nav`
    flex-direction: row;
`;