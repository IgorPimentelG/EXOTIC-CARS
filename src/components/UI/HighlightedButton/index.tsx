import { Button, Label } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useTheme } from 'styled-components';

const HighlightedButton: React.FC<{
    reversed?: boolean;
    label?: string;
    arrowLeft?: boolean;
    arrowRight?: boolean;
    onClick: () => void;
}> = ({ reversed, arrowLeft, arrowRight, label, onClick }) => {

    const theme = useTheme();

    const defaultColor = reversed ? '#FFF' : theme.text.primary;

    return(
        <Button isReversed={reversed} onClick={onClick}>
            { arrowLeft && <BsArrowLeft color={defaultColor}/> }
            { label && <Label isReversed={reversed}>{label}</Label> }
            { arrowRight && <BsArrowRight color={defaultColor}/> }
        </Button>
    );
}

export default HighlightedButton;