import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
    theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;
    --dark-secondary: #1aca1a;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;
    --light-secondary: #f2f2f2;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: auto;
    width: 99vw;
    max-width: 800px;
    margin: 30px auto 0;
    background-color: ${({theme}: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    margin-bottom: 20px;
    text-align: center;
  }

`;

export default withTheme(globalStyle);