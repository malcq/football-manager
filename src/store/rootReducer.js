import { combineReducers } from 'redux';

import globalStore from './global/reducer';

export default combineReducers({
  global: globalStore
});
