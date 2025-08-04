import React from 'react';
import { TextField, FormLabel, Box } from '@mui/material';

interface GenericDemoInputProps {
    fieldName?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel';
    placeholder?: string;
    required?: boolean;
    color?: 'default' | 'blue' | 'brand' | 'purple' | 'green' | 'red';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    error?: string;
}

export const GenericDemoInput: React.FC<GenericDemoInputProps> = ({ 
    fieldName = "First name",
    value,
    onChange,
    type = 'text',
    placeholder = "e.g., Sarah",
    required = true,
    color = 'default',
    size = 'md',
    className = '',
    disabled = false,
    error
}) => {
    const [internalValue, setInternalValue] = React.useState('');
    const [showError, setShowError] = React.useState(false);
    const [touched, setTouched] = React.useState(false);
    const [isTyping, setIsTyping] = React.useState(false);

    const currentValue = value !== undefined ? value : internalValue;

    const colors = {
        default: '#646cff',
        blue: '#3b82f6',
        brand: '#0ea5e9',
        purple: '#8b5cf6',
        green: '#10b981',
        red: '#ef4444'
    };

    const sizes = {
        sm: { padding: '6px 12px', fontSize: '14px' },
        md: { padding: '10px 14px', fontSize: '16px' },
        lg: { padding: '10px 14px', fontSize: '18px' }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (onChange) onChange(e);
        else setInternalValue(newValue);
        

        if (showError && newValue.trim() !== '') {
            setIsTyping(true);
        }
        if (newValue.trim() !== '') {
            setShowError(false);
            setIsTyping(false);
        }
    };

    const handleBlur = () => {
        if (touched && !currentValue.trim() && !error) {
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

    const hasError = showError || !!error;
    const sizeStyle = sizes[size];

    return (
        <Box sx={{ width: '100%', maxWidth: '400px' }} className={className}>
            <FormLabel 
                htmlFor={`input-${fieldName}`}
                sx={{
                    display: 'block',
                    marginBottom: '6px',
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#374151',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}
            >
                {fieldName} {required && <span style={{ color: '#ef4444' }}>*</span>}
            </FormLabel>
            
            <TextField
                id={`input-${fieldName}`}
                type={type}
                value={currentValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder={placeholder}
                disabled={disabled}
                variant="outlined"
                fullWidth
                error={hasError}
                helperText={hasError ? (error || 'Required') : ''}
                InputProps={{
                    sx: {
                        borderRadius: '7px',
                        backgroundColor: (() => {
                            if (hasError && !isTyping) return '#FEF2F2'; 
                            if (hasError && isTyping) return '#ffffff';   
                            return '#ffffff';                            
                        })(),
                        fontSize: sizeStyle.fontSize,
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        '& input': {
                            padding: sizeStyle.padding,
                            fontSize: sizeStyle.fontSize,
                            color: '#000000',
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
                            border: `1.5px solid ${hasError ? '#ef4444' : '#BAC1C5'}`,
                            borderRadius: '7px'
                        },
                        '&:hover': {
                            backgroundColor: hasError ? (isTyping ? '#ffffff' : '#FEF2F2') : '#F0F9FF',
                            '& fieldset': {
                                border: `1.5px solid ${hasError ? '#ef4444' : '#EFEFEF'}`
                            }
                        },
                        '&.Mui-focused': {
                            backgroundColor: (() => {
                                if (hasError && !isTyping) return '#FEF2F2 !important';
                                if (hasError && isTyping) return '#ffffff !important';
                                return '#ffffff !important';
                            })(),
                            '& fieldset': {
                                border: `1.5px solid ${hasError ? '#ef4444' : colors[color]}`,
                                boxShadow: 'none'
                            }
                        },
                        '&.Mui-disabled': {
                            opacity: 0.5,
                            '& fieldset': {
                                border: `1.5px solid #BAC1C5`
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

export default GenericDemoInput;