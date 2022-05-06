import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 45%;
    padding: 3px 3px 3px 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    background-color: ${({theme}) => theme.background.tertiary};

    @media(max-width: 1240px) {
        width: 50%;
    }

    @media(max-width: 1110px) {
        width: 55%;
    }

    @media(max-width: 905px) {
        width: 35%;
        padding-right: 10px;
    }
`;

export const ContainerIcon = styled.div`
    margin: 0 5px;
`;

export const ContainerInputs = styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;

    @media(max-width: 905px) {
        flex-direction: column;
    }
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
