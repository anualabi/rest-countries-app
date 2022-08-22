import { BrowserRouter } from 'react-router-dom';
import { useThemeContext } from './context/themeContext';
import Layout from './components/Layout/Layout';

function App() {
  const { theme } = useThemeContext();

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
