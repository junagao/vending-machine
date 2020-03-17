import { combineReducers } from 'redux';

import coin from 'reducers/coin';
import product from 'reducers/product';

export default combineReducers({
  coin,
  product,
});
