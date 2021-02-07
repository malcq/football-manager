import { useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const isSelectingFirstDay = (from, to, day) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};

const DatePicker = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [enteredTo, setEnteredTo] = useState(null);
  const disabledDays = { 
    before: new Date('2020-09-20'),
    after: new Date('2021-05-23')
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
    }
  }

  const handleDayMouseEnter = (day) => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  }
  const modifiers = { start: from, end: enteredTo };
  const selectedDays = [from, { from, to: enteredTo }];
  return (
    <div>
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
      <div>
        {!from && !to && 'Please select the first day.'}
        {from && !to && 'Please select the last day.'}
        {from &&
          to &&
          `Selected from ${from.toLocaleDateString()} to
              ${to.toLocaleDateString()}`}{' '}
        {from && to && (
          <button className="link" onClick={handleResetClick}>
            Reset
          </button>
        )}
      </div>
      <Helmet>
        <style>
          {`.Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
            background-color: #f0f8ff !important;
            color: #4a90e2;
          }
          .Range .DayPicker-Day {
            border-radius: 0 !important;
          }`}
        </style>
      </Helmet>
    </div>
  )
}

export default DatePicker;