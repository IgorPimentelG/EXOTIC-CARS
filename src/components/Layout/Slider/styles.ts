import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    margin: 60px 0;
    align-items: center;
    justify-content: space-between;
`;

export const Card = styled.div<any>`
    display: flex;
    width: 85%;
    padding-top: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.gradients.primary};

    ${({isIndex}) => isIndex ? ` transform: scale(1.3) ` : ``};
`;

export const ImageCar = styled.img`
    position: relative;
    right: -30px;
    width: 250px;
`;