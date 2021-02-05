import { Link } from "react-router-dom";


const NavBarMenu = () => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Leagues</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarMenu;