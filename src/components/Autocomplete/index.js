import { useState, useRef } from 'react';
/* import { useSelector, useDispatch, shallowEqual } from "react-redux"; */
import styled from 'styled-components';

import useOutsideClick from '../../hooks/outSideClick';
import ListItem from './ListItem';

const AutoCompleteInput = ({ list, onSearch, searchVal }) => {
  const [isOpen, toggleOpen] = useState(false);
  const [autoCompleteVal, setAutocompleteVal] = useState(searchVal);
  const ref = useRef();

  const filterList = (searchString) =>  {
    if (!searchString) return list;
    return list.filter(({ name }) => name.startsWith(searchString))
  }

  const searchList = filterList(autoCompleteVal);
  const onChange = ({target: { value }}) => setAutocompleteVal(value);
  const onSubmit = (e) => e.preventDefault();
  const onClick = () => toggleOpen(true);

  const onHandleClick = (value) => {
    setAutocompleteVal(value)
    onSearch(value);
    toggleOpen(false);
  }

  useOutsideClick(ref, () => toggleOpen(false));
  
  return (
    <SForm  ref={ref} onSubmit={onSubmit} >
      <label>
        <input 
          type="text"
          className="autocomplete-form__input"
          onChange={onChange}
          onClick={onClick}
          value={autoCompleteVal}
        />
      </label>
      <button className="autocomplete-form__btn">Search</button>
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
    </SForm>
    
  )
}

const SForm = styled.form`
  position: relative;
  text-align: right;

  .autocomplete {
    &__list {
      position: absolute;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      top: 30px;
      right: 60px;
    }
  }
`;
export default AutoCompleteInput;