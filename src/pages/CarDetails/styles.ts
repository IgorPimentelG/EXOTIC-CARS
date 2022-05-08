import styled from 'styled-components';

export const RootContainer = styled.main`
    padding: 120px 100px;
    background: ${({theme}) => theme.gradients.secondary};
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
    justify-content: space-between;
`;

export const ContainerNav = styled.div`
    display: flex;
    align-items: center;
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
    margin-right: 30px;
    height: 120px;
    width: 120px;
    object-fit: contain;
`;

export const ImageMain = styled.img<any>`
    height: 400px;
    width: 70%;
    margin-left: 60px;
    ${({index}) => index === 1 ? 'display: block' : 'display: none'};
`;

export const Text = styled(TextBase)<any>`
    font-size: ${({size}) => size + 'px'};
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: capitalize;
`;

export const Label = styled(TextBase)<any>`
    font-size: ${({size}) => size + 'px'};;
    font-weight: lighter;
    text-transform: ${({capitalize}) => capitalize ? 'capitalize' : 'normal'};
`;