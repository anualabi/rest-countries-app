import { Container } from '../../shared/components';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <h1 className={styles.logo}>Where in the world?</h1>
        <ThemeSwitcher />
      </Container>
    </nav>
  );
};

export default NavBar;
