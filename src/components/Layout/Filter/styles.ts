import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 45%;
    padding: 3px 3px 3px 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    background-color: ${({theme}) => theme.background.tertiary};
`;

export const ContainerIcon = styled.div`
    margin: 0 5px;
`;

export const Period = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Option = styled.button`
    display: flex;
    flex-direction: row;
    margin: 5px;
    border: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${({theme}) => theme.text.secondary};
`;

export const Search = styled.button`
    display: flex;
    height: 35px;
    width: 35px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background-color: ${({theme}) => theme.background.primary};
    box-shadow: 0 3px 15px ${({theme}) => theme.shadow.secondary};
`;
