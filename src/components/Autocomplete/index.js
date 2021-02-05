import { useState, useRef, useMemo } from 'react';
/* import { useSelector, useDispatch, shallowEqual } from "react-redux"; */
import styled from 'styled-components';

import useOutsideClick from '../../hooks/outSideClick';
import ListItem from './ListItem';

const AutoCompleteInput = ({ list, onUpdList }) => {
  const [isOpen, toggleOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const ref = useRef();

  const filterList = (searchValue) =>  {
    if (!searchValue) return list;
    return list.filter(({ name }) => name.startsWith(searchValue));
  }

  const searchList = filterList(searchValue);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  };

  const onChange = ({target: { value }}) => {
    setSearchValue(value);
  }

  const onClick = ({target: { value }}) => {
    toggleOpen(!isOpen)
  }

  useOutsideClick(ref, () => {
    toggleOpen(false);
  });

  const onSetValue = (value) => {
    console.log(value);
    setSearchValue(value)
    onUpdList(filterList(value));
    toggleOpen(false);
    /* setSearchValue(value);
    console.log(searchList); */
    
  }
  
  return (
    <SForm  ref={ref} onSubmit={onSubmit} method="post">
      <label>
        <input type="text" className="autocomplete-form__input" onChange={onChange} onClick={onClick} value={searchValue} />
      </label>
      <button className="autocomplete-form__btn">Search</button>
      {
        isOpen && (
          <ul className="autocomplete__list">
            {searchList.map(({id, name}) => <ListItem key={id} id={id} name={name} setValue={onSetValue} />)}
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