import { IconContext } from 'react-icons';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const Theme: React.FC<{ children: any }> = ({ children }) => {

    const config: DefaultTheme = {
        text: {
            primary: '#313136',
            secondary: '#656469',
        },

        main: {
           primary: '#7B89F4'
        },

        background: {
            primary: '#FFF',
            secondary: '#F8F8FA',
            tertiary: '#F3F1FC'
        },

        shadow: {
            primary: '#0000001A',
            secondary: '#00000014'
        }, 

        icon: {
            primary: '#C4C4C4',
            secondary: '#C8C8CA'
        }
    }

    return(
        <ThemeProvider theme={config}>
            <IconContext.Provider value={{ size: '18px', className: 'global-class-name' }}>
                {children}
            </IconContext.Provider>
        </ThemeProvider>
    );

}

export default Theme;