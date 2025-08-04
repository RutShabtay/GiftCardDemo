import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Autocomplete,
  TextField
} from '@mui/material'


// Self-contained theme - no external dependencies
const selfContainedTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    error: {
      main: '#ef4444'
    },
    text: {
      primary: '#24292f',
      secondary: '#656d76',
      disabled: '#8c959f'
    },
    grey: {
      300: '#d1d5db',
      400: '#9ca3af'
    }
  }
})

const countries = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 
  'Antigua and Barbuda', 'Argentina', 
  'Uruguay', 
  'Vietnam', 'Yemen', 'Zambia'
]

const CountryDropdown = React.forwardRef((props, ref) => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [hasError, setHasError] = useState(false)
  
  // Debug hasError changes
  React.useEffect(() => {
    console.log('hasError changed to:', hasError)
  }, [hasError])
  const [searchTerm, setSearchTerm] = useState('')
  const [touched, setTouched] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (event) => {
    const value = event.target.value
    setSelectedCountry(value)
    if (hasError) {
      setHasError(false) // Clear error when user selects something
    }
  }

  const handleFocus = () => {
    console.log('MUI handleFocus called')
    setTouched(true)
    if (hasError) {
      console.log('MUI: Setting isTyping to true')
      setIsTyping(true)
    }
  }

  const handleBlur = () => {
    console.log('MUI handleBlur called, touched:', touched, 'selectedCountry:', selectedCountry, 'searchTerm:', searchTerm)
    // Only show error if dropdown was opened and closed without selection
    if (touched && !selectedCountry && !searchTerm) {
      console.log('MUI: Setting error state')
      setHasError(true)
      setIsTyping(false)
    }
  }

  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
  }

  const validate = () => {
    if (!selectedCountry) {
      setHasError(true)
      return false // Validation failed
    }
    setHasError(false)
    return true // Validation passed
  }

  // Expose validation function to parent component
  React.useImperativeHandle(ref, () => ({
    validate
  }))

  // Debug effect to track selectedCountry changes
  React.useEffect(() => {
    console.log('MUI selectedCountry changed to:', selectedCountry)
    if (selectedCountry && hasError) {
      console.log('MUI: Clearing error because selectedCountry is now:', selectedCountry)
      setHasError(false)
    }
  }, [selectedCountry, hasError])

  return (
    <div style={{ margin: 0, padding: 0, width: 274 }}>
      <style>
        {`
          #country-select .MuiInputBase-input::placeholder {
            color: #808D95 !important;
            opacity: 1 !important;
          }
          
          /* Remove all shadows from dropdown */
          .MuiAutocomplete-paper {
            box-shadow: none !important;
          }
          
          .MuiAutocomplete-listbox {
            box-shadow: none !important;
          }
          
          /* Remove any gray background that might remain */
          .MuiAutocomplete-option {
            background-color: transparent !important;
          }
          
          .MuiAutocomplete-option:hover {
            background-color: #F0F5FF !important;
          }
          
          .MuiAutocomplete-option:not(:hover) {
            background-color: transparent !important;
          }
          
          /* Style the dropdown arrow */
          .MuiAutocomplete-popupIndicator {
            background-color: transparent !important;
            color: #808D95 !important;
            padding: 6px !important;
            width: 36px !important;
            height: 36px !important;
          }
          
          .MuiAutocomplete-popupIndicator:hover {
            background-color: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .MuiAutocomplete-popupIndicator:active {
            background-color: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .MuiAutocomplete-popupIndicator:focus {
            background-color: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .MuiAutocomplete-popupIndicator:focus-visible {
            background-color: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            outline: none !important;
          }
          
          .MuiAutocomplete-popupIndicator .MuiTouchRipple-root {
            display: none !important;
          }
          
          .MuiAutocomplete-popupIndicator svg {
            width: 30px !important;
            height: 28px !important;
          }
        `}
      </style>
    <ThemeProvider theme={selfContainedTheme}>
      <Box sx={{ 
        width: 274, 
        margin: 0, 
        padding: 0,
        '& > *:first-child': {
          marginTop: 0 
        }
      }}>
                          <Typography 
           variant="body2" 
           sx={{ 
             color: '#464E53',
             fontSize: '14px',
             fontWeight: 400,
             fontFamily: "'Lato', sans-serif",
             lineHeight: '17px',
             letterSpacing: '0%',
             marginBottom: '4px',
             marginTop: 0,
             marginLeft: 0,
             paddingLeft: 0,
             textAlign: 'left',
             '&::after': {
               content: '" *"',
               color: '#1F1F1F'
             }
           }}
         >
           Country of residence
         </Typography>
             <FormControl fullWidth variant="outlined" sx={{ margin: 0, padding: 0 }}>
         <Autocomplete
           id="country-select"
           options={countries}
           value={selectedCountry}
           onChange={(event, newValue) => {
             console.log('MUI onChange called with:', newValue)
             console.log('Current hasError:', hasError)
             setSelectedCountry(newValue || '')
             if (hasError) {
               console.log('MUI: Clearing error state')
               setHasError(false)
             }
             setTouched(false) // Reset touched when selection is made
           }}
           onOpen={() => {
             console.log('Dropdown opened')
             setIsOpen(true)
             setTouched(true)
           }}
           onClose={() => {
             console.log('Dropdown closed, touched:', touched, 'selectedCountry:', selectedCountry, 'searchTerm:', searchTerm)
             setIsOpen(false)
             // Show error if dropdown was opened and closed without selection
             if (touched && !selectedCountry && !searchTerm) {
               console.log('Setting error state')
               setHasError(true)
               setIsTyping(false)
             }
           }}
           onFocus={handleFocus}
           onBlur={handleBlur}
           inputValue={searchTerm}
           onInputChange={(event, newInputValue) => {
             setSearchTerm(newInputValue)
             if (hasError && newInputValue.trim() !== '') {
               setIsTyping(true)
             }
           }}
           renderInput={(params) => (
             <TextField
               {...params}
               placeholder="Select country"
               sx={{
                                   height: '32px',
                                                       '& .MuiOutlinedInput-root': {
                    backgroundColor: hasError && !isTyping ? '#FFF5F7' : '#FFFFFF',
                   '& input::placeholder': {
                     color: '#808D95 !important',
                     opacity: '1 !important'
                   },
                   height: '32px',
                  '& fieldset': {
                    borderColor: hasError ? '#ef4444' : '#BAC1C5',
                    borderWidth: '1px',
                    borderRadius: '4px'
                  },
                  '&:hover': {
                    backgroundColor: hasError ? undefined : '#F0F9FF',
                    '& fieldset': {
                      borderColor: hasError ? '#ef4444' : '#EFEFEF',
                      borderWidth: '1px'
                    }
                  },
                   '&.Mui-focused': {
                     backgroundColor: hasError && !isTyping ? '#FFF5F7' : '#FFFFFF',
                     '& fieldset': {
                       borderColor: hasError ? '#ef4444' : '#6780FF',
                       borderWidth: '1px'
                     }
                   },
                   '&.Mui-error fieldset': {
                     borderColor: '#ef4444'
                   },
                                                           '& input': {
                      padding: '7.5px 8px',
                      fontSize: '14px',
                      lineHeight: '17px',
                      fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                      fontWeight: 400,
                                             color: '#021D2D', // Always dark text when typing or when selected
                      backgroundColor: 'transparent',
                      height: '17px',
                      display: 'flex',
                      alignItems: 'center',
                      outline: 'none',
                      border: 'none',
                      '&::placeholder': {
                        color: '#808D95',
                        opacity: 1
                      }
                    }
                 }
               }}
             />
           )}
           popupIcon={
             <svg width="30" height="18" viewBox="0 0 30 18" fill="none">
               <path d="M7 6L15 13.5L23 6" stroke="#808D95" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           }
           sx={{
                                               '& .MuiAutocomplete-popupIndicator': {
                 color: '#808D95',
                 backgroundColor: 'transparent !important',
                 padding: '6px',
                 width: '36px',
                 height: '36px',
                 '&:hover': {
                   backgroundColor: 'transparent !important'
                 },
                 '& svg': {
                   width: '30px',
                   height: '28px'
                 }
               },
              '& .MuiAutocomplete-clearIndicator': {
                display: 'none'
              }
            }}
                       ListboxProps={{
              sx: {
                                 boxShadow: 'none',
                 borderRadius: '8px',
                 border: '1px solid #EFEFEF',
               marginTop: '0px',
               paddingTop: '4px',
               maxHeight: '200px',
               width: '274px',
               padding: 0,
               '&::-webkit-scrollbar': {
                 width: '4px'
               },
                               '&::-webkit-scrollbar-track': {
                  backgroundColor: 'transparent',
                  borderRadius: '60px',
                  marginTop: '4px',
                  marginBottom: '8px',
                  marginRight: '16px'
                },
               '&::-webkit-scrollbar-thumb': {
                 backgroundColor: '#BAC1C5',
                 borderRadius: '60px',
                 minHeight: '30px'
               },
               '& .MuiAutocomplete-option': {
                 fontSize: '14px',
                 lineHeight: '17px',
                 fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                 fontWeight: 400,
                 color: '#021D2D',
                 letterSpacing: '0%',
                 padding: '7.5px 12px',
                 borderBottom: '1px solid #EFEFEF',
                 minHeight: '40px',
                 height: '40px',
                 display: 'flex',
                 alignItems: 'center',
                 width: '100%',
                 '&:first-of-type': {
                   borderTopLeftRadius: '8px',
                   borderTopRightRadius: '8px',
                   marginTop: 0,
                   padding: '0px 12px 7.5px 12px'
                 },
                 '&:last-child': {
                   borderBottom: 'none',
                   borderBottomLeftRadius: '8px',
                   borderBottomRightRadius: '8px'
                 },
                                   '&:hover': {
                    backgroundColor: '#F0F5FF'
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'transparent !important'
                  },
                  '&:first-of-type.Mui-selected': {
                    backgroundColor: 'transparent !important'
                  },
                  '&:not(:hover)': {
                    backgroundColor: 'transparent !important'
                  }
               }
             }
           }}
         />
       </FormControl>
       {hasError && (
         <Typography 
           variant="caption" 
           sx={{ 
             color: '#ef4444',
             marginTop: '2px',
             display: 'block',
             fontSize: '12px',
             fontFamily: "'Lato', sans-serif",
             marginLeft: 0,
             paddingLeft: 0,
             textAlign: 'left'
           }}
         >
           Required
         </Typography>
       )}
     </Box>
     </ThemeProvider>
     </div>
   )
 })

export default CountryDropdown 
