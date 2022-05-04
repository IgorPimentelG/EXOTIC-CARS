import { Button } from './styles';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const ScrollButton: React.FC<{ 
    containerRef: React.RefObject<HTMLDivElement> 
}> = ({ containerRef }) => {

    function goToTopHandler() {
        containerRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <Button onClick={goToTopHandler}>
            <MdOutlineKeyboardArrowUp size={40} color='#FFF'/>
        </Button>
    );
}

export default ScrollButton;