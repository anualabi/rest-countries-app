import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';

type Children = { children: ReactNode };

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

const localStorageKey = 'theme';

const getLocalStorage = () => {
  const theme = localStorage.getItem(localStorageKey);
  if (theme) {
    return JSON.parse(theme) || '';
  } else {
    return [];
  }
};

const ThemeContext = createContext<IThemeContext>({
  theme: getLocalStorage(),
  toggleTheme: () => null
});

export const ThemeProvider = ({ children }: Children) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage<string>(
    localStorageKey,
    defaultDark ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
