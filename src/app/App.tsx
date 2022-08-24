import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocalStorage } from './shared/hooks/useLocalStorage';
import NavBar from './components/NavBar/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CountryPage from './pages/CountryPage/CountryPage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage<string>('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Layout>
          <NavBar>
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<CountryPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
