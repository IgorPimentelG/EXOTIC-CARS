import { ContainerLogo, Title, Subtitle } from './styles';

const Logo: React.FC<{ horizontal?: boolean }> = ({ horizontal }) => {
    return(
        <ContainerLogo isHorizontal={horizontal}>
            <Title>exotic</Title>
            <Subtitle>cars</Subtitle>
        </ContainerLogo>
    );
}

export default Logo;