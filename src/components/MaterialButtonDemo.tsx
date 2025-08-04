import React, { useState } from 'react';
import { Button as MuiButton, Box } from '@mui/material';

const MaterialButtonDemo: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Box>
      {/* Toggle for testing disabled state */}
             <Box sx={{ marginBottom: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          onClick={() => setIsDisabled(!isDisabled)}
          sx={{
            width: 40,
            height: 20,
            backgroundColor: isDisabled ? '#CCCCCC' : '#4CAF50',
            borderRadius: 10,
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              backgroundColor: '#fff',
              borderRadius: '50%',
              position: 'absolute',
              top: 2,
              left: isDisabled ? 2 : 22,
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
        <Box component="span" sx={{ fontSize: '14px', color: '#666' }}>
          {isDisabled ? 'Disabled' : 'Enabled'}
        </Box>
      </Box>

             <Box sx={{ 
         display: 'flex', 
         alignItems: 'center',
         gap: 12,
         padding: 3,
         marginBottom: 0,
         justifyContent: 'flex-start'
       }}>
                 <MuiButton 
           variant="text" 
           disabled={isDisabled}
           sx={{ 
             // Back button styling - Minimal type
             backgroundColor: 'transparent', // No background for regular state
             color: '#021D2D', // text-primary color
             fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif', // Font: Lato with fallbacks
             fontWeight: 400, // Weight: 400 (Regular)
             fontSize: '14px', // Size: 14px
             lineHeight: '17px', // Line height: 17px (exactly as Figma)
             letterSpacing: 'normal', // Letter spacing: 0%
             textAlign: 'center', // Horizontal align: Center
             width: '66px', // Fixed width as specified  
             minWidth: '60px', // Min width as specified
             height: '32px', // Hug height (max 32px)
             maxHeight: '32px',
             padding: '7px 12px', // Top/Bottom 7px, Left/Right spacing-s
             borderRadius: '4px', // Radius 4px as specified
             border: 'none', // No border for minimal type
             textTransform: 'none',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             gap: '4px', // Gap 4px as specified
             boxShadow: 'none', // Remove default Material-UI shadow
             outline: 'none', // Remove outline border on focus/click
             marginLeft: '-24px', // Move button more to the left
            '&:focus-visible': {
              outline: 'none', // Remove focus-visible outline
              boxShadow: 'none',
            },
            // Hover state
            '&:hover': {
              backgroundColor: '#E1E7EA', // Hover background color from Figma (45%)
              color: '#021D2D', // Keep text color consistent
              border: 'none',
              boxShadow: 'none', // Remove shadow on hover
              outline: 'none', // Remove outline on hover
            },
            // Active/Pressed state
            '&:active': {
              backgroundColor: '#E1E7EA', // Pressed background color from Figma
              color: '#021D2D', // Keep text color consistent
              border: 'none',
              transform: 'scale(0.98)',
              boxShadow: 'none', // Remove shadow on active
              outline: 'none', // Remove outline on active
            },
            // Focus/Activated state
            '&:focus': {
              backgroundColor: '#E1E7EA', // Activated background color from Figma
              color: '#021D2D', // Keep text color consistent
              border: 'none',
              boxShadow: 'none', // Remove shadow as not specified in Figma
              outline: 'none', // Remove outline on focus
            },
            // Disabled state
            '&.Mui-disabled': {
              backgroundColor: 'transparent', // No background for disabled
              color: '#BAC1C5', // Disabled text color from Figma
              border: 'none', // No border for minimal type
              opacity: 1, // Remove opacity to match Figma exactly
              boxShadow: 'none', // Remove shadow on disabled
              outline: 'none', // Remove outline on disabled
            },
            transition: 'all 0.15s ease-in-out',
          }}
        >
          Back
        </MuiButton>
        
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <MuiButton 
            variant="outlined"
            disabled={isDisabled}
            sx={{
              // Cancel button styling - Medium (default) size (exactly like Figma)
              background: 'transparent', // Force transparent background
              backgroundColor: 'transparent', // No background for regular state
              color: '#021D2D', // on-secondary-regular text color
              fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif', // Font: Lato with fallbacks
              fontWeight: 400, // Weight: 400 (Regular)
              fontSize: '14px', // Size: 14px
              lineHeight: '17px', // Line height: 17px (exactly as Figma)
              letterSpacing: 'normal', // Letter spacing: 0%
              textAlign: 'center', // Horizontal align: Center
              width: '66px', // Fixed width as specified  
              minWidth: '60px', // Min width as specified
              height: '32px', // Hug height (max 32px)
              maxHeight: '32px',
              padding: '7px 12px', // Top/Bottom 7px, Left/Right spacing-s
              borderRadius: '4px', // Radius 4px as specified
              border: '1px solid #021D2D', // Border for regular state
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px', // Gap 4px as specified
              boxShadow: 'none', // Remove default Material-UI shadow
              outline: 'none', // Remove outline border on focus/click
              '&:focus-visible': {
                outline: 'none', // Remove focus-visible outline
                boxShadow: 'none',
              },
              // Hover state (exactly like Figma)
              '&:hover': {
                background: '#E1E7EA', // Force hover background from Figma
                backgroundColor: '#E1E7EA', // Hover background color from Figma
                color: '#021D2D', // Keep text color consistent
                border: '1px solid #021D2D',
                borderColor: '#021D2D', // Force border color
                boxShadow: 'none', // Remove shadow on hover
                outline: 'none', // Remove outline on hover
              },
              // Active/Pressed state (exactly like Figma)
              '&:active': {
                background: '#E1E7EA', // Force pressed background from Figma
                backgroundColor: '#E1E7EA', // Pressed background color from Figma
                color: '#021D2D', // Keep text color consistent
                border: '1px solid #021D2D',
                borderColor: '#021D2D', // Force border color
                transform: 'scale(0.98)',
                boxShadow: 'none', // Remove shadow on active
                outline: 'none', // Remove outline on active
              },
              // Focus/Activated state (exactly like Figma)
              '&:focus': {
                background: '#E1E7EA', // Force activated background from Figma
                backgroundColor: '#E1E7EA', // Activated background color from Figma
                color: '#021D2D', // Keep text color consistent
                border: '1px solid #021D2D',
                borderColor: '#021D2D', // Force border color
                boxShadow: 'none', // Remove shadow as not specified in Figma
                outline: 'none', // Remove outline on focus
              },
              // Disabled state
              '&.Mui-disabled': {
                backgroundColor: 'transparent', // No background for disabled
                color: '#BAC1C5', // Disabled text color from Figma
                border: '1px solid #BAC1C5', // Disabled border color
                opacity: 1, // Remove opacity to match Figma exactly
                boxShadow: 'none', // Remove shadow on disabled
                outline: 'none', // Remove outline on disabled
              },
              transition: 'all 0.15s ease-in-out',
            }}
          >
            Cancel
          </MuiButton>
          <MuiButton 
            variant="contained"
            disabled={isDisabled}
            sx={{
              // Primary button styling - Medium (default) size
              backgroundColor: '#FFBC00', // Primary color from Figma
              color: '#021D2D', // text-primary color
              fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif', // Font: Lato with fallbacks
              fontWeight: 400, // Weight: 400 (Regular)
              fontSize: '14px', // Size: 14px
              lineHeight: '17px', // Line height: 17px (exactly as Figma)
              letterSpacing: 'normal', // Letter spacing: 0%
              textAlign: 'center', // Horizontal align: Center
              width: '66px', // Fixed width as specified  
              minWidth: '60px', // Min width as specified
              height: '32px', // Hug height (max 32px)
              maxHeight: '32px',
              padding: '7px 12px', // Top/Bottom 7px, Left/Right spacing-s
              borderRadius: '4px', // Radius 4px as specified
              border: '1px solid #FFBC00', // Match background color
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px', // Gap 4px as specified
              boxShadow: 'none', // Remove default Material-UI shadow
              outline: 'none', // Remove outline border on focus/click
              '&:focus-visible': {
                outline: 'none', // Remove focus-visible outline
                boxShadow: 'none',
              },
              // Hover state
              '&:hover': {
                backgroundColor: '#F0B000', // Hover color from Figma
                color: '#021D2D', // Keep text color consistent
                border: '1px solid #F0B000',
                boxShadow: 'none', // Remove shadow on hover
                outline: 'none', // Remove outline on hover
              },
              // Active/Pressed state
              '&:active': {
                backgroundColor: '#E08E00', // Pressed color from Figma
                color: '#021D2D', // Keep text color consistent
                border: '1px solid #E08E00',
                transform: 'scale(0.98)',
                boxShadow: 'none', // Remove shadow on active
                outline: 'none', // Remove outline on active
              },
              // Focus/Activated state
              '&:focus': {
                backgroundColor: '#E08E00', // Activated color from Figma
                color: '#021D2D', // Keep text color consistent
                border: '1px solid #E08E00',
                boxShadow: 'none', // Remove shadow as not specified in Figma
                outline: 'none', // Remove outline on focus
              },
              // Disabled state
              '&.Mui-disabled': {
                backgroundColor: '#CCCCCC', // Disabled color from Figma
                color: '#FFFFFF', // White text for disabled state
                border: '1px solid #CCCCCC',
                opacity: 1, // Remove opacity to match Figma exactly
                boxShadow: 'none', // Remove shadow on disabled
                outline: 'none', // Remove outline on disabled
              },
              transition: 'all 0.15s ease-in-out',
            }}
          >
            Done
          </MuiButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MaterialButtonDemo; 
