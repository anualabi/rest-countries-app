import { Link } from 'react-router-dom';
import { Container } from '../../shared/components';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logoText}>Where in the world?</h1>
        </Link>
        <ThemeSwitcher />
      </Container>
    </nav>
  );
};

export default NavBar;
