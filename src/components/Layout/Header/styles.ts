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

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

export const Nav = styled.nav`
    flex-direction: row;
`;

const TextBase = styled.h1`
    color: ${({theme}) => theme.text.primary};
    text-transform: uppercase;
    letter-spacing: 5px;
`;

export const TextPrimary = styled(TextBase)`
    font-size: 28px;
`;

export const TextSecundary = styled(TextBase)`
    font-size: 19px;
    font-weight: normal;
    margin-left: 3px;
`;