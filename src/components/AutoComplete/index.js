import { useState, useRef } from 'react';
import styled from 'styled-components';

import { Colors, BoxShadows } from '../../styles/variables';
import useOutsideClick from '../../hooks/outSideClick';
import ListItem from './ListItem';


const AutoCompleteInput = ({ list, onSearch, searchVal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [autoCompleteVal, setAutocompleteVal] = useState(searchVal);
  const ref = useRef();

  const filterList = (searchString) =>  {
    if (!searchString) return list;
    return list.filter(({ name }) => name.startsWith(searchString))
  }

  const searchList = filterList(autoCompleteVal);
  const onChange = ({target: { value }}) => setAutocompleteVal(value);
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(autoCompleteVal);
    setIsOpen(false);
  }
  const onClick = () => setIsOpen(true);

  const onHandleClick = (value) => {
    setAutocompleteVal(value)
    onSearch(value);
    setIsOpen(false);
  }

  useOutsideClick(ref, () => setIsOpen(false));
  
  return (
    <SAutoComplete ref={ref} onSubmit={onSubmit} isOpen={isOpen} >
      <span
        className='autocomplete-form__reset'
        onClick={onHandleClick.bind(null,'')}
      >
        reset
      </span>
      <label>
        <input 
          type="text"
          className="autocomplete-form__input"
          onChange={onChange}
          onClick={onClick}
          value={autoCompleteVal}
        />
      </label>
      <button 
        type="submit"
        className="autocomplete-form__btn"
      />
      
      {
        isOpen && (
          <ul className="autocomplete__list">
            {searchList.map(({id, name}) => 
              <ListItem 
                key={id}
                id={id}
                name={name}
                setValue={onHandleClick}
              />)}
          </ul>
        )
      }
    </SAutoComplete>
    
  )
}

export default AutoCompleteInput;

const { white, grey } = Colors;

const SAutoComplete = styled.form`
  position: relative;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 760px) {
    margin: 10px 0;
    justify-content: space-between;
    label {
      width: 100%;
    }
  }
  .autocomplete {
    &-form {
      &__reset {
        display: inline-block;
        margin-right: 10px;
        padding: 0 25px;
        background-color: ${grey};
        box-shadow: ${BoxShadows.main};
        cursor: pointer;
        :active {
          transform: scale(.8);      
        }
      }
      &__input {
        width: 213px;
        @media only screen and (max-width: 760px) {
          width: 95%;
        }
      }

      &__search-layout {
        padding: 5px;
        background-image: url(./img/search.png);
      }

      &__btn {
        margin-left: 10px;
        width: 20px;
        height: 20px;
        background: ${white} url(./img/search.png) no-repeat 50% 50%;
        background-size: contain;
        overflow: hidden;
        border: none;
        cursor: pointer;
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      width: 220px;
      position: absolute;
      top: 25px;
      right: 30px;
      background: ${white};
      box-shadow: ${BoxShadows.main};
      z-index: 1;

      @media only screen and (max-width: 760px) {
        width: 90%;
        right: 0;
      }
    }
  }
`;
