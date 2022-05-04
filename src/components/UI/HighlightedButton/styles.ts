import styled from 'styled-components';

export const Button = styled.button<any>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 50px;
    border: 1px solid ${({theme}) => theme.text.primary};
    background-color: ${({theme, isReversed}) => isReversed ? theme.text.primary : 'transparent'};
`;

export const Label = styled.p<any>`
    margin: 0 5px;
    color: ${({theme, isReversed}) => isReversed ? '#FFF' : theme.text.primary};
`;