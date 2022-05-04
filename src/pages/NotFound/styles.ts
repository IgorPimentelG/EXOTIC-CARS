import styled from 'styled-components';

export const RootContainer = styled.div`
    display: flex;
    height: 100vh;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 30px;
    background-color: ${({theme}) => theme.background.tertiary};
    box-shadow: 0 10px 20px ${({theme}) => theme.shadow.secondary};
`;

export const Text = styled.h1`
    font-size: 24px;
    text-transform: uppercase;
    color: ${({theme}) => theme.text.secondary};
`;

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
`;

export const Label = styled.h2`
    font-size: 18px;
    color: ${({theme}) => theme.main.primary};
`;