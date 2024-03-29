import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        text: {
            primary: string;
            secondary: string;
        },

        main: {
           primary: string;
        },

        background: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            quintenary: string;
        },

        shadow: {
            primary: string;
            secondary: string;
        },

        icon: {
            primary: string;
            secondary: string;
        }

        gradients: {
            primary: string;
            secondary: string;
        }
    }
}