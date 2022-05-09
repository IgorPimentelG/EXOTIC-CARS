import styled from 'styled-components';

export const RootContainer = styled.main`
    padding: 120px 100px;
    background: ${({theme}) => theme.gradients.secondary};

    @media(max-width: 1180px) {
        padding: 120px 50px;
    }

    @media(max-width: 880px) {
        padding: 120px 20px;
    }

    @media(max-width: 620px) {
        padding-top: 250px;
    }

    @media(max-width: 570px) {
       padding-bottom: 20px;
    }

    @media(max-width: 380px) {
        padding-top: 300px;
    }
`;

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ContainerMain = styled.section`
    display: flex;
    flex-direction: row;
    margin-top: -30px;
    align-items: stretch;
    justify-content: center;

    @media(max-width: 780px) {
        flex-direction: column;
        margin-top: 50px;
    }
`;

export const ContainerNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 780px) {
        margin: 20px;
    }
`;

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    @media(max-width: 1080px) {
        width: 75%;
    }

    @media(max-width: 900px) {
        width: 65%;
    }

    @media(max-width: 780px) {
        width: 100%;
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
`;

export const ContainerBookNow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

const TextBase = styled.p`
    color: ${({theme}) => theme.text.primary};
`;

export const ImageSqueri = styled.img`
    margin-right: 10px;
    height: 120px;
    width: 120px;
    object-fit: contain;

    @media(max-width: 900px) {
        width: 90px;
        height: 90px;
    }
`;

export const ImageMain = styled.img<any>`
    height: 400px;
    width: 700px;
    object-fit: contain;
    ${({index}) => index === 1 ? 'display: block' : 'display: none'};

    @media(max-width: 1000px) {
        width: 600px;
    }

    @media(max-width: 900px) {
        width: 500px;
    }

    @media(max-width: 780px) {
        height: 200px;
    }

    @media(max-width: 420px) {
        width: 400px;
    }

    @media(max-width: 380px) {
        width: 300px;
    }

    @media(max-width: 300px) {
        width: 250px;
    }
`;

export const Text = styled(TextBase)<any>`
    font-size: ${({size}) => size + 'px'};
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: capitalize;

    @media(max-width: 440px) {
        font-size: 24px;
    }
`;

export const Label = styled(TextBase)<any>`
    font-size: ${({size}) => size + 'px'};;
    font-weight: lighter;
    text-transform: ${({capitalize}) => capitalize ? 'capitalize' : 'normal'};

    @media(max-width: 440px) {
        font-size: 20px;
    }
`;