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

    @media(max-width: 980px) {
        width: min-content;
    }

    @media(max-width: 750px) {
        justify-content: center;
        margin: 0 10px;
    }

    @media(max-width: 620px) {
        margin-top: 20px;
    }

    @media(max-width: 320px) {
       flex-direction: column;
       padding: 10px;
       border-radius: 20px;
    }
`;

export const ContainerIcon = styled.button`
    margin-right: 5px;
    border: none;
    cursor: pointer;
    background-color: transparent;

    @media(max-width: 320px) {
        margin-left: 5px;
    }
`;

export const ContainerInputs = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;


    @media(max-width: 980px) {
        flex-direction: column;
    }
`;

export const Select = styled.select`
    border: none;
    width: auto;
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

    @media(max-width: 320px) {
       width: 90px;
    }
`;

export const Period = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 980px) {
        justify-content: center;
    }

    @media(max-width: 320px) {
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
        margin-left: 5px;
    }
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

    @media(max-width: 980px) {
        height: 40px;
        width: 45px;
    }

    @media(max-width: 320px) {
        margin-top: 10px;
        height: 35px;
        width: 100%;
    }
`;
