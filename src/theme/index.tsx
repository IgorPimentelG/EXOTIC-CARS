import { ThemeProvider } from 'styled-components';

const Theme: React.FC<{ children: any }> = ({ children }) => {

    const config = {
        text: {
            primary: '#313136',
            secondary: '#656469'
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
        }
    }

    return(
        <ThemeProvider theme={config}>
            {children}
        </ThemeProvider>
    );

}

export default Theme;