import { Button, Label } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';

const HighlightedButton: React.FC<{
    reversed?: boolean;
    label?: string;
    arrowLeft?: boolean;
    arrowRight?: boolean;
}> = ({ reversed, arrowLeft, arrowRight, label }) => {

    const theme = useTheme();

    const defaultColor = reversed ? '#FFF' : theme.text.primary;

    return(
        <Button isReversed={reversed}>
            { arrowLeft && <BsArrowLeft color={defaultColor}/> }
            { label && <Label isReversed={reversed}>{label}</Label> }
            { arrowRight && <BsArrowRight color={defaultColor}/> }
        </Button>
    );
}

export default HighlightedButton;