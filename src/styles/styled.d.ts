import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme { 
        title: string;

        colors: {
            primary: string;
            secondary: string;
            muted: string;

            background: string;
            text: string;

            input: {
                background: string;
            }
        }
    }
}