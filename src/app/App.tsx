import { useThemeContext } from './context/themeContext';
import Layout from './components/Layout/Layout';

function App() {
  const { theme } = useThemeContext();

  return (
    <div data-theme={theme}>
      <Layout />
    </div>
  );
}

export default App;
