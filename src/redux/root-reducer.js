import { combineReducers } from 'redux';
import userSlice from './users/user-slice';

const rootReducer = combineReducers({
  users: userSlice,
});

export default rootReducer;
