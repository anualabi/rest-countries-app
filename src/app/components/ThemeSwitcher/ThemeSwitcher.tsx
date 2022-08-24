import { Button } from '../../shared/components';
import styles from './ThemeSwitcher.module.css';

type IThemeSwitcher = { theme: string; toggleTheme: () => void };

const ThemeSwitcher = ({ theme, toggleTheme }: IThemeSwitcher) => {
  return (
    <Button
      className={styles.button}
      startIcon={theme === 'light' ? 'dark_mode' : 'light_mode'}
      onClick={toggleTheme}
    >
      <p className={styles.toggleText}>{theme === 'light' ? 'Dark ' : 'Light '}Mode</p>
    </Button>
  );
};

export default ThemeSwitcher;
