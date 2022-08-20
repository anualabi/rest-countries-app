import { useThemeContext } from '../../context/themeContext';
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
    <button type="button" onClick={toggleTheme} className={styles.button}>
      <span className="material-symbols-outlined">{handleTheme('dark_mode', 'light_mode')}</span>
      <p className={styles.toggleText}>{handleTheme('Dark ', 'Light ')}Mode</p>
    </button>
  );
};

export default ThemeSwitcher;
