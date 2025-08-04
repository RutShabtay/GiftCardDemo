import React from 'react';
import { TextField, FormLabel, Box, Typography } from '@mui/material';

const MuiInput: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(false);

  return (
    <div style={{ width: '274px' }}>
      <Box>
        <FormLabel 
          htmlFor="mui-firstname"
          sx={{
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
            paddingLeft: 0,
            '&::after': {
              content: '" *"',
              color: '#1F1F1F'
            }
          }}
        >
          First name
        </FormLabel>
        <TextField
          id="mui-firstname"
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
          variant="outlined"
          fullWidth
          InputProps={{
            sx: {
              borderRadius: '4px',
              backgroundColor: (() => {
                if (showError && !isTyping) return '#FEF2F2';
                if (showError && isTyping) return '#ffffff';
                return '#ffffff';
              })(),
              fontSize: '14px',
              lineHeight: '17px',
              fontFamily: "'Lato', sans-serif",
              height: '32px',
                              '& input': {
                  padding: '7.5px 8px',
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#000000',
                  height: '17px',
                  '&::placeholder': {
                    color: '#808D95',
                    opacity: 1
                  }
                }
            }
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: '1px solid #BAC1C5',
                borderRadius: '4px'
              },
              '&:hover': {
                backgroundColor: showError ? undefined : '#F0F9FF',
                '& fieldset': {
                  border: '1px solid #EFEFEF'
                }
              },
              '&.Mui-focused': {
                backgroundColor: (() => {
                  if (showError && !isTyping) return '#FEF2F2 !important';
                  if (showError && isTyping) return '#ffffff !important';
                  return '#ffffff !important';
                })(),
                '& fieldset': {
                  border: showError ? '2px solid #EF4444' : '1px solid #646cff',
                  boxShadow: 'none'
                }
              },
              ...(showError && {
                backgroundColor: isTyping ? '#ffffff !important' : '#FEF2F2 !important',
                '& fieldset': {
                  border: '1px solid #EF4444 !important'
                },
                '&:hover': {
                  backgroundColor: isTyping ? '#ffffff !important' : '#FEF2F2 !important',
                  '& fieldset': {
                    border: '1px solid #EF4444 !important'
                  }
                }
              })
            }
          }}
        />
        {showError && (
          <Typography 
            variant="caption" 
            sx={{
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
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default MuiInput; 