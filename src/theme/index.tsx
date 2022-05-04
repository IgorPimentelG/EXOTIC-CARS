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
        },

        gradients: {
            primary: 'linear-gradient(45deg, rgba(170, 173, 244), rgba(221, 205, 241))',
            secondary: 'linear-gradient(90deg, rgba(101, 100, 105, 0.1), rgba(101, 100, 105, 0.4))'
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