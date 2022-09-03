import { Button } from '../../shared/components';
import styles from './ThemeSwitcher.module.css';

type ThemeSwitcherProps = { theme: string; toggleTheme: () => void };

const ThemeSwitcher = ({ theme, toggleTheme }: ThemeSwitcherProps) => {
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
