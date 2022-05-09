import styled from 'styled-components';

export const RootContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const Container = styled.section`
    display: flex;
    flex: 1;
    margin-top: 80px;
    align-items: center;
    justify-content: space-between;
    
    @media(min-width: 2000px) {
        width: 70%;
        justify-content: space-around;
    }

    @media(max-width: 570px) {
        margin-top: 20px;
        flex-direction: column;
    }
`;

export const Card = styled.button<any>`
    display: flex;
    width: 85%;
    height: 150px;
    padding-top: 30px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: none;

    ${({index, theme}) => {
        switch(index) {
            case 0:
                return `background: ${theme.background.quintenary}; cursor: pointer;`;
            case 1:
                return `background: ${theme.gradients.primary}; transform: scale(1.4);`;
            case 2:
                return `background: ${theme.background.quaternary}; cursor: pointer;`;
        }
    }};

    @media(max-width: 1250px) {
        width: 75%;
    }

    @media(max-width: 810px) {
        width: 80%;
    }

    @media(max-width: 660px) {
       height: 80px;
    }

    @media(max-width: 570px) {
        margin: 20px;
    }
`;

export const ImageCar = styled.img`
    position: relative;
    right: -30px;
    width: 250px;
    object-fit: contain;
    animation-fill-mode: backwards;

    @media(max-width: 1250px) {
        width: 200px;
    }

    @media(max-width: 960px) {
        width: 170px;
    }

    @media(max-width: 810px) {
        right: -20px;
        width: 140px;
    }

    @media(max-width: 660px) {
        width: 110px;
    }

    @media(max-width: 570px) {
        top: -10px;
        width: 150px;
    }
`;