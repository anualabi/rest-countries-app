import { useThemeContext } from '../../context/themeContext';
import { Button } from '../../shared/components';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleTheme = (
    darkModeText: 'dark_mode' | 'Dark ',
    lightModeText: 'light_mode' | 'Light '
  ) => {
    return theme === 'light' ? darkModeText : lightModeText;
  };

  return (
    <Button onClick={toggleTheme} className={styles.button}>
      <span className="material-symbols-outlined">{handleTheme('dark_mode', 'light_mode')}</span>
      <p className={styles.toggleText}>{handleTheme('Dark ', 'Light ')}Mode</p>
    </Button>
  );
};

export default ThemeSwitcher;
