import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    position: fixed;
    bottom: 70px;
    right: 30px;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    background-color: rgba(123, 137, 244, 0.4);

    &:hover {
        transform: scale(1.1);
    }
`;
