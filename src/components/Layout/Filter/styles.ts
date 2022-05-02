import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px 20px;
    border-radius: 50px;
    background-color: ${({theme}) => theme.background.tertiary};
`;