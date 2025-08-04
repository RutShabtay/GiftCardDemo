import React, { useState, useRef, useEffect } from 'react';
import { CalendarDays } from 'lucide-react';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { addLocale } from 'primereact/api';
import dayjs, { Dayjs } from 'dayjs';

// Import CSS for PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// Removed FontAwesome import, using lucide-react instead
// Removed FontAwesome import, using lucide-react instead

// Add custom locale for three-letter day names
addLocale('en', {
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
});

interface PrimeReactDatePickerProps {}

const overrideStyles = `
      /* When hovering over a selected date's cell, make its background transparent */
      /* .p-datepicker-calendar td[data-p-highlight="true"]:hover {
        background: transparent !important;
      } */

      /* Remove the original weekday header */
      .p-datepicker .p-datepicker-calendar thead {
        display: none !important;
      }

      /* Remove outline and border from footer buttons */
      .p-button-text:focus {
        outline: none !important;
        box-shadow: none !important;
        border: none !important;
      }
      
      .p-button-text:hover {
        outline: none !important;
        box-shadow: none !important;
        border: none !important;
      }

             /* Make footer buttons not bold */
       .p-button-text {
         font-weight: normal !important;
       }
       
       .p-button-text .p-button-label {
         font-weight: normal !important;
       }

       /* Remove background from header navigation buttons */
       .p-button-text.p-button-plain {
         background: transparent !important;
         border: none !important;
         box-shadow: none !important;
       }
       
       .p-button-text.p-button-plain:hover {
         background: transparent !important;
         border: none !important;
         box-shadow: none !important;
       }
       
       .p-button-text.p-button-plain:focus {
         background: transparent !important;
         border: none !important;
         box-shadow: none !important;
       }

             /* Set placeholder color */
       .p-inputtext::placeholder {
         color: #808D95 !important;
         opacity: 1; /* For Firefox */
         font-family: 'Lato', sans-serif !important;
         font-size: 14px !important;
         line-height: 17px !important;
       }

      
      /* Ensure no default PrimeReact blue shadow on focus */
      .p-inputtext:focus {
          box-shadow: none !important;
      }
      
      /* Remove border below the custom weekday header */
      .p-datepicker .p-datepicker-content {
        border-top: none !important;
      }
      
      .p-dropdown .p-dropdown-trigger .p-icon {
        color: black !important;
      }

      /* Fix dropdown styling */
      .p-dropdown {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }

      .p-dropdown:not(.p-disabled).p-focus {
        box-shadow: none !important;
        border: none !important;
      }

      .p-dropdown-panel {
        z-index: 10000 !important;
        background: white !important;
        border: 1px solid #ddd !important;
        border-radius: 4px !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
      }

      .p-dropdown-items {
        padding: 0 !important;
      }

      .p-dropdown-item {
        padding: 8px 12px !important;
        cursor: pointer !important;
      }

      .p-dropdown-item:hover {
        background-color: #f0f0f0 !important;
      }

      .p-dropdown-trigger {
        cursor: pointer !important;
        padding: 4px !important;
      }

          
      .p-datepicker table td.p-datepicker-today {
        background-color: transparent !important;
      }
      .p-datepicker table td.p-datepicker-today > span {
        background-color: transparent !important;
      }
      .p-datepicker table td:hover {
        background-color: #f0f0f0 !important;
        border-radius: 50% !important;
      }
      .p-datepicker table td:hover > span {
        background-color: #f0f0f0 !important;
        border-radius: 50% !important;
      }

      /* Compress spacing between date rows */
      .p-datepicker table tr {
        height: 0px !important;
        line-height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      .p-datepicker table td {
        height: 0px !important;
        padding: 0 !important;
        margin: 0 !important;
        vertical-align: middle !important;
        border-spacing: 0 !important;
      }

      .p-datepicker table {
        border-spacing: 0 !important;
        border-collapse: collapse !important;
        line-height: 0 !important;
      }
      
             /* Additional compression for date cells */
       .p-datepicker table td > span {
         margin: 0 !important;
         padding: 0 !important;
         line-height: 1 !important;
       }
       
       /* Mobile-specific styles */
       @media (max-width: 768px) {
         .p-datepicker table td > span {
           width: 20px !important;
           height: 20px !important;
           font-size: 11px !important;
         }
         
         .p-datepicker table td {
           padding: 2px !important;
         }
         
         .p-datepicker table {
           font-size: 11px !important;
         }
         
         .p-datepicker .p-datepicker-header {
           padding: 4px 8px !important;
         }
         
         .p-datepicker .p-datepicker-header button {
           width: 24px !important;
           height: 24px !important;
         }
       }
      `;

export const PrimeReactDatePicker: React.FC<PrimeReactDatePickerProps> = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const [calendarPosition, setCalendarPosition] = useState<React.CSSProperties>({});
  const [lastScrollY, setLastScrollY] = useState(0);

  
  const [primeSelectedDate, setPrimeSelectedDate] = useState<Date | null>(null);
  const [primeError, setPrimeError] = useState(false);

  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const handlePrimeDateChange = (newValue: Date | null) => {
    setPrimeSelectedDate(newValue);
    if (newValue) {
      if (dayjs(newValue).isBefore(dayjs(), 'day')) {
        setPrimeError(true);
      } else {
        setPrimeError(false);
      }
      setCurrentDate(dayjs(newValue));
    } else {
      setPrimeError(false);
    }
    setShowCalendar(false);
  };

  const handleCalendarChange = (e: any) => {
    handlePrimeDateChange(e.value);
  };

  

  const handleOpen = () => {
    if (!showCalendar) {
      setCurrentDate(primeSelectedDate ? dayjs(primeSelectedDate) : dayjs());
      setLastScrollY(window.scrollY); // Set initial scroll position
    }
    setShowCalendar(!showCalendar);
  };

  const handleToday = () => {
    const today = new Date();
    setPrimeSelectedDate(today);
    setCurrentDate(dayjs(today));
    setPrimeError(false);
    setShowCalendar(false);
  };

  const handleClear = () => {
    setPrimeSelectedDate(null);
    setPrimeError(false);
    setShowCalendar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (showCalendar) {
        // Recalculate position on resize
        if (inputContainerRef.current) {
          const rect = inputContainerRef.current.getBoundingClientRect();
          const calendarWidth = 308;
          const calendarMargin = 8;
          const spaceOnRight = window.innerWidth - (rect.left + rect.width);
          const isMobile = window.innerWidth <= 768;

          const positionStyle: React.CSSProperties = {
            position: 'fixed',
            zIndex: 9999,
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            overflow: 'hidden',
            width: `${calendarWidth}px`
          };

          if (isMobile) {
            // On mobile, use smaller calendar and position it properly
                           const mobileCalendarWidth = Math.min(window.innerWidth - 20, 280); // Larger width for mobile
            positionStyle.width = `${mobileCalendarWidth}px`;
            positionStyle.top = rect.bottom + 5; // Position directly below input with small gap
            positionStyle.left = rect.left; // Align exactly with input start
                          positionStyle.maxHeight = '70vh'; // Much larger height to avoid scrolling
            positionStyle.overflowY = 'auto'; // Enable scrolling
          } else {
            // Desktop positioning
            if (spaceOnRight >= calendarWidth + calendarMargin) {
              positionStyle.top = rect.top;
              positionStyle.left = rect.left + rect.width + calendarMargin;
            } else {
              positionStyle.top = rect.top + rect.height + calendarMargin;
              positionStyle.left = rect.left;
            }
          }
          setCalendarPosition(positionStyle);
        }
      }
    };

    const handleScroll = () => {
      if (showCalendar) {
        const currentScrollY = window.scrollY;
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);
        
        // On mobile, allow less scroll before closing
        const isMobile = window.innerWidth <= 768;
        const scrollThreshold = isMobile ? 20 : 10; // 20px on mobile, 10px on desktop
        
        if (scrollDifference > scrollThreshold) {
          console.log('Scroll threshold exceeded, closing calendar');
          setShowCalendar(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as Element).closest('.p-dropdown-panel')) {
        return;
      }
      if ((event.target as Element).closest('.p-datepicker')) {
        return;
      }
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true); // true for capture phase

    if (showCalendar) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [showCalendar, lastScrollY]);

  useEffect(() => {
    if (showCalendar && inputContainerRef.current) {
        const rect = inputContainerRef.current.getBoundingClientRect();
        const calendarWidth = 308;
        const calendarMargin = 8;
        const spaceOnRight = window.innerWidth - (rect.left + rect.width);
        const isMobile = window.innerWidth <= 768;

        const positionStyle: React.CSSProperties = {
            position: 'fixed',
            zIndex: 9999,
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            overflow: 'hidden',
            width: `${calendarWidth}px`
        };

                                                                     if (isMobile) {
              // On mobile, use smaller calendar and position it properly
              const mobileCalendarWidth = Math.min(window.innerWidth - 20, 280); // Larger width for mobile
              positionStyle.width = `${mobileCalendarWidth}px`;
              positionStyle.top = rect.bottom + 5; // Position directly below input with small gap
              positionStyle.left = rect.left; // Align exactly with input start
              positionStyle.maxHeight = '70vh'; // Much larger height to avoid scrolling
              positionStyle.overflowY = 'auto'; // Enable scrolling
          } else {
            // Desktop positioning
            if (spaceOnRight >= calendarWidth + calendarMargin) {
                positionStyle.top = rect.top;
                positionStyle.left = rect.left + rect.width + calendarMargin;
            } else {
                positionStyle.top = rect.top + rect.height + calendarMargin;
                positionStyle.left = rect.left;
            }
        }
        setCalendarPosition(positionStyle);
    }
}, [showCalendar]);


  const getInputStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      width: '274px',
      height: '32px',
      padding: '0 45px 0 14px',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: "'Lato', sans-serif",
      lineHeight: '17px',
      boxSizing: 'border-box',
      transition: 'all 0.2s ease',
      outline: 'none',
      color: primeSelectedDate ? '#021D2D' : '#808D95',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center'
    };

    if (primeError) {
      return { ...baseStyles, backgroundColor: '#ffebee', border: '1px solid #e24c4c' };
    }

    if (isHovering) {
      return { ...baseStyles, backgroundColor: '#f3f7ff', border: '1px solid #DDE2E5' };
    }

    if (showCalendar) {
      return { ...baseStyles, backgroundColor: 'white', border: '1px solid #6780FF' };
    }

    return { ...baseStyles, backgroundColor: 'white', border: '1px solid #BAC1C5' };
  };

    const footerButtonStyles: React.CSSProperties = {
    fontSize: '14px',
    color: '#021D2D',
    fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 'normal',
    cursor: 'pointer',
    padding: '8px 0px',
    textAlign: 'center',
    width: '100%',
    margin: '0',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
  };

  const CustomHeader = () => {
    const monthOptions = Array.from({ length: 12 }, (_, i) => ({
      label: dayjs().month(i).format('MMM'),
      value: i,
    }));

    const yearOptions = Array.from({ length: 21 }, (_, i) => {
      const year = 2015 + i;
      return { label: year.toString(), value: year };
    });

    const dropdownStyles: React.CSSProperties = {
        border: 'none',
        boxShadow: 'none',
        padding: '0.25rem'
    }

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div>
        <div style={{ padding: '4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
          <Button icon="pi pi-chevron-left" className="p-button-text p-button-plain" onClick={() => setCurrentDate(currentDate.subtract(1, 'month'))} />
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            <Dropdown
              value={currentDate.month()}
              options={monthOptions}
              onChange={(e) => setCurrentDate(currentDate.month(e.value))}
              style={dropdownStyles}
              placeholder="Month"
              showClear={false}
              appendTo={document.body}
              pt={{ 
                trigger: { style: { width: 'auto', minWidth: '50px', cursor: 'pointer' } }, 
                panel: { style: { zIndex: 10000 } },
                root: { style: { width: 'auto' } }
              }}
            />
            <Dropdown
              value={currentDate.year()}
              options={yearOptions}
              onChange={(e) => setCurrentDate(currentDate.year(e.value))}
              style={dropdownStyles}
              placeholder="Year"
              showClear={false}
              appendTo={document.body}
              pt={{ 
                trigger: { style: { width: 'auto', minWidth: '50px', cursor: 'pointer' } }, 
                panel: { style: { zIndex: 10000 } },
                root: { style: { width: 'auto' } }
              }}
            />
          </div>
          <Button icon="pi pi-chevron-right" className="p-button-text p-button-plain" onClick={() => setCurrentDate(currentDate.add(1, 'month'))} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0.15rem 0' }}>
          {weekDays.map(day => (
            <div key={day} style={{ color: '#6D7275', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const dateTemplate = (date: { day: number, month: number, year: number, otherMonth: boolean, selectable: boolean, today: boolean }) => {
    const cellDate = dayjs(new Date(date.year, date.month, date.day));
    const isPast = cellDate.isBefore(dayjs(), 'day');
    const isSelected = primeSelectedDate && cellDate.isSame(dayjs(primeSelectedDate), 'day');

         const isMobile = window.innerWidth <= 768;
     const style: React.CSSProperties = {
         width: isMobile ? '20px' : '26px',
         height: isMobile ? '20px' : '26px',
         borderRadius: '50%',
         fontSize: isMobile ? '11px' : '13px',
         margin: '1px auto',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         border: 'none',
         transition: 'background-color 0.2s, color 0.2s',
         color: date.otherMonth || isPast ? '#D3D3D3' : '#000',
         backgroundColor: 'transparent'
     };

    // if (date.today && !isSelected) {
    //     style.color = '#1976d2';
    //     style.fontWeight = 'normal'
    // }

    if (isSelected) {
        style.backgroundColor = '#b9d0ff';
        style.color = '#000';
    }
    if (date.today) {
        if (isSelected) {
            // כשהתאריך של היום נבחר - רקע כחול אבל צבע טקסט מיוחד
            style.backgroundColor = '#b9d0ff';
            style.color = '#1976d2'; // שומר על הצבע הכחול של היום
            style.fontWeight = 'bold';
        } else {
            // כשהתאריך של היום לא נבחר - רק הצבע והפונט
            style.color = '#1976d2';
            style.fontWeight = 'bold';
            style.backgroundColor = 'transparent';
        }
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!isSelected) {
            e.currentTarget.style.backgroundColor = '#f0f0f0';
        }
        // Keep selected state when hovering
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!isSelected) {
            e.currentTarget.style.backgroundColor = 'transparent';
        }
        // Keep selected state when leaving
    };

    return (
        <span style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {date.day}
        </span>
    );
  };


  return (
    <div style={{ flex: '1', minWidth: '350px', maxWidth: '500px' }}>
      <style>{overrideStyles}</style>
      <div ref={containerRef} style={{ width: '340px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ width: '274px' }}>
          <div style={{ color: '#464E53', fontSize: '14px', fontWeight: '400', textAlign: 'left', lineHeight: '17px', fontFamily: "'Lato', sans-serif", letterSpacing: '0%', marginBottom: '4px' }}>
            Date of birth *
          </div>
        </div>
        
        <div style={{ width: '274px', minHeight: '76px' }}>
          <div ref={inputContainerRef} style={{ position: 'relative', display: 'inline-block', width: '274px' }}>
            <InputText
              placeholder="Select date"
              value={primeSelectedDate ? dayjs(primeSelectedDate).format('MMM DD, YYYY') : ''}
              readOnly
              onClick={handleOpen}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={getInputStyles()}
            />
            <CalendarDays 
              size={17} 
              color="#BAC1C5"
              onClick={handleOpen}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                zIndex: 10,
                pointerEvents: 'auto'
              }}
            />
        {showCalendar && (
                <div style={calendarPosition}>
            <CustomHeader />
            <Calendar
              value={primeSelectedDate}
              onChange={handleCalendarChange}
              inline
              showOtherMonths={true}
              selectOtherMonths={true}
              locale="en" 
                        dateTemplate={dateTemplate}
              viewDate={currentDate.toDate()}
              onViewDateChange={(e) => setCurrentDate(dayjs(e.value as Date))}
              pt={{
                            root: { style: { width: '308px', border: 'none' } },
                header: { style: { display: 'none' } },
                            container: { style: { border: 'none', boxShadow: 'none' } },
                            table: { style: { borderCollapse: 'collapse', borderSpacing: 0, width: '100%', tableLayout: 'fixed' } },
                            weekHeader: { style: { } },
                            weekDay: { style: { color: '#6D7275', fontSize: '12px', fontWeight: 600, textAlign: 'center' } },
                            day: { style: { padding: 0 } },
                        }}
                    />
                    <div style={{ marginTop: '8px', padding: '0 0 2px 0', backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Button
                            label={`Today: ${dayjs().format('MMM D, YYYY')}`}
                            onClick={handleToday}
                            className="p-button-text"
                            style={footerButtonStyles}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3f7ff')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        />
                                        <div style={{ width: '100%', height: '1px', backgroundColor: '#e1e1e1', margin: '8px 0 4px 0' }} />
                                        <Button
                  label="Clear Selection"
                            onClick={handleClear}
                            className="p-button-text"
                            style={footerButtonStyles}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F3F7FF')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                        />
                    </div>
                </div>
            )}
          </div>
          <div style={{ marginTop: '4px', textAlign: 'left', color: primeError ? '#E24C4C' : 'transparent', fontSize: '0.875rem', minHeight: '20px' }}>
            {primeError ? 'Date cannot be in the past' : ' '}
          </div>
        </div>
      </div>

    </div>
  );
};





