import './App.css';
import MuiInput from './components/MuiInput';
import PrimeInput from './components/PrimeInput';
import MaterialButtonDemo from './components/MaterialButtonDemo';
import PrimeButtonDemo from './components/PrimeButtonDemo';
import { ThemeProvider } from './components/ThemeContext';
import { MaterialUIDatePicker } from './components/MaterialUIDatePicker';
import { PrimeReactDatePicker } from './components/PrimeReactDatePicker';
// @ts-ignore
import CountryDropdown from './components/CountryDropdown.jsx';
// @ts-ignore
import CountryDropdownPrime from './components/CountryDropdownPrime.jsx';

// Import PrimeReact CSS
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Import Material-UI components for layout
import { 
  Box, 
  Typography
} from '@mui/material';

function App() {
  return (
    <ThemeProvider>
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#ffffff',
        width: '100%'
      }}>
        {/* Header Section */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 2, md: 3 },
          width: '100%'
        }}>
          {/* Background Pattern */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          <Box sx={{ textAlign: 'center', width: '100%', position: 'relative', zIndex: 1 }}>
            {/* Gift Card Project Badge */}
            <Box 
              className="gift-card-badge"
              sx={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              px: { xs: 1.2, md: 3 },
              py: { xs: 0.6, md: 1.5 },
              mb: { xs: 0.5, md: 2 },
              color: 'white',
              animation: 'breathe 3s ease-in-out infinite'
            }}>
              <Box sx={{
                width: { xs: 4, md: 8 },
                height: { xs: 4, md: 8 },
                borderRadius: '50%',
                backgroundColor: '#fbbf24',
                mr: { xs: 0.8, md: 2 },
                animation: 'pulse 2s infinite'
              }} />
              <Typography variant="body2" sx={{ 
                fontWeight: 500,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Gift Card Components Demo
              </Typography>
            </Box>

            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '4rem' },
                color: 'white',
                mb: { xs: 0.5, md: 1 },
                letterSpacing: '-0.02em',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              Gift Card Components Showcase
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                fontSize: { xs: '0.9rem', md: '1.75rem' },
                mb: 2,
                letterSpacing: '-0.01em'
              }}
            >
              Material-UI vs PrimeReact Implementation
            </Typography>
            
            {/* Decorative Line */}
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              mt:-1
            }}>
              <Box sx={{ 
                width: '60px',
                height: '2px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '1px'
              }} />
              <Box sx={{ 
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                mx: 2,
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
              }} />
              <Box sx={{ 
                width: '60px',
                height: '2px',
                background: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '1px'
              }} />
            </Box>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' },
                fontWeight: 400,
                display: { xs: 'none', md: 'block' }
              }}
            >
              Interactive demonstration comparing component implementations, design systems, 
              and user experience patterns for the Gift Card project architecture decisions.
            </Typography>
          </Box>

          {/* Floating Elements */}
          <Box sx={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: { xs: '60px', md: '100px' },
            height: { xs: '60px', md: '100px' },
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            animation: 'floatOriginal 6s ease-in-out infinite',
            display: { xs: 'none', md: 'block' }
          }} />
          <Box sx={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: { xs: '40px', md: '60px' },
            height: { xs: '40px', md: '60px' },
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
            animation: 'float 5s ease-in-out infinite reverse'
          }} />
          <Box sx={{
            position: 'absolute',
            top: '40%',
            left: '70%',
            width: { xs: '50px', md: '80px' },
            height: { xs: '50px', md: '80px' },
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))',
            animation: 'floatOriginal 7s ease-in-out infinite 2s',
            display: { xs: 'none', md: 'block' }
          }} />
          <Box sx={{
            position: 'absolute',
            top: '80%',
            left: '20%',
            width: { xs: '30px', md: '40px' },
            height: { xs: '30px', md: '40px' },
            borderRadius: '50%',
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
            animation: 'float 6s ease-in-out infinite 0.5s',
            display: { xs: 'none', md: 'block' }
          }} />

                      <style>
              {`
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.5; }
                }
                @keyframes float {
                  0%, 100% { 
                    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
                    opacity: 0.8; 
                  }
                  25% { 
                    transform: translateY(-60px) translateX(20px) rotate(15deg) scale(1.1); 
                    opacity: 1; 
                  }
                  50% { 
                    transform: translateY(-100px) translateX(0px) rotate(0deg) scale(0.9); 
                    opacity: 0.6; 
                  }
                  75% { 
                    transform: translateY(-60px) translateX(-20px) rotate(-15deg) scale(1.1); 
                    opacity: 1; 
                  }
                  100% { 
                    transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
                    opacity: 0.8; 
                  }
                }
                @keyframes floatOriginal {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  25% { transform: translateY(-30px) rotate(8deg); }
                  50% { transform: translateY(-50px) rotate(0deg); }
                  75% { transform: translateY(-30px) rotate(-8deg); }
                  100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes breathe {
                  0%, 100% { transform: scale(1) translateY(0px); opacity: 0.9; }
                  50% { transform: scale(1.05) translateY(8px); opacity: 1; }
                }
                @keyframes breathe-mobile {
                  0%, 100% { transform: scale(1) translateY(0px); opacity: 0.9; }
                  50% { transform: scale(1.02) translateY(4px); opacity: 1; }
                }
                @media (max-width: 900px) {
                  .gift-card-badge {
                    animation: breathe-mobile 3s ease-in-out infinite !important;
                  }
                }
              `}
            </style>
        </Box>

        {/* Components Showcase */}
        <Box sx={{ width: '100%' }}>
          
          {/* Buttons Section */}
          <Box sx={{ 
            borderBottom: '1px solid #f1f5f9',
            py: { xs: 4, md: 6 },
            width: '100%'
          }}>
            <Box sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
              <Box sx={{ 
                textAlign: 'center',
                mb: 5
              }}>
                <Typography variant="h3" component="h2" sx={{ 
                  fontWeight: 300,
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                  color: '#1e293b',
                  mb: 2,
                  letterSpacing: '-0.025em'
                }}>
                  BUTTONS
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#64748b',
                  fontSize: '1.125rem',
                  width: '100%'
                }}>
                  Interactive button components with different states and styling approaches
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, md: 5 },
                width: '100%',
                maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1100px' },
                mx: 'auto'
              }}>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 200,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e40af)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#3b82f6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Material-UI
                  </Typography>
        <MaterialButtonDemo />
                </Box>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 200,
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease-in-out',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#8b5cf6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    PrimeReact
                  </Typography>
                  <PrimeButtonDemo />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Input Fields Section */}
          <Box sx={{ 
            borderBottom: '1px solid #f1f5f9',
            py: { xs: 4, md: 6 },
            backgroundColor: '#fafafa',
            width: '100%'
          }}>
            <Box sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
              <Box sx={{ 
                textAlign: 'center',
                mb: 5
              }}>
                <Typography variant="h3" component="h2" sx={{ 
                  fontWeight: 300,
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                  color: '#1e293b',
                  mb: 2,
                  letterSpacing: '-0.025em'
                }}>
                  INPUT FIELDS
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#64748b',
                  fontSize: '1.125rem',
                  width: '100%'
                }}>
                  Text input components with validation states and theming options
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, md: 5 },
                width: '100%',
                maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1100px' },
                mx: 'auto'
              }}>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 180,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e40af)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#3b82f6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Material-UI
                  </Typography>
                  <MuiInput />
                </Box>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 180,
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease-in-out',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#8b5cf6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    PrimeReact
                  </Typography>
        <PrimeInput />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Dropdown Section */}
          <Box sx={{ 
            borderBottom: '1px solid #f1f5f9',
            py: { xs: 4, md: 6 },
            width: '100%'
          }}>
            <Box sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
              <Box sx={{ 
                textAlign: 'center',
                mb: 5
              }}>
                <Typography variant="h3" component="h2" sx={{ 
                  fontWeight: 300,
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                  color: '#1e293b',
                  mb: 2,
                  letterSpacing: '-0.025em'
                }}>
                  DROPDOWN SELECTORS
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#64748b',
                  fontSize: '1.125rem',
                  width: '100%'
                }}>
                  Advanced dropdown components with search functionality and custom styling
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, md: 5 },
                width: '100%',
                maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1100px' },
                mx: 'auto'
              }}>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 260,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e40af)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#3b82f6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Material-UI
                  </Typography>
                  <CountryDropdown />
                </Box>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 260,
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease-in-out',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#8b5cf6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    PrimeReact
                  </Typography>
        <CountryDropdownPrime />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Date Pickers Section */}
          <Box sx={{ 
            py: { xs: 4, md: 6 },
            backgroundColor: '#fafafa',
            width: '100%'
          }}>
            <Box sx={{ width: '100%', px: { xs: 2, md: 4 } }}>
              <Box sx={{ 
                textAlign: 'center',
                mb: 5
              }}>
                <Typography variant="h3" component="h2" sx={{ 
                  fontWeight: 300,
                  fontSize: { xs: '1.875rem', md: '2.25rem' },
                  color: '#1e293b',
                  mb: 2,
                  letterSpacing: '-0.025em'
                }}>
                  DATE PICKERS
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#64748b',
                  fontSize: '1.125rem',
                  width: '100%'
                }}>
                  Calendar-based date selection components with localization support
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, md: 5 },
                width: '100%',
                maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1100px' },
                mx: 'auto'
              }}>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 260,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #3b82f6, #1d4ed8, #1e40af)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#3b82f6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Material-UI
                  </Typography>
                  <MaterialUIDatePicker />
                </Box>
                <Box sx={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                  minHeight: 260,
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease-in-out',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }
                }}>
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9)',
                    borderRadius: '3px 3px 0 0'
                  }} />

                  <Typography variant="h6" sx={{ 
                    color: '#8b5cf6',
                    fontWeight: 700,
                    mb: 3,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    PrimeReact
                  </Typography>
        <PrimeReactDatePicker />
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

        {/* Footer */}
        <Box sx={{ 
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          py: 6, 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          width: '100%'
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M20 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm10 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM10 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h6" sx={{ 
              color: 'white',
              mb: 2,
              fontWeight: 600
            }}>
              Gift Card • UI Components Demo
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              mb: 1
            }}>
              Components comparison showcase for architecture decision making
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.75rem'
            }}>
              Built with React, TypeScript, Material-UI & PrimeReact
            </Typography>
          </Box>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

export default App;