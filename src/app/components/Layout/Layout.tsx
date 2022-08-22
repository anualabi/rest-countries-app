import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/Navbar';
import HomePage from '../../pages/HomePage/HomePage';
import CountryPage from '../../pages/CountryPage/CountryPage';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CountryPage />} />
      </Routes>
    </div>
  );
};

export default Layout;
