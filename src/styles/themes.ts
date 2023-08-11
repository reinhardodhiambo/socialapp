export interface ThemeProps {
    background: string;
    text: string;
    secondary: string;
    themeName: string;
}

export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',
    text: 'var(--dark-text)',
    secondary: 'var(--dark-secondary)',
    themeName: 'dark'
};

export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
    secondary: 'var(--light-secondary)',
    themeName: 'light'
};