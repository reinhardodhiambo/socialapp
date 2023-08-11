import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';
import { Container, Icons } from './styles';


interface ThemeTogglerProps {
    themeToggler: () => void;
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
    return (
        <Container>
            <label htmlFor="checkbox" className="switch">
                <input
                    id="checkbox"
                    type="button"
                    onClick={themeToggler}
                    onChange={() => false}
                    checked={window.localStorage.getItem('theme') === 'light'}
                />
                <h5 className="slider">
                   My Button
                </h5>
            </label>
        </Container>
    );
}

export default TogglerButton;