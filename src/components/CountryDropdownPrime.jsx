import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { classNames } from 'primereact/utils'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// Remove PrimeReact default focus styling and customize scrollbar
const style = document.createElement('style')
style.textContent = `
  .p-dropdown:not(.p-disabled).p-focus {
    outline: none !important;
    box-shadow: none !important;
  }
  
  .p-dropdown input {
    outline: none !important;
    border: none !important;
    background: transparent !important;
  }
  
  .p-dropdown .p-dropdown-label {
    display: flex !important;
    align-items: center !important;
    height: 32px !important;
  }
  
  /* Ensure dropdown panel is visible */
  .p-dropdown-panel {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 1000 !important;
  }
  
  /* Custom scrollbar for PrimeReact dropdown */
  .p-dropdown-panel::-webkit-scrollbar {
    width: 4px !important; /* Width from Figma */
  }
  
  .p-dropdown-panel::-webkit-scrollbar-track {
    background-color: transparent !important;
    border-radius: 60px !important; /* Radius from Figma */
  }
  
  .p-dropdown-panel::-webkit-scrollbar-thumb {
    background-color: #BAC1C5 !important; /* gray-blue-300 from Figma */
    border-radius: 60px !important; /* Radius from Figma - makes it fully rounded */
    min-height: 30px !important; /* Shorter thumb */
  }
  
  .p-dropdown-panel::-webkit-scrollbar-thumb:hover {
    background-color: #A0B0BF !important; /* Slightly darker on hover */
  }
  
  /* Remove scrollbar buttons (triangles) - more specific selectors */
  .p-dropdown-panel::-webkit-scrollbar-button,
  .p-dropdown-panel::-webkit-scrollbar-button:start,
  .p-dropdown-panel::-webkit-scrollbar-button:end,
  .p-dropdown-panel::-webkit-scrollbar-button:single-button,
  .p-dropdown-panel::-webkit-scrollbar-button:double-button,
  .p-dropdown-panel::-webkit-scrollbar-button:single-button:start,
  .p-dropdown-panel::-webkit-scrollbar-button:single-button:end,
  .p-dropdown-panel::-webkit-scrollbar-button:double-button:start,
  .p-dropdown-panel::-webkit-scrollbar-button:double-button:end {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    background: none !important;
    border: none !important;
  }
  
  /* Force remove all scrollbar buttons globally */
  *::-webkit-scrollbar-button {
    display: none !important;
  }
  
  /* Specific for dropdown panel */
  .p-dropdown-panel *::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
  
  /* Additional selectors to ensure buttons are hidden */
  .p-dropdown-panel .p-dropdown-items::-webkit-scrollbar-button,
  .p-dropdown-panel .p-dropdown-items::-webkit-scrollbar-button:start,
  .p-dropdown-panel .p-dropdown-items::-webkit-scrollbar-button:end {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
  }
  
  /* Override any PrimeReact default scrollbar styles */
  .p-dropdown-panel::-webkit-scrollbar {
    width: 4px !important;
  }
  
  .p-dropdown-panel::-webkit-scrollbar-track {
    background-color: transparent !important;
    border-radius: 60px !important;
  }
  
  .p-dropdown-panel::-webkit-scrollbar-thumb {
    background-color: #BAC1C5 !important;
    border-radius: 60px !important;
    min-height: 30px !important;
  }
  
  .p-dropdown-panel::-webkit-scrollbar-thumb:hover {
    background-color: #A0B0BF !important;
  }
  
  /* Global scrollbar button removal for all browsers */
  .p-dropdown-panel {
    scrollbar-width: thin !important;
    scrollbar-color: #BAC1C5 transparent !important;
  }
  
  /* Firefox scrollbar styling */
  .p-dropdown-panel::-moz-scrollbar {
    width: 4px !important;
  }
  
  .p-dropdown-panel::-moz-scrollbar-track {
    background: transparent !important;
  }
  
  .p-dropdown-panel::-moz-scrollbar-thumb {
    background: #BAC1C5 !important;
    border-radius: 60px !important;
  }
  
  .p-dropdown-panel::-moz-scrollbar-thumb:hover {
    background: #A0B0BF !important;
  }
  
     .p-dropdown .p-dropdown-trigger .p-dropdown-trigger-icon {
    color: #808D95 !important;
  }
  
  .p-dropdown.p-dropdown-open .p-dropdown-trigger .p-dropdown-trigger-icon,
  .p-dropdown:has(.p-dropdown-label:not(.p-placeholder)) .p-dropdown-trigger .p-dropdown-trigger-icon {
    color: #808D95 !important;
  }
  
  /* Force placeholder color */
   .p-dropdown .p-dropdown-label.p-placeholder {
     color: #808D95 !important;
     opacity: 1 !important;
     font-size: 14px !important;
     line-height: 17px !important;
     font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
     font-weight: 400 !important;
     letter-spacing: 0% !important;
     display: flex !important;
     align-items: center !important;
     height: 32px !important;
   }
   
   /* Text color when typing - match Material-UI */
   .p-dropdown .p-dropdown-label:not(.p-placeholder) {
     color: #021D2D !important;
   }
   
   .p-dropdown input {
     color: #021D2D !important;
   }
  
  /* Remove all shadows from PrimeReact dropdown */
  .p-dropdown-panel {
    box-shadow: none !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    z-index: 1000 !important;
  }
  
  .p-dropdown-panel .p-dropdown-items {
    box-shadow: none !important;
  }
  
  /* Consistent border for all dropdown items */
  .p-dropdown-item {
    background-color: transparent !important;
    border-bottom: 1px solid #EFEFEF !important;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  
  .p-dropdown-item:hover {
    background-color: #F0F5FF !important;
    border-bottom: 1px solid #EFEFEF !important;
    outline: none !important;
    box-shadow: none !important;
  }
  
  /* Remove all focus styles */
  .p-dropdown-item:focus,
  .p-dropdown-item:focus-visible,
  .p-dropdown-item:focus-within {
    outline: none !important;
    border-bottom: 1px solid #EFEFEF !important;
    box-shadow: none !important;
  }
  
  /* Remove any default browser focus styles */
  .p-dropdown-item *:focus,
  .p-dropdown-item *:focus-visible {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  
  /* Ensure consistent border on all dropdown items */
  .p-dropdown-panel .p-dropdown-item,
  .p-dropdown-items .p-dropdown-item {
    border-bottom: 1px solid #EFEFEF !important;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
  }
  
  /* Remove bottom border from last item */
  .p-dropdown-panel .p-dropdown-item:last-child,
  .p-dropdown-items .p-dropdown-item:last-child {
    border-bottom: none !important;
  }
  
  /* Remove any child element borders that might interfere */
  .p-dropdown-item * {
    border-bottom: none !important;
    border: none !important;
  }
  
  /* Ensure only bottom border exists with consistent width */
  .p-dropdown-panel .p-dropdown-item {
    border: none !important;
    border-bottom: 1px solid #EFEFEF !important;
    outline: none !important;
    box-shadow: none !important;
  }
  
  /* Remove all borders from child elements */
  .p-dropdown-panel .p-dropdown-item * {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  
  /* Force consistent border width for all states */
  .p-dropdown-panel .p-dropdown-item:focus,
  .p-dropdown-panel .p-dropdown-item:focus-visible,
  .p-dropdown-panel .p-dropdown-item:focus-within,
  .p-dropdown-panel .p-dropdown-item:hover:focus,
  .p-dropdown-panel .p-dropdown-item:hover:focus-visible {
    outline: none !important;
    outline-offset: 0 !important;
    border: none !important;
    border-bottom: 1px solid #EFEFEF !important;
    box-shadow: none !important;
  }
  
  /* Ensure hover background has rounded corners only for first and last items */
  .p-dropdown-panel .p-dropdown-item:hover {
    background-color: #F0F5FF !important;
  }
  
  /* First item hover - rounded top left corner */
  .p-dropdown-panel .p-dropdown-item:first-child:hover {
    border-radius: 0 !important;
    border-top-left-radius: 8px !important;
  }
  
  /* Last item hover - rounded bottom left corner */
  .p-dropdown-panel .p-dropdown-item:last-child:hover {
    border-radius: 0 !important;
    border-bottom-left-radius: 8px !important;
    border-bottom: none !important;
  }
  
  /* Middle items hover - no rounded corners */
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover {
    border-radius: 0 !important;
  }
  
  /* Override any PrimeReact default border-radius on hover */
  .p-dropdown-panel .p-dropdown-item:first-child:hover,
  .p-dropdown-panel .p-dropdown-item:first-child:hover * {
    border-radius: 0 !important;
    border-top-left-radius: 8px !important;
  }
  
  .p-dropdown-panel .p-dropdown-item:last-child:hover,
  .p-dropdown-panel .p-dropdown-item:last-child:hover * {
    border-radius: 0 !important;
    border-bottom-left-radius: 8px !important;
  }
  
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover,
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover * {
    border-radius: 0 !important;
  }
  
  /* Force rounded corners for all hover states */
  .p-dropdown-panel .p-dropdown-item:first-child:hover,
  .p-dropdown-panel .p-dropdown-item:first-child:hover *,
  .p-dropdown-panel .p-dropdown-item:first-child:hover::before,
  .p-dropdown-panel .p-dropdown-item:first-child:hover::after {
    border-radius: 0 !important;
    border-top-left-radius: 8px !important;
  }
  
  .p-dropdown-panel .p-dropdown-item:last-child:hover,
  .p-dropdown-panel .p-dropdown-item:last-child:hover *,
  .p-dropdown-panel .p-dropdown-item:last-child:hover::before,
  .p-dropdown-panel .p-dropdown-item:last-child:hover::after {
    border-radius: 0 !important;
    border-bottom-left-radius: 8px !important;
  }
  
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover,
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover *,
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover::before,
  .p-dropdown-panel .p-dropdown-item:not(:first-child):not(:last-child):hover::after {
    border-radius: 0 !important;
  }
  
  /* Override any PrimeReact default styles that might add border-radius */
  .p-dropdown-panel .p-dropdown-item.p-highlight,
  .p-dropdown-panel .p-dropdown-item.p-highlight:hover {
    border-radius: 0 !important;
  }
  
  /* Global override for all dropdown items - no rounded corners */
  .p-dropdown-panel * {
    border-radius: 0 !important;
  }
  
  /* Specific override for the background color element */
  .p-dropdown-panel .p-dropdown-item {
    border-radius: 0 !important;
  }
  
  /* Force no rounded corners for the actual background element */
  .p-dropdown-panel .p-dropdown-item,
  .p-dropdown-panel .p-dropdown-item > *,
  .p-dropdown-panel .p-dropdown-item > div,
  .p-dropdown-panel .p-dropdown-item > span {
    border-radius: 0 !important;
  }
  
  /* Override any PrimeReact default styles that might add border-radius */
  .p-dropdown-panel .p-dropdown-item.p-highlight,
  .p-dropdown-panel .p-dropdown-item.p-highlight:hover,
  .p-dropdown-panel .p-dropdown-item.p-highlight > * {
    border-radius: 0 !important;
  }
  
  /* Force no rounded corners for all elements in dropdown panel */
  .p-dropdown-panel *,
  .p-dropdown-panel *::before,
  .p-dropdown-panel *::after {
    border-radius: 0 !important;
  }
  
  /* Specific override for hover state */
  .p-dropdown-panel .p-dropdown-item:hover,
  .p-dropdown-panel .p-dropdown-item:hover *,
  .p-dropdown-panel .p-dropdown-item:hover::before,
  .p-dropdown-panel .p-dropdown-item:hover::after {
    border-radius: 0 !important;
  }
  

`
if (!document.head.querySelector('style[data-primereact-focus]')) {
  style.setAttribute('data-primereact-focus', 'true')
  document.head.appendChild(style)
}

const countries = [
  { label: 'Afghanistan', value: 'Afghanistan' },
  { label: 'Albania', value: 'Albania' },
  { label: 'Algeria', value: 'Algeria' },
  { label: 'Andorra', value: 'Andorra' },
  { label: 'Angola', value: 'Angola' },
  { label: 'Antigua and Barbuda', value: 'Antigua and Barbuda' },
  { label: 'Argentina', value: 'Argentina' },
  { label: 'Serbia', value: 'Serbia' },
  { label: 'Seychelles', value: 'Seychelles' },
  { label: 'Zambia', value: 'Zambia' },
  { label: 'Zimbabwe', value: 'Zimbabwe' }
]

const CountryDropdownPrime = React.forwardRef((props, ref) => {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [hasError, setHasError] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCountries, setFilteredCountries] = useState(countries)
  const [touched, setTouched] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isHoveringItems, setIsHoveringItems] = useState(false)

  const handleChange = (e) => {
    setSelectedCountry(e.value)
    setSearchTerm('') // Clear search term when a country is selected
    setFilteredCountries(countries) // Reset to all countries
    setIsFocused(false) // Clear focus state after selection
    setIsHoveringItems(false) // Clear hovering items state after selection
    setIsOpen(false) // Clear open state after selection
    setIsHovered(false) // Clear hover state after selection to reset border color
    if (hasError) {
      setHasError(false) // Clear error when user selects something
    }
  }

  const handleFocus = () => {
    setTouched(true)
    setIsFocused(true)
    // Clear error state when focusing for the first time
    if (!touched) {
      setHasError(false)
      setIsTyping(false)
    } else if (hasError) {
      setIsTyping(true)
    }
    // If there's already a selection, ensure white background
    if (selectedCountry && hasError) {
      setIsTyping(true)
    }
    // Always clear error state when focusing to show blue border
    setHasError(false)
  }

  const handleShow = () => {
    setIsOpen(true)
    setIsFocused(true) // Ensure focused state is set when dropdown opens
    
    // When dropdown opens, always show white background and clear error
    if (hasError) {
      setIsTyping(true)
      setHasError(false)
    }
    
    // Clear error state when dropdown opens for the first time
    if (!touched) {
      setHasError(false)
      setIsTyping(false)
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Only show error if dropdown is closed and no country is selected
    if (touched && !selectedCountry && !isOpen) {
      setHasError(true)
      setIsTyping(false)
    }
  }

  const handleInputChange = (event, newInputValue) => {
    setSearchTerm(newInputValue)
    
    // When user starts typing, show white background
    if (hasError) {
      setIsTyping(true)
    }
    
    if (newInputValue.trim() === '') {
      setFilteredCountries(countries)
    } else {
      const filtered = countries.filter(country => 
        country.label.toLowerCase().includes(newInputValue.toLowerCase())
      )
      setFilteredCountries(filtered)
    }
  }

  const handleItemHover = () => {
    // When hovering over dropdown items, set green background
    setIsHoveringItems(true)
    // Always set isTyping to true when hovering items to show white background
    setIsTyping(true)
    // Clear error state when hovering items to prevent pink background
    if (hasError) {
      setHasError(false)
    }
  }

  const handleItemLeave = () => {
    // When leaving dropdown items, remove green background
    setIsHoveringItems(false)
  }

  const validate = () => {
    if (!selectedCountry) {
      setHasError(true)
      return false
    }
    setHasError(false)
    return true
  }

  React.useImperativeHandle(ref, () => ({
    validate
  }))

  return (
    <div className="p-field" style={{ width: '274px' }}>
                     <label 
          htmlFor="country-dropdown"
          className="p-component p-text-secondary"
          style={{
            display: 'block',
            marginBottom: '4px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '17px',
            letterSpacing: '0%',
            color: '#464E53',
            textAlign: 'left',
            marginLeft: 0,
            paddingLeft: 0,
            fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
            marginTop: 0
          }}
        >
          Country of residence <span style={{ color: '#1F1F1F' }}>*</span>
        </label>
             <Dropdown
         id="country-dropdown"
         value={selectedCountry}
         onChange={handleChange}
         placeholder="Select country"
                                       placeholderStyle={{
             color: '#808D95 !important', // Placeholder color to match border
             fontSize: '14px',
             lineHeight: '17px',
             fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
             fontWeight: 400,
             opacity: '1 !important',
             letterSpacing: '0%'
           }}
         className={classNames('w-full', { 'p-invalid': hasError })}
                   onShow={handleShow}
          onHide={() => {
            setIsOpen(false)
            // Only show error when dropdown closes if the input is not focused
            // Use setTimeout to allow focus state to properly determine if we're still in the input
            setTimeout(() => {
              if (touched && !selectedCountry && !isFocused) {
              setHasError(true)
              setIsTyping(false)
            }
            }, 50)
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInputChange={handleInputChange}
                   style={{
            height: '32px', // Hug height from Figma
            backgroundColor: hasError && !isHovered ? '#FFF5F7' : (isHovered && !isOpen && !isFocused && !hasError ? '#F0F9FF' : '#FFFFFF'), // Same hover background as regular input, regardless of selection
            border: `1px solid ${hasError ? '#ef4444' : ((isOpen || isFocused || isHoveringItems) ? '#6780FF' : (isHovered ? '#EFEFEF' : '#BAC1C5'))}`, // border/border-selected-primary when open or focused or hovering items
            borderRadius: '4px', // 4px radius from Figma
            width: '100%',
            outline: 'none',
            boxShadow: 'none',
            position: 'relative'
          }}
                   scrollHeight="200px"
          showClear={false}
          editable={true}
          options={filteredCountries}
          clearIcon={null}
          dropdownIcon={
            <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path d="M7.5 5.5L14 12L20.5 5.5" stroke="#808D95" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
                   itemTemplate={(option) => {
           return (
                           <div style={{
                padding: '7.5px 12px', // Figma padding: Top 7.5px, Right 12px, Bottom 7.5px, Left 12px
                fontSize: '14px', // Match dropdown text size
                lineHeight: '17px', // Match dropdown line height
                minHeight: '40px', // Hug (40px) from Figma
                height: '40px', // Fixed height
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                color: '#021D2D',
                fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                letterSpacing: '0%', // Letter spacing from Figma
                width: '100%',
                borderBottom: '1px solid #EFEFEF', // border/border-list-separator from Figma
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                outline: 'none',
                boxShadow: 'none'
              }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               onMouseEnter={(e) => {
                      // Check if this is the first or last item
                      const allItems = e.target.parentElement.children
                      const isFirst = e.target === allItems[0]
                      const isLast = e.target === allItems[allItems.length - 1]
                      
                      e.target.style.backgroundColor = '#F0F5FF'
                      
                      if (isFirst) {
                        e.target.style.borderRadius = '0'
                        e.target.style.borderTopLeftRadius = '8px'
                      } else if (isLast) {
                        e.target.style.borderRadius = '0'
                        e.target.style.borderBottomLeftRadius = '8px'
                      } else {
                        e.target.style.borderRadius = '0'
                      }
                      
                      // Force rounded corners for all child elements
                      const children = e.target.querySelectorAll('*')
                      children.forEach(child => {
                        if (isFirst) {
                          child.style.borderRadius = '0'
                          child.style.borderTopLeftRadius = '8px'
                        } else if (isLast) {
                          child.style.borderRadius = '0'
                          child.style.borderBottomLeftRadius = '8px'
                        } else {
                          child.style.borderRadius = '0'
                        }
                      })
                      
                      // Ensure white background on input when hovering items
                      handleItemHover()
                    }}
                                                                                                                                       onMouseLeave={(e) => {
                    // Check if this is the last item
                    const allItems = e.target.parentElement.children
                    const isLast = e.target === allItems[allItems.length - 1]
                    
                    e.target.style.backgroundColor = 'transparent'
                    e.target.style.transition = 'background-color 0.1s ease'
                    e.target.style.borderRadius = '0'
                    e.target.style.borderTopLeftRadius = '0'
                    e.target.style.borderBottomLeftRadius = '0'
                    
                    // Only add bottom border if it's not the last item
                    if (!isLast) {
                      e.target.style.borderBottom = '1px solid #EFEFEF'
                    } else {
                      e.target.style.borderBottom = 'none'
                    }
                    
                    // Reset all child elements
                    const children = e.target.querySelectorAll('*')
                    children.forEach(child => {
                      child.style.borderRadius = '0'
                      child.style.borderTopLeftRadius = '0'
                      child.style.borderBottomLeftRadius = '0'
                      child.style.borderBottom = 'none'
                      child.style.border = 'none'
                    })
                    
                    // Remove green background when leaving items
                    handleItemLeave()
                  }}
             >
               {option.label}
             </div>
           )
         }}

                 pt={{
           root: {
             style: {
               outline: 'none',
               boxShadow: 'none'
             }
           },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               input: { 
                   style: { 
                     padding: '7.5px 8px', // Figma padding: Top 7.5px, Right 8px, Bottom 7.5px, Left 8px
                     fontSize: '14px', // Smaller font size for 32px height
                     lineHeight: '17px', // Adjusted line height
                     color: '#021D2D', // Text color when typing
                     fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                     fontWeight: 400,
                     height: '32px', // Match dropdown height for proper centering
                     display: 'flex',
                     alignItems: 'center'
                   }
                 },
                                           item: { 
              style: { 
                padding: '7.5px 12px', // Figma padding: Top 7.5px, Right 12px, Bottom 7.5px, Left 12px
                fontSize: '14px', // Match dropdown text size
                lineHeight: '17px', // Match dropdown line height
                width: '100%',
                margin: 0,
                borderRadius: '0',
                minHeight: '40px', // Hug (40px) from Figma
                height: '40px', // Fixed height
                color: '#021D2D',
                fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                letterSpacing: '0%', // Letter spacing from Figma
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid #EFEFEF', // border/border-list-separator from Figma
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none'
              }
            },
            
            itemLast: {
              style: {
                borderBottom: 'none'
              }
            },
          
          itemSelected: {
            style: {
              backgroundColor: '#e3f2fd'
            }
          },
                     panel: {
             style: {
               padding: 0,
               margin: 0,
               marginTop: '0px', // No gap
               width: '274px', // Match dropdown width
               borderRadius: '8px',
               boxShadow: 'none',
               border: '1px solid #EFEFEF'
             }
           },
          list: {
            style: {
              padding: 0,
              margin: 0,
              marginTop: 0, // Remove any top margin from list
              paddingTop: 0, // Remove any top padding from list
              width: '100%',
              boxSizing: 'border-box'
            }
          }
        }}
      />
      
             {hasError && (
         <small 
           className="p-error"
           style={{
             display: 'block',
             marginTop: '2px',
             marginLeft: 0,
             paddingLeft: 0,
             textAlign: 'left',
             fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
           }}
         >
           Required
         </small>
       )}

    </div>
  )
})

export default CountryDropdownPrime 

