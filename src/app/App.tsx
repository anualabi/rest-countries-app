import { ThemeProvider } from 'styled-components';
import NormalizeStyles from './NormalizeStyles';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme } from './theme';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <NormalizeStyles />
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
