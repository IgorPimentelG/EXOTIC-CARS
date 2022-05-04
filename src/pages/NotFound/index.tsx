import { Head, Logo } from '@components/UI';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { TiWarningOutline, TiArrowBack } from 'react-icons/ti';
import { Button, ContainerMessage, Label, RootContainer, Text, Card } from './styles';

const NotFound = () => { 

    const theme = useTheme();
    const navigate = useNavigate();

    function goToHomeHandler() {
        navigate('/home');
    }

    return(
        <RootContainer>
            <Head page='404'/>
            <Card>
                <Logo horizontal/>
                <ContainerMessage>
                    <TiWarningOutline size={50} color={theme.text.secondary}/>
                    <Text>page not found</Text>
                </ContainerMessage>
                <Button onClick={goToHomeHandler}>
                    <TiArrowBack size={30} color={theme.main.primary}/>
                    <Label>Go to home</Label>
                </Button>
            </Card>

        </RootContainer>
    );
}

export default NotFound;