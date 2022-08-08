import { createContext, useState, useContext, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../theme';
import { ITheme } from '../shared/types/theme';

type Children = { children: ReactNode };

interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

const AppThemeContext = createContext<IThemeContext>({
  theme: lightTheme,
  toggleTheme: () => null
});

export const AppThemeProvider = (props: Children) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </AppThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(AppThemeContext);
