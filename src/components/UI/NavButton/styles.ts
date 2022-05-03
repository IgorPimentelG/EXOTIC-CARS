import styled from 'styled-components';

export const Button = styled.button<any>`
    margin: 0 5px;
    cursor: pointer;
    border-radius: 13px;
    border: ${({theme, primary}) => primary ? `2px solid ${theme.main.primary}` : 'none'};
    background-color: ${({theme}) => theme.background.primary};

    &:hover {
        background-color: ${({theme, primary}) => primary ? theme.main.primary : ''};
    }
`;

export const Label = styled.h3<any>`
    color: ${({theme}) => theme.main.primary};
    padding: 5px 10px;
    &:hover {
        color: ${({primary}) => primary ? '#FFF' : ''};
    }
`;