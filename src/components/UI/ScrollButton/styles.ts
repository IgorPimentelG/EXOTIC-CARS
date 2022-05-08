import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    position: fixed;
    bottom: 70px;
    right: 70px;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background-color: rgba(230, 211, 241, 0.8);

    &:hover {
        transform: scale(1.1);
    }
`;
