import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Container = styled.section`
    display: flex;
    margin: 60px 0;
    align-items: center;
    justify-content: space-between;
`;

export const Card = styled.div<any>`
    display: flex;
    height: 160px;
    width: 85%;
    padding-top: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.gradients.primary};

    ${({isSelected}) => isSelected ? `transform: scale(1.4)` : ``};
`;

export const ImageCar = styled.img`
    position: relative;
    right: -30px;
    width: 250px;
    animation: ${fadeAnimation} 1.5s;
    animation-fill-mode: backwards;
`;