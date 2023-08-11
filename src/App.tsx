import {ThemeProvider} from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import {lightTheme, darkTheme} from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import Gallery from "./components/gallery";
import { HiBell} from 'react-icons/hi';
import { FaBell } from 'react-icons/fa';

function App() {
    const {theme, themeToggler} = useThemeMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext>
            <ThemeProvider theme={themeMode}>
                <GlobalStyle/>
                <header>
                    <TogglerButton themeToggler={themeToggler}/>
                </header>
                <Gallery/>
            </ThemeProvider>
        </ThemeContext>
    );
}

export default App;