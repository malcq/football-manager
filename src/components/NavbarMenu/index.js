import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Colors, BoxShadows } from '../../styles/variables';


const NavBarMenu = () => (
  <SHeader>
    <nav>
      <Link to="/">Leagues</Link>
    </nav>
  </SHeader>
)

export default NavBarMenu;

const { white, rainyDark } = Colors;

const SHeader = styled.header`
  max-width: 95%;
  margin: 10px auto;
  padding: 20px;
  color: ${white};
  font-size: 1.2em;
  font-weight: 500;
  background-color: ${rainyDark};
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: ${BoxShadows.main};
  @media only screen and (max-width: 760px) {
    max-width: 99%;
    padding: 10px 20px;
  }
`;