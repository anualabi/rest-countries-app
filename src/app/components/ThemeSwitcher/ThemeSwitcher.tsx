import { StyledThemeSwitcher } from './ThemeSwitcherStyles';
import { useThemeContext } from '../../context/themeContext';
import { lightTheme } from '../../theme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleTheme = (darkModeText: string, lightModeText: string) => {
    return theme.bg === lightTheme.bg ? darkModeText : lightModeText;
  };

  return (
    <StyledThemeSwitcher onClick={toggleTheme}>
      <span className="material-symbols-outlined">{handleTheme('dark_mode', 'light_mode')}</span>
      <p>{handleTheme('Dark ', 'Light ')}Mode</p>
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
