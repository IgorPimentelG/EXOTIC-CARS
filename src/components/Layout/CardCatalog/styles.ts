import styled from 'styled-components';

export const LabelBook = styled.p`
    color: #FFF;
    font-style: bold;
    display: none;
`;

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin: 20px;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    background-color: ${({theme}) => theme.background.secondary};

    &:hover {
        background: linear-gradient(45deg, rgba(123, 137, 244, 0.6), rgba(123, 137, 244, 0.3));
    }

    &:hover ${LabelBook} {
        display: inline;
    }
`;

export const ContainerIcon = styled.div`
    display: flex;
`;

export const ContainerImage = styled.div`
    display: flex;
    height: 80%;
    align-items: center;
    justify-content: center;
`;

export const ContainerPrice = styled.div`
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
    justify-content: space-between;
    align-items: flex-end;
`;

const TextBase = styled.p`
    color: ${({theme}) => theme.text.primary};
`;

export const TextBold = styled(TextBase)`
    text-align: start;
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
