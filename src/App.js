import styled from 'styled-components';

import AppRoute from './routes';
import Header from './components/Header';


const App = () => (
  <SApp>
    <Header />
    <AppRoute />
  </SApp>
);

const SApp = styled.div`
  padding: 5px;
  background-image: url('/img/bg-main.jpg');
  background-size: contain;
  background-position: top;
  height: calc(100vh - 10px);
`;

export default App;
