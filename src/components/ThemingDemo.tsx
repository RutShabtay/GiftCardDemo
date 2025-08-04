import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormLabel } from '@mui/material';

// 🏢 CUSTOMER 1: Corporate Bank - Conservative blue theme for financial trust
const corporateTheme = {
  primary: '#1e40af', // Blue - represents trust & stability
  secondary: '#64748b', // Gray - professional neutrality
  accent: '#0ea5e9', // Light blue - modern touch
  background: '#f8fafc',
  text: '#1e293b'
};

// 🚀 CUSTOMER 2: Tech Startup - Bold purple theme for innovation
const startupTheme = {
  primary: '#7c3aed', // Purple - creativity & innovation
  secondary: '#ec4899', // Pink - energy & disruption
  accent: '#f59e0b', // Orange - growth & optimism
  background: '#fdf4ff',
  text: '#581c87'
};

// 🏥 CUSTOMER 3: Medical Clinic - Calming green theme for healthcare
const medicalTheme = {
  primary: '#059669', // Green - health & nature
  secondary: '#0d9488', // Teal - calm & healing
  accent: '#06b6d4', // Cyan - cleanliness & freshness
  background: '#f0fdf4',
  text: '#064e3b'
};

// 💡 THEME INJECTION POINT: Here's where we inject customer-specific themes
const themes = {
  corporate: corporateTheme,  // ← CUSTOMER 1 gets this theme
  startup: startupTheme,      // ← CUSTOMER 2 gets this theme  
  medical: medicalTheme       // ← CUSTOMER 3 gets this theme
};

const ThemingDemo: React.FC = () => {
  // 🎯 CUSTOMER SELECTION: This determines which customer's theme is active
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('corporate');
  
  // 🎨 THEME INJECTION: Here we inject the selected customer's brand colors
  const theme = themes[currentTheme];  // ← This line "injects" the customer theme!

  // 🎨 CUSTOMER COMPONENT: This MUI component automatically uses the injected theme
  const InputWithTheme = ({ label, type = "text", required = true }: { label: string; type?: string; required?: boolean }) => {
    const [value, setValue] = React.useState('');
    const [touched, setTouched] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [isTyping, setIsTyping] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (showError && e.target.value.trim() !== '') {
        setIsTyping(true);
      }
      if (e.target.value.trim() !== '') {
        setShowError(false);
        setIsTyping(false);
      }
    };

    const handleBlur = () => {
      if (touched && value.trim() === '') {
        setShowError(true);
        setIsTyping(false);
      }
    };

    const handleFocus = () => {
      setTouched(true);
      if (showError) {
        setIsTyping(true);
      }
    };

    const hasError = showError;

    return (
      <Box sx={{ marginBottom: '16px' }}>
        <FormLabel 
          htmlFor={`themed-input-${label}`}
          sx={{
            display: 'block',
            marginBottom: '6px',  // ← EXACT same margin as original
            fontSize: '16px',
            fontWeight: '400',  // ← EXACT same weight as original
            color: '#374151',  // ← Same label color as original (not themed)
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}
        >
          {label} {required && <span style={{ color: '#ef4444' }}>*</span>}
        </FormLabel>
        
        <TextField
          id={`themed-input-${label}`}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={`Enter ${label.toLowerCase()}...`}
          variant="outlined"
          fullWidth
          error={hasError}
          helperText={hasError ? 'Required' : ''}
          InputProps={{
            sx: {
              borderRadius: '7px',  // ← EXACT same radius as original
              backgroundColor: hasError && !isTyping ? '#FEF2F2' : '#ffffff',
              fontSize: '16px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              '& input': {
                padding: '10px 14px',  // ← EXACT same padding as original
                fontSize: '16px',
                color: '#000000',
                '&::placeholder': {
                  color: '#6B7280',
                  opacity: 1
                }
              }
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: `1.5px solid ${hasError ? '#EF4444' : '#9CA3AF'}`,  // ← EXACT same border as original
                borderRadius: '7px'
              },
              '&:hover': {
                backgroundColor: hasError ? '#FEF2F2' : `${theme.primary}10`,  // ← INJECTION: Customer's hover color
                '& fieldset': {
                  border: `1.5px solid ${hasError ? '#EF4444' : '#EFEFEF'}`  // ← INJECTION: Customer's hover border
                }
              },
              '&.Mui-focused': {
                backgroundColor: hasError && !isTyping ? '#FEF2F2' : '#ffffff',
                '& fieldset': {
                  border: hasError ? '2px solid #EF4444' : `1.5px solid ${theme.primary}`,  // ← INJECTION: Customer's focus color
                  boxShadow: 'none'
                }
              }
            },
            '& .MuiFormHelperText-root': {
              color: '#ef4444',
              fontSize: '14px',
              fontWeight: '400',
              marginLeft: '4px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              marginTop: '4px'
            }
          }}
        />
      </Box>
    );
  };

  // 🎨 CUSTOMER BUTTON: This MUI button automatically gets customer's brand colors
  const ButtonWithTheme = ({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' }) => (
    <Button
      sx={{
        padding: '12px 24px',
        // ← INJECTION: Customer's primary or secondary color based on variant
        backgroundColor: variant === 'primary' ? theme.primary : theme.secondary,
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '16px',
        marginRight: '12px',
        textTransform: 'none',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        '&:hover': {
          backgroundColor: variant === 'primary' ? theme.primary : theme.secondary,
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }
      }}
    >
      {children}
    </Button>
  );

  return (
    <Box sx={{
      padding: '40px',
      backgroundColor: theme.background,  // ← INJECTION: Customer's background color
      borderRadius: '12px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      
      <Typography sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: theme.primary,  // ← INJECTION: Customer's primary color for headers
        marginBottom: '32px',
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        🎨 Dynamic Theming in Action - Powered by MUI
      </Typography>

      {/* Theme Selector */}
      <Box sx={{ marginBottom: '32px', textAlign: 'center' }}>
        <Typography sx={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: theme.text,  // ← INJECTION: Customer's text color
          marginBottom: '16px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          Choose Industry Theme:
        </Typography>
        
        {/* 🎯 CUSTOMER SWITCHER: Click these to see different customer themes */}
        {(Object.keys(themes) as Array<keyof typeof themes>).map((themeName) => (
          <Button
            key={themeName}
            onClick={() => setCurrentTheme(themeName)}  // ← INJECTION TRIGGER: Changes active customer
            sx={{
              padding: '8px 20px',
              margin: '0 8px',
              backgroundColor: currentTheme === themeName ? theme.primary : 'white',  // ← INJECTION: Active customer's primary
              color: currentTheme === themeName ? 'white' : theme.text,  // ← INJECTION: Customer's text color
              border: `2px solid ${theme.primary}`,  // ← INJECTION: Customer's primary border
              borderRadius: '6px',
              fontWeight: '600',
              textTransform: 'capitalize',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              '&:hover': {
                backgroundColor: currentTheme === themeName ? theme.primary : `${theme.primary}10`,
                border: `2px solid ${theme.primary}`
              }
            }}
          >
            {themeName}
          </Button>
        ))}
      </Box>

      {/* Form Demo */}
      <Box sx={{
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '8px',
        border: `1px solid ${theme.secondary}30`
      }}>
        <Typography sx={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: theme.primary,
          marginBottom: '24px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          Registration Form
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <InputWithTheme label="First Name" />
          <InputWithTheme label="Last Name" />
        </Box>
        
        <InputWithTheme label="Email" type="email" />
        <InputWithTheme label="Company" required={false} />
        
        <Box sx={{ marginTop: '24px' }}>
          <ButtonWithTheme>Submit Application</ButtonWithTheme>
          <ButtonWithTheme variant="secondary">Save Draft</ButtonWithTheme>
        </Box>
      </Box>

      {/* Benefits */}
      <Box sx={{
        marginTop: '32px',
        padding: '24px',
        backgroundColor: `${theme.primary}10`,
        borderRadius: '8px',
        border: `1px solid ${theme.primary}30`
      }}>
        <Typography sx={{
          fontSize: '1.2rem',
          fontWeight: '600',
          color: theme.primary,
          marginBottom: '16px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          💡 Why This MUI Approach Rocks:
        </Typography>
        
        <Box component="ul" sx={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          color: theme.text,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
          <Box component="li" sx={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>✅</span>
            <strong>Professional Components:</strong> MUI handles accessibility & UX
          </Box>
          <Box component="li" sx={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>✅</span>
            <strong>Theme Injection:</strong> Dynamic customer branding
          </Box>
          <Box component="li" sx={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>✅</span>
            <strong>Consistent Styling:</strong> sx prop ensures predictability
          </Box>
          <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>✅</span>
            <strong>Production Ready:</strong> Enterprise-grade component library
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ThemingDemo; 