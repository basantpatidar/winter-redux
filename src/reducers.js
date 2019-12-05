import { combineReducers } from 'redux';

const initialState = {
  search: '',
  apiResponse: null
};

const searchReducer = (state = initialState, action) => {
  if (action.type === 'CITY') {
    return {
      ...state,
      city: action.payload
    };
  }
  if (action.type === 'ZIP_CODE') {
    return {
      ...state,
      ...action.payload
    };
  }
  //  if(action.type === "SET_WEATHER"){
  //    return {
  //      ...state, apiResponse : action.payload
  //    }
  //  }
  return state;
};
export default combineReducers({
  searchReducer
});
