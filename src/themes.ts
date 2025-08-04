import { createTheme } from '@mui/material/styles';

// Theme colors - centralized color management
export const themeColors = {
  primary: '#FFB600',
  primaryHover: '#E6A500',
  primaryDark: '#CC9900',
  secondary: '#000000',
  background: '#FFFFFF',
  surface: '#f8f8f8',
  textPrimary: '#000000',
  textSecondary: '#666666',
  border: '#E0E0E0',
  white: '#FFFFFF',
  hoverLight: 'rgba(0, 0, 0, 0.04)',
  hoverMedium: '#F5F5F5'
};

// Function to apply theme CSS variables to PrimeReact
export const applyPrimeReactTheme = () => {
  const root = document.documentElement;
  
  // Set CSS variables for PrimeReact theming
  root.style.setProperty('--primary-color', themeColors.primary);
  root.style.setProperty('--primary-color-text', themeColors.textPrimary);
  root.style.setProperty('--surface-ground', themeColors.background);
  root.style.setProperty('--surface-section', themeColors.surface);
  root.style.setProperty('--surface-border', themeColors.border);
  root.style.setProperty('--text-color', themeColors.textPrimary);
  root.style.setProperty('--text-color-secondary', themeColors.textSecondary);
  
  // Custom variables for consistent styling across components
  root.style.setProperty('--custom-primary', themeColors.primary);
  root.style.setProperty('--custom-primary-hover', themeColors.primaryHover);
  root.style.setProperty('--custom-secondary', themeColors.secondary);
  root.style.setProperty('--custom-surface', themeColors.surface);
  root.style.setProperty('--custom-white', themeColors.white);
  root.style.setProperty('--custom-hover-light', themeColors.hoverLight);
  root.style.setProperty('--custom-hover-medium', themeColors.hoverMedium);
};

// Material-UI theme based on centralized colors
export const appTheme = createTheme({
  palette: {
    primary: {
      main: themeColors.primary,
      contrastText: themeColors.textPrimary,
    },
    secondary: {
      main: themeColors.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '16px',
          padding: '12px 24px',
          minWidth: '100px',
        },
        // "Continue" button style
        contained: {
          backgroundColor: themeColors.primary,
          color: themeColors.textPrimary,
          '&:hover': {
            backgroundColor: themeColors.primaryHover,
          },
        },
        // "Cancel" button style  
        outlined: {
          borderColor: themeColors.secondary,
          backgroundColor: themeColors.white,
          color: themeColors.textPrimary,
          '&:hover': {
            backgroundColor: themeColors.hoverMedium,
            borderColor: themeColors.secondary,
          },
        },
        // "Back" button style
        text: {
          color: themeColors.textPrimary,
          '&:hover': {
            backgroundColor: themeColors.hoverLight,
          },
        },
      },
    },
  },
});