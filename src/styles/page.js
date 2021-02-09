import styled from 'styled-components';

import { Colors, BoxShadows } from './variables';
 

 const SPage = styled.section`
  max-width: 95%;
  margin: 0 auto;
  padding: 20px;
  color: ${Colors.black};
  border-radius: 5px;
  background: ${Colors.white};
  box-shadow: ${BoxShadows.main};
  box-sizing: border-box;
  @media only screen and (max-width: 760px) {
    max-width: 99%;
  }
  @media only screen and (max-width: 420px) {
    padding: 10px 5px;
  }
  .page {
    &__title {
      font-size: 2em;
      text-align: center;
    }
    &__panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &--team {
        justify-content: flex-end;
      }
    }
    &__reset {
      width: 150px;
      margin: 0 auto;
      padding: 5px 10px;
      text-align: center;
      background-color: ${Colors.grey};
      box-shadow: ${BoxShadows.main};
      cursor: pointer;
      &:active {
        transform: scale(.8);      
      }
    }
  }
`;

export default SPage;