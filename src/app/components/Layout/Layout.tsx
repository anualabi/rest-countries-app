import NavBar from '../NavBar/Navbar';
import HomePage from '../../pages/HomePage';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Layout;
