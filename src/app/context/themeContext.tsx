import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';

type Children = { children: ReactNode };

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const getLocalStorage = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    return JSON.parse(theme) || '{}';
  } else {
    return [];
  }
};

const AppThemeContext = createContext<IThemeContext>({
  theme: getLocalStorage(),
  toggleTheme: () => null
});

export const AppThemeProvider = ({ children }: Children) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage<string>('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>{children}</AppThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(AppThemeContext);
