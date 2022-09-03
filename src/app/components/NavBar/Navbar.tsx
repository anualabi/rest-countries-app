import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../shared/components';
import styles from './Navbar.module.css';

type NavBarProps = { children: React.ReactNode };

const NavBar = ({ children }: NavBarProps) => {
  return (
    <nav className={styles.navbar}>
      <Container className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <h1 className={styles.logoText}>Where in the world?</h1>
        </Link>
        {children}
      </Container>
    </nav>
  );
};

export default NavBar;
