import styled from 'styled-components';

import { Colors } from '../../styles/variables';


const ListItem = ({ id, name, setValue }) => {
  return (
    <SListItem key={id} onClick={setValue.bind(null, name)} >{name}</SListItem>
  )
}

export default ListItem;

const { white, rainyDark } = Colors;

const SListItem = styled.li`
  padding: 0 15px;
  line-height: 30px;
  &:hover {
    color: ${white};
    background-color: ${rainyDark};
    cursor: pointer;
  }
`;