import { Button, Label } from './styles';

const NavButton: React.FC<{
    children: any;
    primary?: boolean;
}> = ({ children, primary }) => {
    return(
        <Button primary={primary}>
            <Label primary={primary}>{children}</Label>
        </Button>
    );
}

export default NavButton;