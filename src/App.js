import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import AppRoute from './routes';
import Header from './components/Header';

const App = () => (
  <SApp>
    <Header />
    <AppRoute />
    <ToastContainer />
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
