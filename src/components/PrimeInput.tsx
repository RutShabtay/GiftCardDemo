import React from 'react';
import { InputText } from 'primereact/inputtext';

const PrimeInput: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);

  const getBackgroundColor = () => {
    if (showError && !isTyping) return '#FEF2F2';
    if (showError && isTyping) return '#ffffff';
    return '#ffffff';
  };

  const getBorderColor = () => {
    if (showError) return '#EF4444';
    return '#BAC1C5';
  };

  const getBorderWidth = () => {
    if (showError) return '1px';
    return '1px';
  };

  return (
    <div style={{ width: '274px' }}>
      <div>
        <label 
          htmlFor="prime-firstname"
          style={{
            display: 'block',
            marginBottom: '4px',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0%',
            color: '#464E53',
            fontFamily: "'Lato', sans-serif",
            textAlign: 'left',
            marginLeft: 0,
            paddingLeft: 0
          }}
        >
          First name <span style={{ color: '#1F1F1F' }}>*</span>
        </label>
        <InputText
          id="prime-firstname"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (showError && e.target.value.trim() !== '') {
              setIsTyping(true);
            }
            if (e.target.value.trim() !== '') {
              setShowError(false);
              setIsTyping(false);
            }
          }}
          onFocus={() => {
            setTouched(true);
            if (showError) {
              setIsTyping(true);
            }
          }}
          onBlur={() => {
            if (touched && value.trim() === '') {
              setShowError(true);
              setIsTyping(false);
            }
          }}
          placeholder="e.g., Sarah"
          style={{
            width: '100%',
            padding: '7.5px 8px',
            fontSize: '14px',
            lineHeight: '17px',
            fontFamily: "'Lato', sans-serif",
            border: `${getBorderWidth()} solid ${getBorderColor()}`,
            borderRadius: '4px',
            backgroundColor: getBackgroundColor(),
            color: '#000000',
            outline: 'none',
            transition: 'all 0.2s ease',
            boxSizing: 'border-box',
            height: '32px'
          }}
        />
        {showError && (
          <div 
            style={{
              color: '#EF4444',
              fontSize: '14px',
              marginTop: '2px',
              fontWeight: '400',
              marginLeft: 0,
              paddingLeft: 0,
              fontFamily: "'Lato', sans-serif",
              display: 'block',
              textAlign: 'left'
            }}
          >
            Required
          </div>
        )}
        <style>
          {`
            #prime-firstname::placeholder {
              color: #808D95 !important;
              opacity: 1 !important;
            }
            #prime-firstname:hover {
              ${!showError ? `
                border: 1px solid #EFEFEF !important;
                background-color: #F0F9FF !important;
              ` : ''}
            }
            #prime-firstname:focus {
              ${showError 
                ? `border: 1px solid #EF4444 !important; background-color: ${isTyping ? '#ffffff' : '#FEF2F2'} !important;`
                : 'border: 1px solid #646cff !important; background-color: #ffffff !important;'
              }
              box-shadow: none !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default PrimeInput; 