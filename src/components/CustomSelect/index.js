import { useState } from 'react';

import config from '../../config';

const startYear = 2010;
const endYear = 2021;
const years = config.setSeasons(startYear, endYear);

const CustomSelect = ({ year = '', onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectVal, setSelectVal] = useState(year);
  const setOpen = () => setIsOpen(true);
  const setClose = (value) =>  {
    onSelect(value);
    setSelectVal(value);
    setIsOpen(false);
  }

  const handleChange = ({target: { value }}) => {
    if (!/^\d+$/.test(value) && value.length || value.length > 4) return;
    if (value.length === 4) {
      value = (value >= startYear && value <= endYear) ? value : endYear;
      onSelect(value);
      setIsOpen(false);
    }
    setSelectVal(value);
  }

  return (
    <form className='select' >
      <label htmlFor="">
        <input 
          type="text"
          className='select__input'
          onChange={handleChange}
          onClick={setOpen}
          value={selectVal}
        />
      </label>
      { isOpen && (<ul className="select-list">
        {years.map((year, idx) =>
          <li
            key={idx} 
            className='select-list__input'
            onClick={setClose.bind(null,year)}
          >
            {year}
          </li>)}
      </ul>)}
    </form>
  )
}

export default CustomSelect;