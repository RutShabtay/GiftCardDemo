import React, { useState, useRef, useEffect } from 'react';
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Paper,
  FormControl,
  Select,
  MenuItem,
  IconButton
} from '@mui/material';
import {
  LocalizationProvider,
  StaticDatePicker,
} from '@mui/x-date-pickers';
import type { PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CalendarDays } from 'lucide-react';
import { styled } from '@mui/material/styles';

const StyledDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  '& .MuiPickersLayout-contentWrapper': {
    padding: '0',
    paddingTop: '0',
  },
  '& .MuiDayCalendar-header, & .MuiDayCalendar-weekContainer': {
  },
  '& .MuiDayCalendar-weekDayLabel': {
    width: '34px',
    height: '34px',
    margin: '0 5px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#6D7275',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      width: '30px',
      height: '30px',
      margin: '0 3px',
    },
  },
  '& .MuiDayCalendar-weekContainer': {
    justifyContent: 'space-around',
    margin: '0',
    padding: '0',
    lineHeight: '1',
  },
  '& .MuiPickersDay-root': {
    width: '32px',
    height: '32px',
    margin: '0 0.5px',
    fontSize: '14px',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '26px',
      height: '26px',
      margin: '0 2px',
    },
    '&.Mui-selected': {
      backgroundColor: '#b9d0ff !important',
      color: '#000 !important',
      fontWeight: '500',
    },
    '&:hover': {
      backgroundColor: '#f0f0f0 !important',
    },
    '&.MuiPickersDay-today': {
      border: 'none',
      color: '#1976d2',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  '& .MuiPickersDay-dayOutsideMonth': {
    color: '#D3D3D3',
  },
}));

interface MaterialUIDatePickerProps {}

function CustomHeader(props: PickersCalendarHeaderProps & { setViewedMonth: (date: Dayjs) => void }) {
  const { currentMonth, onMonthChange, setViewedMonth } = props;
  const months = Array.from({ length: 12 }, (_, i) => dayjs().month(i).format('MMM'));
  const years = Array.from({ length: 21 }, (_, i) => 2015 + i);
  
  const handleMonthChange = (month: number) => {
    const newDate = currentMonth.month(month);
    setViewedMonth(newDate);
    onMonthChange(newDate);
  };
  
  const handleYearChange = (year: number) => {
    const newDate = currentMonth.year(year);
    setViewedMonth(newDate);
    onMonthChange(newDate);
  };
  
  return (
    <Box
      sx={{
        padding: '8px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <IconButton size="small" onClick={() => onMonthChange(currentMonth.clone().subtract(1, 'month'))}>
        <ChevronLeftIcon />
      </IconButton>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Select
          value={currentMonth.month()}
          onChange={(e) => handleMonthChange(e.target.value as number)}
          variant="standard"
          disableUnderline
          IconComponent={ArrowDropDownIcon}
          sx={{ '& .MuiSelect-icon': { color: 'black' } }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            sx: {
              '& .MuiPaper-root': {
                zIndex: 99999,
              },
            },
            slotProps: {
              paper: {
                sx: {
                  marginTop: '120px',
                },
              },
            },
          }}
        >
          {months.map((month, index) => (
            <MenuItem
              key={month}
              value={index}
              sx={{
                backgroundColor: currentMonth.month() === index ? '#f3f7ff' : 'inherit',
                '&.Mui-selected': {
                  backgroundColor: '#f3f7ff !important',
                },
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              {month}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={currentMonth.year()}
          onChange={(e) => handleYearChange(e.target.value as number)}
          variant="standard"
          disableUnderline
          IconComponent={ArrowDropDownIcon}
          sx={{ '& .MuiSelect-icon': { color: 'black' } }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            sx: {
              '& .MuiPaper-root': {
                zIndex: 99999,
              },
            },
            slotProps: {
              paper: {
                sx: {
                  marginTop: '310px',
                },
              },
            },
          }}
        >
          {years.map((year) => (
            <MenuItem
              key={year}
              value={year}
              sx={{
                backgroundColor: currentMonth.year() === year ? '#f3f7ff' : 'inherit',
                '&.Mui-selected': {
                  backgroundColor: '#f3f7ff !important',
                },
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              {year}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <IconButton size="small" onClick={() => onMonthChange(currentMonth.clone().add(1, 'month'))}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

export const MaterialUIDatePicker: React.FC<MaterialUIDatePickerProps> = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null); 
  const inputContainerRef = useRef<HTMLDivElement>(null); 
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [viewedMonth, setViewedMonth] = useState<Dayjs>(dayjs());
  const [muiError, setMuiError] = useState<string | null>(null);
  const [calendarPosition, setCalendarPosition] = useState<{ top?: number | string, left?: number | string, position: 'absolute' | 'fixed', width?: number }>({ position: 'fixed' });
  const [lastScrollY, setLastScrollY] = useState(0);
  const CALENDAR_WIDTH = 315; 

  const handleDateSelection = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
    setShowCalendar(false);
    if (newValue) {
      if (newValue.isBefore(dayjs(), 'day')) {
        setMuiError('Helper text: Date must be in the future');
      } else {
        setMuiError(null);
      }
      setViewedMonth(newValue);
    } else {
      setMuiError(null);
    }
  };

  const calculateCalendarPosition = () => {
    if (inputContainerRef.current) {
      const inputRect = inputContainerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isMobile = viewportWidth <= 768;
      
      let newTop, newLeft;
      
      if (isMobile) {
        // On mobile, use medium width calendar
        const mobileCalendarWidth = Math.min(viewportWidth - 20, 320); // Medium width for mobile
        newTop = inputRect.bottom - 40; // Quadruple overlap with input - 40px above bottom
        newLeft = inputRect.left; // Start exactly where input starts
        
        setCalendarPosition({
          position: 'fixed',
          top: newTop,
          left: newLeft,
          width: mobileCalendarWidth,
        });
      } else {
        // Desktop positioning (original logic)
        const spaceToRight = viewportWidth - inputRect.right;
        
        newTop = inputRect.top;
        
        if (spaceToRight >= CALENDAR_WIDTH + 10) {
          newLeft = inputRect.right + 10;
        } else {
          newLeft = inputRect.left - CALENDAR_WIDTH - 10;
        }
        
        setCalendarPosition({
          position: 'fixed',
          top: newTop,
          left: newLeft,
        });
      }
    }
  };

  const handleOpen = () => {
    console.log('handleOpen called');
    setViewedMonth(selectedDate || dayjs());
    setShowCalendar(true);
    setLastScrollY(window.scrollY); // Set initial scroll position
    console.log('showCalendar set to true');
    setTimeout(() => {
      calculateCalendarPosition();
      console.log('Calendar position calculated');
    }, 0);
  };

  useEffect(() => {
    const handleResize = () => {
      if (showCalendar) {
        calculateCalendarPosition();
      }
    };
    
    const handleScroll = () => {
      if (showCalendar) {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);
        
        // On mobile, allow a bit more scroll before closing
        const isMobile = window.innerWidth <= 768;
        const scrollThreshold = isMobile ? 15 : 10; // 15px on mobile, 10px on desktop
        
        if (scrollDifference > scrollThreshold) {
          console.log('Scroll threshold exceeded, closing calendar');
          setShowCalendar(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true); // true for capture phase
    
    const handleOutsideClick = (event: MouseEvent) => {
      console.log('Outside click detected');
      if ((event.target as Element).closest('.MuiPopover-root')) {
        return;
      }
      if (
        containerRef.current && !containerRef.current.contains(event.target as Node) &&
        !(document.getElementById('calendar-popper-root')?.contains(event.target as Node)) 
      ) {
        console.log('Closing calendar');
        setShowCalendar(false);
      }
    };
    
    if (showCalendar) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showCalendar]);

  useEffect(() => {
    if (showCalendar) {
      calculateCalendarPosition();
    }
  }, [showCalendar]);

  const getBackgroundColor = () => {
    if (muiError) return '#ffebee';
    if (isHovering) return '#f3f7ff'; 
    return 'white';
  };

  const getBorderColor = () => {
    if (muiError) return '#e24c4c'; 
    if (isHovering) return '#DDE2E5'; 
    if (showCalendar) return '#6780FF'; 
    return '#BAC1C5'; 
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <Box style={{ flex: '1', minWidth: '350px', maxWidth: '500px' }}>
        <Box
          ref={containerRef} 
          style={{
            margin: '20px 0',
            width: '340px', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative', 
          }}
        >
          <Box style={{ width: '274px' }}>
            <Typography 
              component="div" 
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
              Date of birth
            </Typography>
          </Box>
          <FormControl ref={inputContainerRef} error={!!muiError} style={{ width: '274px', minHeight: '76px' }}>
            <TextField
              placeholder="Select date"
              onClick={handleOpen}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              value={selectedDate ? selectedDate.format('MMM DD, YYYY') : ''}
              error={!!muiError}
              label=""
              InputLabelProps={{ shrink: false, style: { display: 'none' } }}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end" sx={{ cursor: 'pointer', marginRight: '-8px' }}>
                    <div
                      onClick={() => {
                        handleOpen();
                      }}
                      style={{
                        padding: '4px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <CalendarDays size={17} color="#BAC1C5" />
                    </div>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '274px', cursor: 'pointer',
                '& .MuiOutlinedInput-root': {
                  height: '32px',
                  backgroundColor: `${getBackgroundColor()} !important`,
                  transition: 'background-color 0.2s, border-color 0.2s',
                  '& fieldset': {
                    borderColor: `${getBorderColor()} !important`,
                    borderWidth: '1px !important',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: `${getBorderColor()} !important`,
                  },
                  '&:hover fieldset': {
                    borderColor: `${getBorderColor()} !important`,
                  },
                },
                '& .MuiInputBase-input': {
                  padding: '7px 14px',
                  cursor: 'pointer',
                  color: selectedDate ? '#021D2D' : '#808D95',
                  fontSize: '14px',
                  fontFamily: "'Lato', sans-serif",
                  lineHeight: '17px',
                  '&::placeholder': {
                    color: '#808D95',
                    opacity: 1,
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '14px',
                    lineHeight: '17px',
                  },
                },
              }}
            />
            {muiError && (
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
                {muiError}
              </Typography>
            )}
          </FormControl>
          {showCalendar && (
            <Paper
              elevation={8}
              id="calendar-popper-root" 
              sx={{
                width: calendarPosition.width || CALENDAR_WIDTH, 
                                  borderRadius: 2, overflow: 'hidden', border: '1px solid #e0e0e0',
                  backgroundColor: 
'white',
                  maxHeight: 'none',
                  '& .MuiPickersLayout-root': {
                    overflow: 'hidden'
                  },
                zIndex: 100,
                padding: 0,
                top: '100px',
                left: '100px',
                ...calendarPosition
              }}
            >
              <StyledDatePicker
                key={viewedMonth.toString()}
                defaultValue={viewedMonth}
                onMonthChange={setViewedMonth}
                onChange={handleDateSelection}
                showDaysOutsideCurrentMonth={true}
                fixedWeekNumber={6}
                slots={{
                  calendarHeader: (props) => <CustomHeader {...props} setViewedMonth={setViewedMonth} />,
                  actionBar: () => null,
                  toolbar: () => null,
                }}
                dayOfWeekFormatter={(day) => day.format('ddd')}
                sx={{
                  '& .MuiPickersLayout-contentWrapper': {
                    padding: '0',
                    marginBottom: '-20px',
                  },
                  '& .MuiDayCalendar-header': {
                    paddingTop: '0',
                    paddingBottom: '0',
                    marginBottom: '2px',
                  },
                  '& .MuiDayCalendar-weekContainer': {
                    paddingTop: '0',
                    marginBottom: '1px',
                  }
                }}
              />
              <Box sx={{marginTop: '-16px', padding: '0', borderTop: '1px solid #E1E1E1', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography onClick={() => { handleDateSelection(dayjs()); }} sx={{ fontSize: '14px', color: '#374151', cursor: 'pointer', padding: '6px 16px', textAlign: 'center', width: '100%', '&:hover': { backgroundColor: '#F3F7FF' } }}>
                  Today: {dayjs().format('MMM D, YYYY')}
                </Typography>
                <Box sx={{ width: '100%', height: '0.5px', backgroundColor: '#E1E1E1' }} />
                <Typography onClick={() => handleDateSelection(null)} sx={{ fontSize: '14px', color: '#374151', cursor: 'pointer', padding: '8px 16px', textAlign: 'center', width: '100%', '&:hover': { backgroundColor: '#F3F7FF' } }}>
                  Clear Selection
                </Typography>
              </Box>
            </Paper>
          )}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};





