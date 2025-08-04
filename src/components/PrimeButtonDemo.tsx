import React, { useState } from 'react';
import { Button as PrimeButton } from 'primereact/button';
const PrimeButtonDemo: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      {/* Toggle for testing disabled state */}
             <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div
          onClick={() => setIsDisabled(!isDisabled)}
          style={{
            width: '40px',
            height: '20px',
            backgroundColor: isDisabled ? '#CCCCCC' : '#4CAF50',
            borderRadius: '10px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target as HTMLDivElement).style.opacity = '0.8'}
          onMouseLeave={(e) => (e.target as HTMLDivElement).style.opacity = '1'}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#fff',
              borderRadius: '50%',
              position: 'absolute',
              top: '2px',
              left: isDisabled ? '2px' : '22px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          />
        </div>
        <span style={{ fontSize: '14px', color: '#666' }}>
          {isDisabled ? 'Disabled' : 'Enabled'}
        </span>
      </div>

             <div style={{ 
         display: 'flex', 
         alignItems: 'center',
         gap: '96px',
         padding: '24px',
         marginBottom: '0px',
         justifyContent: 'flex-start'
       }}>
                 <PrimeButton 
           label="Back" 
           text 
           disabled={isDisabled}
           className="custom-back-button"
           style={{ 
             // Back button styling - Minimal type
             backgroundColor: 'transparent', // No background for regular state
             border: 'none', // No border for minimal type
             color: '#021D2D', // text-primary color
             borderRadius: '4px', // Radius 4px as specified
             width: '66px', // Fixed width as specified
             minWidth: '60px', // Min width as specified
             height: '32px', // Hug height (max 32px)
             maxHeight: '32px',
             padding: '7px 12px', // Top/Bottom 7px, Left/Right spacing-s
             fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif', // Font: Lato with fallbacks
             fontWeight: 400, // Weight: 400 (Regular)
             fontSize: '14px', // Size: 14px
             lineHeight: '17px', // Line height: 17px (exactly as Figma)
             letterSpacing: 'normal', // Letter spacing: 0%
             textAlign: 'center', // Horizontal align: Center
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             gap: '4px', // Gap 4px as specified
             marginLeft: '-24px' // Move button more to the left
           }}
        />
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <PrimeButton 
            label="Cancel" 
            outlined 
            disabled={isDisabled}
            className="custom-cancel-button"
            style={{
              backgroundColor: 'transparent', // No background for regular state
              border: '1px solid #021D2D', // Border for regular state
              color: '#021D2D', // on-secondary-regular text color
              borderRadius: '4px', // Radius 4px as specified
              width: '66px', // Fixed width as specified
              minWidth: '60px', // Min width as specified
              height: '32px', // Hug height (max 32px)
              maxHeight: '32px',
              padding: '7px 12px', // Top/Bottom 7px, Left/Right spacing-s
              fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif', // Font: Lato with fallbacks
              fontWeight: 400, // Weight: 400 (Regular)
              fontSize: '14px', // Size: 14px
              lineHeight: '17px', // Line height: 17px (exactly as Figma)
              letterSpacing: 'normal', // Letter spacing: 0%
              textAlign: 'center', // Horizontal align: Center
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px' // Gap 4px as specified
            }}
          />
          <PrimeButton 
            label="Done" 
            disabled={isDisabled}
            className="custom-continue-button"
            style={{
              backgroundColor: '#FFBC00', // Primary color from Figma
              border: '1px solid #FFBC00',
              color: '#021D2D', // text-primary color
              borderRadius: '4px', // Radius 4px as specified
              width: '66px', // Fixed width as specified
              minWidth: '60px', // Min width as specified
              height: '32px', // Hug height (max 32px)
              maxHeight: '32px',
              padding: '7px 12px', // Top/Bottom 7px, Left/Right spacing-s
              fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif', // Font: Lato with fallbacks
              fontWeight: 400, // Weight: 400 (Regular)
              fontSize: '14px', // Size: 14px
              lineHeight: '17px', // Line height: 17px (exactly as Figma)
              letterSpacing: 'normal', // Letter spacing: 0%
              textAlign: 'center', // Horizontal align: Center
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px' // Gap 4px as specified
            }}
          />
        </div>
      </div>
      {/* Enhanced CSS with higher specificity to override PrimeReact defaults */}
      <style>{`
        /* Back button styling - Minimal type */
        .custom-back-button.p-button {
          width: 66px !important;
          min-width: 60px !important;
          height: 32px !important;
          max-height: 32px !important;
          border-radius: 4px !important;
          padding: 7px 12px !important;
          gap: 4px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          letter-spacing: normal !important;
          text-align: center !important;
          box-shadow: none !important; /* Remove default PrimeReact shadow */
          outline: none !important; /* Remove outline border on focus/click */
          background-color: transparent !important; /* No background for regular state */
          border: none !important; /* No border for minimal type */
          color: #021D2D !important; /* text-primary color */
        }
        .custom-back-button.p-button:focus-visible {
          outline: none !important; /* Remove focus-visible outline */
          box-shadow: none !important;
        }
        .custom-back-button.p-button .p-button-label {
          font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          letter-spacing: normal !important;
          color: #021D2D !important;
        }
        .custom-back-button.p-button:focus {
          box-shadow: none !important; /* Remove shadow as not specified in Figma */
          outline: none !important;
          background-color: #E1E7EA !important; /* Activated background color from Figma */
          border: none !important;
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-back-button.p-button:focus .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-back-button.p-button:active {
          background-color: #E1E7EA !important; /* Pressed background color from Figma */
          border: none !important;
          color: #021D2D !important; /* Keep text color consistent */
          transform: scale(0.98) !important;
          box-shadow: none !important;
          outline: none !important; /* Remove outline on active */
        }
        .custom-back-button.p-button:active .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-back-button.p-button:not(.p-disabled):hover {
          background-color: #E1E7EA !important; /* Hover background color from Figma (45%) */
          border: none !important;
          color: #021D2D !important; /* Keep text color consistent */
          box-shadow: none !important; /* Remove shadow on hover */
          outline: none !important; /* Remove outline on hover */
        }
        .custom-back-button.p-button:not(.p-disabled):hover .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        /* Disabled state for back button */
        .custom-back-button.p-button.p-disabled {
          background-color: transparent !important; /* No background for disabled */
          border: none !important; /* No border for minimal type */
          color: #BAC1C5 !important; /* Disabled text color from Figma */
          opacity: 1 !important; /* Remove opacity to match Figma exactly */
          box-shadow: none !important; /* Remove shadow on disabled */
          outline: none !important; /* Remove outline on disabled */
        }
        .custom-back-button.p-button.p-disabled .p-button-label {
          color: #BAC1C5 !important; /* Disabled text color from Figma */
        }
        /* Cancel button styling - Medium (default) */
        .custom-cancel-button.p-button,
        .custom-cancel-button.p-button.p-button-outlined {
          width: 66px !important;
          min-width: 60px !important;
          height: 32px !important;
          max-height: 32px !important;
          border-radius: 4px !important;
          padding: 7px 12px !important;
          gap: 4px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          letter-spacing: normal !important;
          text-align: center !important;
          box-shadow: none !important; /* Remove default PrimeReact shadow */
          outline: none !important; /* Remove outline border on focus/click */
          background: transparent !important; /* Force transparent background */
          background-color: transparent !important; /* No background for regular state */
          border: 1px solid #021D2D !important; /* Border for regular state */
          border-color: #021D2D !important;
          color: #021D2D !important; /* on-secondary-regular text color */
        }
        .custom-cancel-button.p-button:focus-visible {
          outline: none !important; /* Remove focus-visible outline */
          box-shadow: none !important;
        }
        .custom-cancel-button.p-button .p-button-label {
          font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          letter-spacing: normal !important;
          color: #021D2D !important;
        }
        .custom-cancel-button.p-button:focus,
        .custom-cancel-button.p-button.p-button-outlined:focus {
          box-shadow: none !important; /* Remove shadow as not specified in Figma */
          outline: none !important;
          background: #E1E7EA !important; /* Force activated background color from Figma */
          background-color: #E1E7EA !important; /* Activated background color from Figma */
          border: 1px solid #021D2D !important;
          border-color: #021D2D !important;
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-cancel-button.p-button:focus .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-cancel-button.p-button:active,
        .custom-cancel-button.p-button.p-button-outlined:active {
          background: #E1E7EA !important; /* Force pressed background color from Figma */
          background-color: #E1E7EA !important; /* Pressed background color from Figma */
          border: 1px solid #021D2D !important;
          border-color: #021D2D !important;
          color: #021D2D !important; /* Keep text color consistent */
          transform: scale(0.98) !important;
          box-shadow: none !important;
          outline: none !important; /* Remove outline on active */
        }
        .custom-cancel-button.p-button:active .p-button-label,
        .custom-cancel-button.p-button.p-button-outlined:active .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        /* Force active state even when mouse is down */
        .custom-cancel-button.p-button.p-component:active,
        .custom-cancel-button.p-button.p-button-outlined.p-component:active {
          background-color: #E1E7EA !important;
          border-color: #021D2D !important;
          transform: scale(0.98) !important;
        }
        .custom-cancel-button.p-button:not(.p-disabled):hover,
        .custom-cancel-button.p-button.p-button-outlined:not(.p-disabled):hover {
          background: #E1E7EA !important; /* Force hover background color from Figma */
          background-color: #E1E7EA !important; /* Hover background color from Figma */
          border: 1px solid #021D2D !important;
          border-color: #021D2D !important;
          color: #021D2D !important; /* Keep text color consistent */
          box-shadow: none !important; /* Remove shadow on hover */
          outline: none !important; /* Remove outline on hover */
        }
        .custom-cancel-button.p-button:not(.p-disabled):hover .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        /* Disabled state for cancel button */
        .custom-cancel-button.p-button.p-disabled,
        .custom-cancel-button.p-button.p-button-outlined.p-disabled {
          background-color: transparent !important; /* No background for disabled */
          border: 1px solid #BAC1C5 !important; /* Disabled border color from Figma */
          border-color: #BAC1C5 !important;
          color: #BAC1C5 !important; /* Disabled text color from Figma */
          opacity: 1 !important; /* Remove opacity to match Figma exactly */
          box-shadow: none !important; /* Remove shadow on disabled */
          outline: none !important; /* Remove outline on disabled */
        }
        .custom-cancel-button.p-button.p-disabled .p-button-label {
          color: #BAC1C5 !important; /* Disabled text color from Figma */
        }
        /* Continue button styling - Primary Medium (default) */
        .custom-continue-button.p-button {
          width: 66px !important;
          min-width: 60px !important;
          height: 32px !important;
          max-height: 32px !important;
          border-radius: 4px !important;
          padding: 7px 12px !important;
          gap: 4px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          letter-spacing: normal !important;
          text-align: center !important;
          box-shadow: none !important; /* Remove default PrimeReact shadow */
          outline: none !important; /* Remove outline border on focus/click */
          border: 1px solid transparent !important; /* Ensure consistent border */
        }
        .custom-continue-button.p-button:focus-visible {
          outline: none !important; /* Remove focus-visible outline */
          box-shadow: none !important;
        }
        .custom-continue-button.p-button .p-button-label {
          font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif !important;
          font-weight: 400 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          letter-spacing: normal !important;
          color: #021D2D !important;
        }
        .custom-continue-button.p-button:focus {
          box-shadow: none !important; /* Remove shadow as not specified in Figma */
          outline: none !important;
          background-color: #E08E00 !important; /* Activated color from Figma */
          border: 1px solid #E08E00 !important;
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-continue-button.p-button:focus .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-continue-button.p-button:active {
          background-color: #E08E00 !important; /* Pressed color from Figma */
          border: 1px solid #E08E00 !important;
          color: #021D2D !important; /* Keep text color consistent */
          transform: scale(0.98) !important;
          box-shadow: none !important;
          outline: none !important; /* Remove outline on active */
        }
        .custom-continue-button.p-button:active .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        .custom-continue-button.p-button:not(.p-disabled):hover {
          background-color: #F0B000 !important; /* Hover color from Figma */
          border: 1px solid #F0B000 !important;
          color: #021D2D !important; /* Keep text color consistent */
          box-shadow: none !important; /* Remove shadow on hover */
          outline: none !important; /* Remove outline on hover */
        }
        .custom-continue-button.p-button:not(.p-disabled):hover .p-button-label {
          color: #021D2D !important; /* Keep text color consistent */
        }
        /* Prevent hover effect when button is focused (clicked) - like MUI behavior */
        .custom-continue-button.p-button:not(.p-disabled):focus:hover {
          background-color: #E08E00 !important; /* Keep the focus color, don't change on hover */
          border: 1px solid #E08E00 !important;
          color: #021D2D !important;
          box-shadow: none !important;
          outline: none !important;
        }
        .custom-continue-button.p-button:not(.p-disabled):focus:hover .p-button-label {
          color: #021D2D !important;
        }
        /* Disabled state for continue button */
        .custom-continue-button.p-button.p-disabled {
          background-color: #CCCCCC !important; /* Disabled color from Figma */
          border: 1px solid #CCCCCC !important;
          color: #FFFFFF !important; /* White text for disabled state */
          opacity: 1 !important; /* Remove opacity to match Figma exactly */
          box-shadow: none !important; /* Remove shadow on disabled */
          outline: none !important; /* Remove outline on disabled */
        }
        .custom-continue-button.p-button.p-disabled .p-button-label {
          color: #FFFFFF !important; /* White text for disabled state */
        }
        /* Ensure all our buttons have smooth transitions like Material-UI */
        .custom-back-button.p-button,
        .custom-cancel-button.p-button,
        .custom-cancel-button.p-button.p-button-outlined,
        .custom-continue-button.p-button {
          transition: all 0.15s ease-in-out !important;
        }
      `}</style>
    </div>
  );
};
export default PrimeButtonDemo; 
