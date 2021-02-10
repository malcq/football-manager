import { useState, useRef } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import styled from 'styled-components';

import useOutsideClick from '../../hooks/outSideClick';

import 'react-day-picker/lib/style.css';


const formatDate = (day) => {
  const d = new Date(day)
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${ye}-${mo}-${da}`;
}

const DatePicker = ({onDateSelect, disabledArea: [startDate, endDate]}) => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [enteredTo, setEnteredTo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const disabledDays = { 
    before: new Date(startDate),
    after: new Date(endDate)
  };

  const setOpen = () => setIsOpen(true);

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  const handleResetClick = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  }

  const handleDayClick = (day) => {
    const {before, after } = disabledDays;
    const range = {
      from: before,
      to: after
    }

    if (!DateUtils.isDayInRange(day, range)) return;

    if (from && to && day >= from && day <= to) {
      handleResetClick();
      return;
    }

    if (isSelectingFirstDay(from, to, day)) {
      setFrom(day);
      setTo(null);
      setEnteredTo(null);
    
    } else {
      setTo(day);
      setEnteredTo(day);
      onDateSelect(formatDate(from),formatDate(day))
      setIsOpen(false)
    }
  }

  const handleDayMouseEnter = (day) => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  }

  useOutsideClick(ref, () => setIsOpen(false));

  const modifiers = { start: from, end: enteredTo };
  const selectedDays = [from, { from, to: enteredTo }];
  return (
    <SCalendar
      ref={ref}
      className='calendar__layout'
      onClick={setOpen}
    >
      {isOpen 
      &&
      (<>
        <DayPicker
          className="Range"
          numberOfMonths={2}
          fromMonth={from}
          selectedDays={selectedDays}
          disabledDays={disabledDays}
          modifiers={modifiers}
          onDayClick={handleDayClick}
          onDayMouseEnter={handleDayMouseEnter}
        />
        <Helmet>
          <style>
            {`.Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background-color: #f0f8ff !important;
              color: #4a90e2;
            }
            .Range {
              position: absolute;
              color: black;
              background: #ffffff;
              border-radius: 5px;
              box-shadow: 4px 4px 8px 0px rgb(34, 60, 80, 0.2);
              right: 5px;
              top: 30px;
            }
            .Range .DayPicker-Day {
              border-radius: 0 !important;
              outline: none !important;
            }`}
          </style>
        </Helmet>
        </>
      )}
    </SCalendar>
  );
}

export default DatePicker;

const SCalendar = styled.div`
  position: relative;
  padding: 15px;
  background: url(./img/calendar.png) no-repeat 100% 50%;
  background-size: contain;
  cursor: pointer;
`;