import React, { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { appTheme, applyPrimeReactTheme } from '../themes';

interface ThemeContextType {
  // Keep it simple for now, ready to extend later
  themeName: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const contextValue: ThemeContextType = {
    themeName: 'default', // Single theme for now
  };

  // Apply PrimeReact theme variables when component mounts
  useEffect(() => {
    applyPrimeReactTheme();
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 
