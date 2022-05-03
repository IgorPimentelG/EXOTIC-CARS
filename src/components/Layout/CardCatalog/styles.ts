import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 20px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    background-color: ${({theme}) => theme.background.secondary};

`;
// &:hover {
//     background: linear-gradient(45deg,#7B89F4, #FFF);
// }

export const ContainerIcon = styled.div`
    display: flex;
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
`;

const TextBase = styled.p`
    color: ${({theme}) => theme.text.primary};
`;

export const TextBold = styled(TextBase)`
    font-weight: bold;
    text-transform: capitalize;
`;

export const TextModel = styled(TextBase)`
    text-transform: uppercase;
    font-weight: lighter;
`;

export const TextPrice = styled(TextBold)`
    font-size: 22px;
    margin-left: 3px;
`;

export const ImageCar = styled.img`
    width: 230px;
`;

export const Currency = styled(TextBold)`
    font-size: 13px;
    margin-bottom: 8px;
`;

export const Label = styled(TextModel)`
    text-transform: lowercase;
`;

export const Circle = styled.div`
    margin: 2px;
    height: 6px;
    width: 6px;
    border-radius: 50px;
    background-color: ${({theme}) => theme.icon.secondary};
`;
