import { useState, useRef } from 'react';
import styled from 'styled-components';

import { Colors, BoxShadows } from '../../styles/variables';
import useOutsideClick from '../../hooks/outSideClick';
import config from '../../config';

const startYear = 2010;
const endYear = 2021;
const years = config.setSeasons(startYear, endYear);

const CustomSelect = ({ year = '', onSeasonSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectVal, setSelectVal] = useState(year);
  const ref = useRef();

  const setOpen = () => setIsOpen(true);
  const setClose = (value) =>  {
    onSeasonSelect(value);
    setSelectVal(value);
    setIsOpen(false);
  }

  const handleChange = ({target: { value }}) => {
    if (
      (!/^\d+$/.test(value) && value.length)
    ||
      (value.length > 4)
    ) return;

    if (value.length === 4) {
      value = (value >= startYear && value <= endYear) ? value : endYear;
      onSeasonSelect(value);
      setIsOpen(false);
    }
    setSelectVal(value);
  }

  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <SForm className='select' ref={ref} >
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
    </SForm>
  )
}

export default CustomSelect;

const SForm = styled.form`
  position: relative;
  .select-list {
    position: absolute;
    top: 25px;
    width: 100%;
    background-color: ${Colors.white};
    box-shadow: ${BoxShadows.main};
    &__input {
      padding: 5px 10px;
      cursor: pointer;
      :hover {
        color: ${Colors.white};
        background-color: ${Colors.blue};
      }
    }
  }
`;