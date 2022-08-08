import { ThemeProvider } from 'styled-components';
import NormalizeStyles from './NormalizeStyles';
import { GlobalStyles } from './GlobalStyles';
import { useThemeContext } from './context/themeContext';
import Layout from './components/Layout/Layout';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
