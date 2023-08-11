import {CenteredButtonContainer} from './styles';


interface ThemeTogglerProps {
    themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
    return (
        <CenteredButtonContainer>
            <button onClick={themeToggler}>
                My Button
            </button>
        </CenteredButtonContainer>
    );
}

export default TogglerButton;