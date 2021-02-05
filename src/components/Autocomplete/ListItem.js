const ListItem = ({ id, name, setValue }) => {
  return (
    <li key={id} onClick={setValue.bind(null, name)} >{name}</li>
  )
}

export default ListItem;