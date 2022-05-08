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

export const ContainerIcon = styled.button`
    margin: 0 3px 0 10px;
    border: none;
    cursor: pointer;
    background-color: transparent;
`;

export const ContainerInputs = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;

    @media(max-width: 905px) {
        flex-direction: column;
    }
`;

export const Select = styled.select`
    width: 140px;
    border: none;
    color: ${({theme}) => theme.text.secondary};
    background-color: transparent;
    overflow-y: auto;
    -webkit-appearance: none;

    &:focus {
        outline: none;
    }
`;

export const Calendar = styled.input`
    position: relative;
    border: none;
    color: ${({theme}) => theme.text.secondary};
    background-color: transparent;

    &:focus {
        outline: none;
    }

    &::-webkit-calendar-picker-indicator {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: auto;
        width: auto;
        cursor: pointer;
        position: absolute;
        color: transparent;
        background: transparent;
    }
`;

export const Period = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Option = styled.button`
    display: flex;
    flex-direction: row;
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
