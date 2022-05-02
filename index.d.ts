import 'styled-components';

declare module 'styled-compoents' {
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
        },

        shadow: {
            primary: string;
            secondary: string;
        }
    }
}