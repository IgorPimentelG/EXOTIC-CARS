import styled from 'styled-components';

export const ContainerLogo = styled.div<any>`
    display: flex;

    ${({isHorizontal}) => !isHorizontal && `
        flex-direction: row;
        align-items: baseline;
    `};

    ${({isHorizontal}) => isHorizontal && `
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `};
`;

const TextBase = styled.h1`
    color: ${({theme}) => theme.text.primary};
    text-transform: uppercase;
    letter-spacing: 5px;
`;

export const Title = styled(TextBase)`
    font-size: 28px;
`;

export const Subtitle = styled(TextBase)`
    font-size: 19px;
    font-weight: normal;
    margin-left: 3px;
`;