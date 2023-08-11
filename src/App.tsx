import {ThemeProvider} from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import {lightTheme, darkTheme} from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import Gallery from "./components/gallery";
import {CenteredImage} from './styles/centeredImage';
import {UpgradeButton, UpgradeContainer, UpgradeText} from "./styles/upgradeStyle";

function App() {
    const {theme, themeToggler} = useThemeMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const linkImage: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Chain_link_icon_slanted.png/602px-Chain_link_icon_slanted.png";
    return (
        <ThemeContext>
            <ThemeProvider theme={themeMode}>
                <GlobalStyle/>
                <header>
                    <CenteredImage>
                        <img src={linkImage} alt="Centered Image"/>
                    </CenteredImage>
                    <TogglerButton themeToggler={themeToggler}/>
                </header>
                <Gallery/>
                <UpgradeContainer>
                    <UpgradeButton>
                        <div>linkin.bio/<span>yourpage</span></div>
                    </UpgradeButton>
                    <UpgradeText>
                        <strong>Upgrade to remove</strong>
                    </UpgradeText>
                </UpgradeContainer>
            </ThemeProvider>
        </ThemeContext>
    );
}

export default App;