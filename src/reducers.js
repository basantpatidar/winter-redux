import { combineReducers } from 'redux';

const initialState = {
  search: '',
  apiResponse: null
<<<<<<< HEAD
};



const searchReducer = (state = initialState, action) => {

  if (action.type === 'CITY') {
    console.log(state, ' -< - <---  City  action');
    return {
      ...state,
      city: action.payload
    };
  }
  if (action.type === 'ZIP_CODE') {
    console.log('ZipCode');
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
