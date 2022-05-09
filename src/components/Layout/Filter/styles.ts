import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
    display: flex;
    width: 50%;
    padding: 5px 3px 5px 15px;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    background-color: ${({theme}) => theme.background.tertiary};

    @media(min-width: 2000px) {
        width: 30%;
    }

    @media(max-width: 1210px) {
        width: 55%;
    }

    @media(max-width: 980px) {
        width: min-content;
    }

    @media(max-width: 750px) {
        justify-content: center;
        margin: 0 10px;
    }

    @media(max-width: 710px) {
        margin-top: 20px;
    }

    @media(max-width: 420px) {
       flex-direction: column;
       width: 100%;
       border-radius: 20px;
       margin: 10px 0;
       padding: 3px;
    }
`;

export const ContainerIcon = styled.div`
    border: none;
    background-color: transparent;
`;

export const ContainerInputs = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media(max-width: 1035px) {
        flex-direction: column;
        align-items: center;
        margin-left: 30px;
    }

    @media(max-width: 400px) {
        margin: 0;
    }
`;

export const CustomSelect = styled(Select)`
   .Select__control {
        margin-left: -5px;
        margin-bottom: 3px;
        width: 180px;
        border: none;
        font-size: 14px;
        background-color: transparent;

        @media(max-width: 1110px) {
            width: 140px;
        }
    }

    .Select__indicator, .Select__indicator-separator  {
        display: none;
    }

    .Select__control--is-focused {
        box-shadow: none;
    }

    .Selet__control--placeholder {
        color: red;
    }
`;

export const Calendar = styled.input`
    position: relative;
    border: none;
    margin: 0 15px 0 5px;
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

    @media(max-width: 330px) {
       width: 90px;
       margin: 3px;
    }
`;

export const Period = styled.div`
    display: flex;
    flex-direction: row;

    @media(max-width: 980px) {
        justify-content: center;
    }

    @media(max-width: 420px) {
        flex-direction: column;
        align-items: center;
        margin-left: 30px;
    }
`;

export const Option = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${({theme}) => theme.text.secondary};
`;

export const Search = styled.button`
    display: flex;
    height: 40px;
    width: 45px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50px;
    background-color: ${({theme}) => theme.background.primary};
    box-shadow: 0 3px 15px ${({theme}) => theme.shadow.secondary};

    @media(max-width: 1035px) {
        height: 50px;
        width: 60px;
    }

    @media(max-width: 420px) {
        margin-top: 10px;
        height: 35px;
        width: 100%;
    }
`;
