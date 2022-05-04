import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 100px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.background.primary};
    box-shadow: 0px 10px 50px ${({theme}) => theme.shadow.primary};
`;

export const Nav = styled.nav`
    flex-direction: row;
`;